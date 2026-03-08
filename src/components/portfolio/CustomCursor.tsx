import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useSpring(cursorX, { damping: 25, stiffness: 200 });
  const trailY = useSpring(cursorY, { damping: 25, stiffness: 200 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    // Only show on desktop
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        if (!visible) setVisible(true);
      });
    };

    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    // Detect hoverable elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, .cursor-pointer').forEach(el => {
        if (!(el as HTMLElement).dataset.cursorBound) {
          el.addEventListener('mouseenter', handleHoverStart);
          el.addEventListener('mouseleave', handleHoverEnd);
          (el as HTMLElement).dataset.cursorBound = 'true';
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    // Initial binding
    document.querySelectorAll('a, button, [role="button"], input, textarea, select, .cursor-pointer').forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
      (el as HTMLElement).dataset.cursorBound = 'true';
    });

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [cursorX, cursorY, visible]);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor globally */}
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
      `}</style>

      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: clicked ? 0.6 : hovered ? 0.5 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500 }}
      >
        <div
          className="w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ backgroundColor: 'hsl(185 100% 55%)' }}
        />
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: trailX, y: trailY }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 2 : 1,
          opacity: visible ? (hovered ? 0.6 : 0.3) : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
      >
        <div
          className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            borderColor: hovered ? 'hsl(320 100% 65%)' : 'hsl(185 100% 55%)',
            boxShadow: hovered
              ? '0 0 20px hsl(320 100% 65% / 0.3), inset 0 0 20px hsl(320 100% 65% / 0.1)'
              : '0 0 15px hsl(185 100% 55% / 0.2), inset 0 0 15px hsl(185 100% 55% / 0.05)',
          }}
        />
      </motion.div>

      {/* Glow trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{ x: trailX, y: trailY }}
        animate={{
          opacity: visible ? 0.15 : 0,
          scale: hovered ? 1.5 : 1,
        }}
      >
        <div
          className="w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(185 100% 55% / 0.4), transparent 70%)' }}
        />
      </motion.div>
    </>
  );
}
