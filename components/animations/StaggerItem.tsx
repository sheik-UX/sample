'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
  duration?: number;
}

export default function StaggerItem({
  children,
  className = '',
  y = 20,
  duration = 0.55,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.25 : duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
