import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top wipe line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: [0, 1, 1, 0], opacity: [1, 1, 1, 0] }}
        transition={{ duration: 1.2, times: [0, 0.4, 0.8, 1], ease: 'easeInOut' }}
      />
      {children}
    </motion.div>
  );
}
