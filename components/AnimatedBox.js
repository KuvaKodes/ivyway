// components/AnimatedBox.js

import { motion } from 'framer-motion';

export default function AnimatedBox() {
  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'var(--ivy-green)',
        borderRadius: 8,
        margin: '2rem auto'
      }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop'
      }}
    />
  );
}
