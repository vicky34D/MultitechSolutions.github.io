import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Custom hook that triggers animation when element scrolls into view.
 * Kept for backward compatibility if used directly elsewhere.
 */
export function useScrollAnimation({ threshold = 0.15, rootMargin = '0px 0px -60px 0px', triggerOnce = true } = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) observer.unobserve(element);
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, isVisible];
}

/**
 * Animated wrapper component that fades, scales, and transforms in on scroll,
 * replicating the premium scroll effects seen on framer.com templates.
 */
export function AnimatedSection({ children, delay = 0, direction = 'up', style = {}, className = '' }) {
    // Determine the initial displacement based on direction
    const yOffset = direction === 'up' ? 50 : direction === 'down' ? -50 : 0;
    const xOffset = direction === 'left' ? 50 : direction === 'right' ? -50 : 0;

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: yOffset,
                x: xOffset,
                scale: 0.95, // Framer signature slight scale up
                filter: 'blur(10px)', // Soft blur reveal
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                filter: 'blur(0px)',
            }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.16, 1, 0.3, 1], // Custom extremely smooth ease-out curve like Framer
                opacity: { duration: 0.6, delay },
                filter: { duration: 0.6, delay: delay + 0.1 },
            }}
            style={{ ...style, willChange: 'opacity, transform, filter' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
