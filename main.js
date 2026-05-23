import * as THREE from 'three';
import Lenis from 'lenis';

/* =========================================================
   USTA-style reactive scene — v2
   - Lenis smooth scroll drives all progress values
   - GPU shader particles (vertex shader blends per-particle
     From / To targets, curl-noise turbulence, soft sprite)
   - Page-load intro: particles assemble from a scattered
     seed into the BOOST galaxy as the loader fills
   - Horizontal showcase scroll hooked into Lenis
   ========================================================= */

/* ---------------- Lenis smooth scroll ---------------- */
const lenis = new Lenis({
  duration: 1.15,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  smoothTouch: false,
});

let scrollY = 0;
lenis.on('scroll', ({ scroll }) => { scrollY = scroll; });

function rafLenis(time) {
  lenis.raf(time);
  requestAnimationFrame(rafLenis);
}
requestAnimationFrame(rafLenis);

/* ---------------- Three.js setup ---------------- */
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000010, 0.0008);

const camera = new THREE.PerspectiveCamera(55, innerWidth/innerHeight, 0.1, 4000);
camera.position.set(0, 0, 320);

/* ---------------- Starfield ---------------- */
function makeStars(count, radius, size, color) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * (0.5 + Math.random() * 0.5);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    pos[i*3]   = r * Math.sin(phi) * Math.cos(theta);
    pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i*3+2] = r * Math.cos(phi);
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color, size, sizeAttenuation: true, transparent: true, opacity: 0.85,
    depthWrite: false, blending: THREE.AdditiveBlending,
  });
  return new THREE.Points(geo, mat);
}
const starsFar  = makeStars(2200, 1600, 1.4, 0xbfd2ff);
const starsNear = makeStars(900,   900, 2.0, 0xffffff);
scene.add(starsFar, starsNear);

/* ---------------- Particle targets ---------------- */
const COUNT = 12000;

function targetGalaxy(i) {
  const branch = i % 3;
  const arm = (branch / 3) * Math.PI * 2;
  const radius = Math.pow(Math.random(), 0.6) * 140;
  const angle = arm + radius * 0.05 + Math.random() * 0.15;
  const tail = Math.pow(Math.random(), 2) * 240;
  return [
    Math.cos(angle) * radius + tail * 0.4,
    Math.sin(angle) * radius * 0.55 - tail * 0.15,
    (Math.random() - 0.5) * 50,
  ];
}
function targetSphere() {
  const u = Math.random(), v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = 70 + Math.random() * 20;
  return [r*Math.sin(phi)*Math.cos(theta), r*Math.sin(phi)*Math.sin(theta), r*Math.cos(phi)];
}
function targetDisc() {
  const a = Math.random() * Math.PI * 2;
  const r = 100 + Math.random() * 80;
  return [Math.cos(a)*r, Math.sin(a)*r*0.45, (Math.random()-0.5)*30];
}
function targetDispersed() {
  return [(Math.random()-0.5)*700, (Math.random()-0.5)*500, (Math.random()-0.5)*200 - 100];
}
function targetVortex(i) {
  const t = i / COUNT;
  const a = t * Math.PI * 30;
  const r = 30 + (1 - t) * 180;
  return [Math.cos(a)*r, Math.sin(a)*r, -300 + t * 600];
}

const builders = [targetGalaxy, targetSphere, targetDisc, targetDispersed, targetDispersed, targetVortex];
const targets = builders.map((b) => {
  const arr = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    const p = b(i);
    arr[i*3] = p[0]; arr[i*3+1] = p[1]; arr[i*3+2] = p[2];
  }
  return arr;
});
const SEG_MAX = targets.length - 1;

/* ---------------- Per-particle attributes ---------------- */
const aFrom  = new Float32Array(COUNT * 3);
const aTo    = new Float32Array(COUNT * 3);
const aSeed  = new Float32Array(COUNT * 3);   // scattered "intro" position + noise seed
const aColor = new Float32Array(COUNT * 3);
const aSize  = new Float32Array(COUNT);
const aPhase = new Float32Array(COUNT);

const palette = [
  new THREE.Color(0xffffff),
  new THREE.Color(0xff7ad9),
  new THREE.Color(0x6cc8ff),
  new THREE.Color(0xffd277),
  new THREE.Color(0xb59bff),
];

// initial seed positions — a wild dispersed cloud used during intro
for (let i = 0; i < COUNT; i++) {
  // scattered seed: far-flung sphere with random radius
  const u = Math.random(), v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = 600 + Math.random() * 600;
  aSeed[i*3]   = r * Math.sin(phi) * Math.cos(theta);
  aSeed[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
  aSeed[i*3+2] = r * Math.cos(phi);

  const c = palette[Math.floor(Math.random() * palette.length)];
  aColor[i*3] = c.r; aColor[i*3+1] = c.g; aColor[i*3+2] = c.b;

  aSize[i]  = 1.6 + Math.random() * 3.4;
  aPhase[i] = Math.random() * Math.PI * 2;
}

// initial segment: 0 → 1 (galaxy → sphere). Filled at startup,
// then rebuilt only when the integer segment changes.
aFrom.set(targets[0]);
aTo.set(targets[1]);

const geo = new THREE.BufferGeometry();
geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(COUNT * 3), 3)); // dummy
geo.setAttribute('aFrom',  new THREE.BufferAttribute(aFrom, 3));
geo.setAttribute('aTo',    new THREE.BufferAttribute(aTo, 3));
geo.setAttribute('aSeed',  new THREE.BufferAttribute(aSeed, 3));
geo.setAttribute('aColor', new THREE.BufferAttribute(aColor, 3));
geo.setAttribute('aSize',  new THREE.BufferAttribute(aSize, 1));
geo.setAttribute('aPhase', new THREE.BufferAttribute(aPhase, 1));

/* ---------------- Shader material ---------------- */
const vertexShader = /* glsl */`
  attribute vec3 aFrom;
  attribute vec3 aTo;
  attribute vec3 aSeed;
  attribute vec3 aColor;
  attribute float aSize;
  attribute float aPhase;

  uniform float uK;        // blend within segment [0..1]
  uniform float uIntro;    // 0 = scattered seed, 1 = galaxy
  uniform float uTime;
  uniform vec2  uMouse;
  uniform float uPixel;

  varying vec3 vColor;
  varying float vAlpha;

  // cheap pseudo-curl noise via layered sines — gives organic drift
  vec3 turbulence(vec3 p) {
    return vec3(
      sin(p.y * 0.013 + uTime * 0.6),
      cos(p.z * 0.011 + uTime * 0.5),
      sin(p.x * 0.012 + uTime * 0.7)
    );
  }

  void main() {
    // segment blend (linear, smoothed)
    float k = smoothstep(0.0, 1.0, uK);
    vec3 base = mix(aFrom, aTo, k);

    // intro reveal: scattered seed → base
    float intro = smoothstep(0.0, 1.0, uIntro);
    // stagger per particle so they don't arrive together
    float stagger = intro * 1.4 - fract(aPhase * 0.5) * 0.4;
    stagger = clamp(stagger, 0.0, 1.0);
    stagger = smoothstep(0.0, 1.0, stagger);
    vec3 pos = mix(aSeed, base, stagger);

    // organic turbulence
    pos += turbulence(pos + aPhase) * 4.0;

    // mouse parallax in world space
    pos.x += uMouse.x * 12.0;
    pos.y += -uMouse.y * 10.0;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;

    // point size: bigger when closer, breathing pulse
    float pulse = 0.85 + 0.15 * sin(uTime * 1.4 + aPhase * 3.0);
    gl_PointSize = aSize * pulse * uPixel * (260.0 / -mv.z);

    vColor = aColor;
    vAlpha = mix(0.0, 1.0, stagger);
  }
`;

const fragmentShader = /* glsl */`
  precision mediump float;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    // soft round sprite via radial falloff
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d);
    a = pow(a, 1.6);
    gl_FragColor = vec4(vColor, a * vAlpha * 0.95);
  }
`;

const mat = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uK:     { value: 0 },
    uIntro: { value: 0 },
    uTime:  { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uPixel: { value: Math.min(devicePixelRatio, 2) },
  },
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

const points = new THREE.Points(geo, mat);
points.frustumCulled = false;
scene.add(points);

/* ---------------- Segment swap helper ----------------
   Only re-upload aFrom / aTo when the integer segment changes.
*/
let currentSeg = -1;
function updateSegment(seg) {
  if (seg === currentSeg) return;
  currentSeg = seg;
  const from = targets[seg];
  const to   = targets[Math.min(SEG_MAX, seg + 1)];
  aFrom.set(from);
  aTo.set(to);
  geo.getAttribute('aFrom').needsUpdate = true;
  geo.getAttribute('aTo').needsUpdate   = true;
}
updateSegment(0);

/* ---------------- Mouse / resize ---------------- */
const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
addEventListener('mousemove', (e) => {
  mouse.tx = (e.clientX / innerWidth)  * 2 - 1;
  mouse.ty = (e.clientY / innerHeight) * 2 - 1;
});
addEventListener('resize', () => {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  mat.uniforms.uPixel.value = Math.min(devicePixelRatio, 2);
});

/* ---------------- Intro loader ---------------- */
const loaderEl  = document.getElementById('loader');
const fillEl    = document.getElementById('loader-fill');
const pctEl     = document.getElementById('loader-pct');
let introVal    = 0;        // 0..1
let introTarget = 0;
let introDone   = false;

// fake-load over ~2.4s
const introStart = performance.now();
function tickIntro() {
  const elapsed = performance.now() - introStart;
  const t = Math.min(1, elapsed / 2400);
  // ease out cubic
  introTarget = 1 - Math.pow(1 - t, 3);
  const pct = Math.round(introTarget * 100);
  fillEl.style.width = pct + '%';
  pctEl.textContent  = pct;

  if (t < 1) {
    requestAnimationFrame(tickIntro);
  } else {
    setTimeout(() => {
      loaderEl.classList.add('done');
      introDone = true;
      // let Lenis start (was held implicitly because user wasn't scrolling)
      lenis.start();
    }, 250);
  }
}
lenis.stop();   // prevent scroll until intro is done
tickIntro();

/* ---------------- Showcase horizontal scroll ---------------- */
const showcase     = document.querySelector('.showcase');
const showcaseTrk  = document.getElementById('showcase-track');
const showcaseFill = document.getElementById('showcase-fill');

function updateShowcase() {
  if (!showcase || !showcaseTrk) return;
  const rect = showcase.getBoundingClientRect();
  const total = rect.height - innerHeight;
  // progress within the pinned section
  const p = Math.max(0, Math.min(1, -rect.top / total));
  // distance we can slide = track width - viewport
  const maxSlide = showcaseTrk.scrollWidth - innerWidth;
  showcaseTrk.style.transform = `translate3d(${-p * maxSlide}px, 0, 0)`;
  if (showcaseFill) showcaseFill.style.width = (p * 100) + '%';
}

/* ---------------- Animate loop ---------------- */
function animate(time) {
  requestAnimationFrame(animate);

  // smooth mouse
  mouse.x += (mouse.tx - mouse.x) * 0.05;
  mouse.y += (mouse.ty - mouse.y) * 0.05;
  mat.uniforms.uMouse.value.set(mouse.x, mouse.y);
  mat.uniforms.uTime.value = time * 0.001;

  // intro blend → uniform
  introVal += (introTarget - introVal) * 0.07;
  mat.uniforms.uIntro.value = introVal;

  // scroll-driven segment blend
  const max = document.documentElement.scrollHeight - innerHeight;
  const scrollProgress = max > 0 ? Math.max(0, Math.min(1, scrollY / max)) : 0;
  const segF = scrollProgress * SEG_MAX;
  const seg  = Math.min(SEG_MAX - 1, Math.floor(segF));
  const k    = segF - seg;
  updateSegment(seg);
  mat.uniforms.uK.value = k;

  // cloud + camera motion
  points.rotation.y += 0.0008;
  points.rotation.x = mouse.y * 0.15;
  points.rotation.z = scrollProgress * 0.4;
  camera.position.x = mouse.x * 14 + Math.sin(scrollProgress * Math.PI) * 30;
  camera.position.y = -mouse.y * 10 - scrollProgress * 20;
  camera.position.z = 320 - scrollProgress * 80;
  camera.lookAt(0, 0, 0);

  // stars parallax
  starsFar.rotation.y  += 0.0002;
  starsNear.rotation.y += 0.0005;
  starsNear.rotation.x = mouse.y * 0.05;

  // showcase translateX
  updateShowcase();

  renderer.render(scene, camera);
}
requestAnimationFrame(animate);

/* =========================================================
   DOM-side enhancements
   ========================================================= */

// inject data-text on .ghost elements so the ::before/::after layers can mirror text
document.querySelectorAll('.ghost').forEach(el => {
  el.setAttribute('data-text', el.textContent);
});

// reveal on intersect
const reveal = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('in');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.section').forEach(s => {
  s.classList.add('to-reveal');
  reveal.observe(s);
});
const style = document.createElement('style');
style.textContent = `
  .to-reveal { opacity: 0; transform: translateY(40px); transition: opacity 1.1s ease, transform 1.1s cubic-bezier(.2,.7,.2,1); }
  .to-reveal.in { opacity: 1; transform: none; }
  /* showcase shouldn't shift the pinned wrapper */
  .showcase.to-reveal { opacity: 1; transform: none; }
`;
document.head.appendChild(style);

/* team marquee — opposite-direction parallax based on team section position */
const rows = document.querySelectorAll('.people .row');
function updateRows() {
  const teamSec = document.querySelector('.team');
  if (!teamSec) return;
  const rect = teamSec.getBoundingClientRect();
  const center = rect.top + rect.height / 2 - innerHeight / 2;
  rows.forEach((row) => {
    const speed = parseFloat(row.dataset.speed || '0.5');
    const dir   = row.classList.contains('reverse') ? 1 : -1;
    row.style.transform = `translateX(${center * speed * dir * 0.6}px)`;
  });
}
lenis.on('scroll', updateRows);
addEventListener('resize', updateRows);
updateRows();

/* custom cursor */
const cursor = document.getElementById('cursor');
let cx = 0, cy = 0, tcx = 0, tcy = 0;
addEventListener('mousemove', (e) => { tcx = e.clientX; tcy = e.clientY; });
(function cursorLoop() {
  cx += (tcx - cx) * 0.2;
  cy += (tcy - cy) * 0.2;
  cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
  requestAnimationFrame(cursorLoop);
})();
document.querySelectorAll('a, button, .card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('big'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
});
