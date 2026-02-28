import React, { useEffect, useRef } from 'react';

/* ═══════════════════════════════════════════════════════════════
   Premium Cloud Infrastructure Hero Visual
   ─ Isometric data-center with SVG + CSS animations
   ═══════════════════════════════════════════════════════════════ */

const STYLES = `
  .dc-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
  }

  .dc-scene {
    position: relative;
    width: 580px;
    height: 520px;
    transform: perspective(1200px) rotateX(8deg) rotateY(-6deg);
    transform-style: preserve-3d;
  }

  /* ── Ambient glow background ── */
  .dc-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.5;
    z-index: 0;
    animation: dc-pulse 6s ease-in-out infinite alternate;
  }
  .dc-glow--blue   { width: 400px; height: 400px; background: radial-gradient(circle, rgba(59,130,246,0.5), transparent 70%); top: 5%; left: 15%; }
  .dc-glow--purple { width: 320px; height: 320px; background: radial-gradient(circle, rgba(168,85,247,0.45), transparent 70%); top: 30%; right: -5%; animation-delay: 2s; }
  .dc-glow--green  { width: 280px; height: 280px; background: radial-gradient(circle, rgba(200,243,83,0.35), transparent 70%); bottom: 5%; left: 25%; animation-delay: 4s; }

  @keyframes dc-pulse {
    0%   { transform: scale(1); opacity: 0.4; }
    100% { transform: scale(1.15); opacity: 0.6; }
  }

  /* ── Isometric server rack ── */
  .dc-rack {
    position: absolute;
    transform-style: preserve-3d;
    animation: dc-float 5s ease-in-out infinite alternate;
  }
  .dc-rack:nth-child(odd)  { animation-delay: 0s; }
  .dc-rack:nth-child(even) { animation-delay: 1.5s; }

  @keyframes dc-float {
    0%   { transform: translateY(0); }
    100% { transform: translateY(-6px); }
  }

  .dc-rack__face {
    position: absolute;
    backface-visibility: hidden;
  }

  /* Front face */
  .dc-rack__front {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #1a1f2e 0%, #0d1117 100%);
    border: 1px solid rgba(59,130,246,0.15);
    border-radius: 6px;
    box-shadow:
      0 0 20px rgba(59,130,246,0.08),
      inset 0 1px 0 rgba(255,255,255,0.05);
    overflow: hidden;
  }

  /* Glass reflection stripe */
  .dc-rack__front::before {
    content: '';
    position: absolute;
    top: 0; left: -50%;
    width: 50%; height: 100%;
    background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, transparent 55%);
    animation: dc-shine 6s ease-in-out infinite;
  }
  @keyframes dc-shine {
    0%, 100% { left: -50%; }
    50%      { left: 150%; }
  }

  /* Side face (3D depth) */
  .dc-rack__side {
    position: absolute;
    top: 0;
    width: 22px;
    height: 100%;
    background: linear-gradient(180deg, #141825 0%, #080b12 100%);
    border: 1px solid rgba(59,130,246,0.08);
    border-radius: 0 4px 4px 0;
    transform: rotateY(90deg) translateZ(0px);
    transform-origin: left center;
    right: -22px;
  }

  /* Top face */
  .dc-rack__top {
    position: absolute;
    width: 100%;
    height: 18px;
    background: linear-gradient(180deg, #222940 0%, #1a1f2e 100%);
    border: 1px solid rgba(59,130,246,0.12);
    border-radius: 4px 4px 0 0;
    transform: rotateX(90deg) translateZ(0px);
    transform-origin: bottom center;
    top: -18px;
  }

  /* Drive bay rows */
  .dc-bay {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 3px 8px;
    border-bottom: 1px solid rgba(255,255,255,0.03);
    position: relative;
  }
  .dc-bay::after {
    content: '';
    position: absolute;
    right: 8px; top: 50%;
    transform: translateY(-50%);
    width: 30px; height: 3px;
    background: repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 4px);
    border-radius: 1px;
  }

  /* LED indicators */
  .dc-led {
    width: 4px; height: 4px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .dc-led--green {
    background: #C8F353;
    box-shadow: 0 0 6px #C8F353, 0 0 12px rgba(200,243,83,0.4);
    animation: dc-blink 3s ease-in-out infinite;
  }
  .dc-led--blue {
    background: #3B82F6;
    box-shadow: 0 0 6px #3B82F6, 0 0 12px rgba(59,130,246,0.4);
    animation: dc-blink 2.5s ease-in-out infinite 0.5s;
  }
  .dc-led--cyan {
    background: #22D3EE;
    box-shadow: 0 0 6px #22D3EE, 0 0 12px rgba(34,211,238,0.4);
    animation: dc-blink 4s ease-in-out infinite 1s;
  }
  .dc-led--purple {
    background: #A855F7;
    box-shadow: 0 0 6px #A855F7, 0 0 12px rgba(168,85,247,0.4);
    animation: dc-blink 3.5s ease-in-out infinite 0.3s;
  }

  @keyframes dc-blink {
    0%, 100% { opacity: 1; }
    50%      { opacity: 0.3; }
  }

  /* Bay capacity bar */
  .dc-bar {
    height: 3px;
    border-radius: 2px;
    margin-left: 6px;
    flex-grow: 1;
    max-width: 42px;
    position: relative;
    overflow: hidden;
    background: rgba(255,255,255,0.04);
  }
  .dc-bar__fill {
    position: absolute;
    top: 0; left: 0;
    height: 100%;
    border-radius: 2px;
    animation: dc-load 4s ease-in-out infinite alternate;
  }
  @keyframes dc-load {
    0%   { width: 30%; }
    100% { width: 95%; }
  }

  /* ── Connection lines (SVG layer) ── */
  .dc-connections {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 10;
    pointer-events: none;
  }

  .dc-line {
    stroke-dasharray: 6 4;
    animation: dc-dash 2s linear infinite;
  }
  @keyframes dc-dash {
    to { stroke-dashoffset: -20; }
  }

  /* ── Floating cloud badge ── */
  .dc-cloud {
    position: absolute;
    z-index: 20;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(59,130,246,0.2);
    border-radius: 12px;
    box-shadow:
      0 8px 32px rgba(0,0,0,0.3),
      0 0 20px rgba(59,130,246,0.1),
      inset 0 1px 0 rgba(255,255,255,0.05);
    color: #E2E8F0;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.03em;
    animation: dc-badge-float 4s ease-in-out infinite alternate;
    white-space: nowrap;
  }
  .dc-cloud:nth-child(2) { animation-delay: 1s; }
  .dc-cloud:nth-child(3) { animation-delay: 2s; }

  @keyframes dc-badge-float {
    0%   { transform: translateY(0); }
    100% { transform: translateY(-8px); }
  }

  .dc-cloud__icon {
    width: 22px; height: 22px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .dc-cloud__dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    animation: dc-status-pulse 2s ease-in-out infinite;
  }
  @keyframes dc-status-pulse {
    0%, 100% { transform: scale(1); }
    50%      { transform: scale(1.4); }
  }

  /* ── Floating particles ── */
  .dc-particle {
    position: absolute;
    width: 3px; height: 3px;
    border-radius: 50%;
    opacity: 0;
    z-index: 5;
    animation: dc-particle-rise linear infinite;
  }
  @keyframes dc-particle-rise {
    0%   { opacity: 0; transform: translateY(0) scale(0.5); }
    20%  { opacity: 0.8; }
    80%  { opacity: 0.4; }
    100% { opacity: 0; transform: translateY(-180px) scale(0); }
  }

  /* ── Scanning line effect ── */
  .dc-scan {
    position: absolute;
    left: 0; width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(59,130,246,0.6), transparent);
    z-index: 15;
    animation: dc-scan-move 4s ease-in-out infinite;
    filter: blur(1px);
    pointer-events: none;
  }
  @keyframes dc-scan-move {
    0%, 100% { top: 10%; opacity: 0; }
    10%      { opacity: 1; }
    90%      { opacity: 1; }
    50%      { top: 85%; }
  }

  /* ── Hexagon grid overlay ── */
  .dc-hex-grid {
    position: absolute;
    inset: 0;
    z-index: 1;
    opacity: 0.04;
    background-image:
      radial-gradient(circle, #3B82F6 1px, transparent 1px);
    background-size: 24px 24px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
    pointer-events: none;
  }

  /* ── Responsive adjustments ── */
  @media (max-width: 768px) {
    .dc-scene {
      width: 350px;
      height: 340px;
      transform: perspective(1000px) rotateX(6deg) rotateY(-4deg) scale(0.85);
    }
    .dc-cloud { font-size: 9px; padding: 7px 12px; }
    .dc-rack__side { width: 14px; right: -14px; }
    .dc-rack__top  { height: 12px; top: -12px; }
  }
`;

/* ──────────────────────────────────────────── */
/*  Sub-components                             */
/* ──────────────────────────────────────────── */

const ledColors = ['green', 'blue', 'cyan', 'purple', 'green', 'blue'];
const barColors = ['#C8F353', '#3B82F6', '#22D3EE', '#A855F7'];

const ServerRack = ({ style, bays = 7, width = 110, height = 170 }) => (
    <div className="dc-rack" style={{ ...style, width, height }}>
        <div className="dc-rack__front" style={{ width, height }}>
            {Array.from({ length: bays }).map((_, i) => (
                <div className="dc-bay" key={i} style={{ height: `${100 / bays}%` }}>
                    <span className={`dc-led dc-led--${ledColors[i % ledColors.length]}`} />
                    <span className={`dc-led dc-led--${ledColors[(i + 2) % ledColors.length]}`} />
                    <div className="dc-bar">
                        <div
                            className="dc-bar__fill"
                            style={{
                                background: barColors[i % barColors.length],
                                animationDelay: `${i * 0.3}s`,
                                boxShadow: `0 0 6px ${barColors[i % barColors.length]}40`,
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
        <div className="dc-rack__side" style={{ height }} />
        <div className="dc-rack__top" style={{ width }} />
    </div>
);

const CloudBadge = ({ style, icon, label, statusColor = '#C8F353', bgColor = 'rgba(59,130,246,0.15)' }) => (
    <div className="dc-cloud" style={style}>
        <div className="dc-cloud__icon" style={{ background: bgColor }}>
            <span style={{ fontSize: 13 }}>{icon}</span>
        </div>
        <span>{label}</span>
        <span className="dc-cloud__dot" style={{ background: statusColor, boxShadow: `0 0 8px ${statusColor}` }} />
    </div>
);

const Particle = ({ left, delay, color, duration }) => (
    <div
        className="dc-particle"
        style={{
            left,
            bottom: '20%',
            background: color,
            boxShadow: `0 0 6px ${color}`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
        }}
    />
);

/* ──────────────────────────────────────────── */
/*  Main Component                             */
/* ──────────────────────────────────────────── */

export default function AbstractTechModel() {
    return (
        <div className="dc-wrapper">
            <style>{STYLES}</style>

            {/* Ambient glows */}
            <div className="dc-glow dc-glow--blue" />
            <div className="dc-glow dc-glow--purple" />
            <div className="dc-glow dc-glow--green" />

            <div className="dc-scene">
                {/* Dot grid overlay */}
                <div className="dc-hex-grid" />

                {/* Scanning line */}
                <div className="dc-scan" />

                {/* ── Server Racks ── */}
                {/* Front row (3 racks) */}
                <ServerRack style={{ left: 30, bottom: 40 }} width={105} height={185} bays={8} />
                <ServerRack style={{ left: 150, bottom: 50 }} width={105} height={165} bays={7} />
                <ServerRack style={{ left: 270, bottom: 35 }} width={105} height={195} bays={9} />

                {/* Back row (3 racks — slightly offset) */}
                <ServerRack style={{ left: 90, bottom: 230 }} width={95} height={140} bays={6} />
                <ServerRack style={{ left: 200, bottom: 240 }} width={95} height={130} bays={5} />
                <ServerRack style={{ left: 310, bottom: 225 }} width={95} height={150} bays={6} />

                {/* Extra accent rack */}
                <ServerRack style={{ left: 400, bottom: 60 }} width={85} height={150} bays={6} />

                {/* ── SVG Connection Lines ── */}
                <svg className="dc-connections" viewBox="0 0 580 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Front row inter-connections */}
                    <path className="dc-line" d="M135 235 Q180 200 200 255" stroke="url(#grad-blue)" strokeWidth="1.5" style={{ animationDuration: '2s' }} />
                    <path className="dc-line" d="M255 250 Q290 210 320 240" stroke="url(#grad-green)" strokeWidth="1.5" style={{ animationDuration: '2.5s' }} />
                    <path className="dc-line" d="M375 230 Q400 190 440 260" stroke="url(#grad-purple)" strokeWidth="1.5" style={{ animationDuration: '1.8s' }} />

                    {/* Front → Back connections */}
                    <path className="dc-line" d="M82 225 Q100 170 138 290" stroke="url(#grad-cyan)" strokeWidth="1" style={{ animationDuration: '3s' }} />
                    <path className="dc-line" d="M200 250 Q220 200 248 280" stroke="url(#grad-blue)" strokeWidth="1" style={{ animationDuration: '2.8s' }} />
                    <path className="dc-line" d="M320 240 Q350 180 358 275" stroke="url(#grad-green)" strokeWidth="1" style={{ animationDuration: '3.2s' }} />

                    {/* Up to cloud badges */}
                    <path className="dc-line" d="M138 280 Q100 160 90 100" stroke="url(#grad-purple)" strokeWidth="1" opacity="0.6" style={{ animationDuration: '2.5s' }} />
                    <path className="dc-line" d="M248 270 Q300 140 380 55" stroke="url(#grad-blue)" strokeWidth="1" opacity="0.6" style={{ animationDuration: '3s' }} />
                    <path className="dc-line" d="M358 265 Q430 150 470 90" stroke="url(#grad-cyan)" strokeWidth="1" opacity="0.6" style={{ animationDuration: '2.2s' }} />

                    {/* Gradient definitions */}
                    <defs>
                        <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                        </linearGradient>
                        <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#C8F353" stopOpacity="0.1" />
                            <stop offset="50%" stopColor="#C8F353" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#C8F353" stopOpacity="0.1" />
                        </linearGradient>
                        <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.1" />
                            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.1" />
                        </linearGradient>
                        <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.1" />
                            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* ── Cloud Badges ── */}
                <CloudBadge
                    style={{ top: 15, left: 10 }}
                    icon="☁️"
                    label="Cloud Deployed"
                    statusColor="#C8F353"
                    bgColor="rgba(59,130,246,0.15)"
                />
                <CloudBadge
                    style={{ top: 0, right: 40 }}
                    icon="🔒"
                    label="99.99% Uptime"
                    statusColor="#3B82F6"
                    bgColor="rgba(168,85,247,0.15)"
                />
                <CloudBadge
                    style={{ top: 70, right: -10 }}
                    icon="⚡"
                    label="Auto-Scaling"
                    statusColor="#22D3EE"
                    bgColor="rgba(34,211,238,0.15)"
                />

                {/* ── Rising Particles ── */}
                {[
                    { left: '15%', delay: 0, color: '#3B82F6', duration: 5 },
                    { left: '30%', delay: 1.2, color: '#C8F353', duration: 6 },
                    { left: '50%', delay: 0.5, color: '#A855F7', duration: 4.5 },
                    { left: '65%', delay: 2, color: '#22D3EE', duration: 5.5 },
                    { left: '80%', delay: 0.8, color: '#3B82F6', duration: 6.5 },
                    { left: '25%', delay: 3, color: '#C8F353', duration: 4 },
                    { left: '70%', delay: 1.5, color: '#A855F7', duration: 5 },
                    { left: '45%', delay: 2.5, color: '#22D3EE', duration: 7 },
                    { left: '10%', delay: 4, color: '#3B82F6', duration: 5.2 },
                    { left: '55%', delay: 3.5, color: '#C8F353', duration: 6.2 },
                    { left: '88%', delay: 1, color: '#A855F7', duration: 4.8 },
                    { left: '38%', delay: 2.8, color: '#22D3EE', duration: 5.8 },
                ].map((p, i) => (
                    <Particle key={i} {...p} />
                ))}
            </div>
        </div>
    );
}
