import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
  immediate?: boolean; // Force immediate animation for above-fold content
}

export default function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  immediate = false
}: ScrollAnimationProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // For immediate content, start animation after a short delay
    if (immediate) {
      const timer = setTimeout(() => setShouldAnimate(true), 100);
      return () => clearTimeout(timer);
    }
  }, [immediate]);
  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: 50 };
      case 'right':
        return { opacity: 0, x: -50 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const getAnimateState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 1, y: 0 };
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
        return { opacity: 1, x: 0 };
      case 'right':
        return { opacity: 1, x: 0 };
      case 'fade':
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  if (immediate) {
    return (
      <motion.div
        className={className}
        initial={getInitialState()}
        animate={shouldAnimate ? getAnimateState() : getInitialState()}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={getInitialState()}
      whileInView={getAnimateState()}
      viewport={{ once: true, margin: "0px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
      }}
    >
      {children}
    </motion.div>
  );
}
