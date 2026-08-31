"use client";

import React, { useRef, useMemo } from "react";
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ScrollRevealProps {
  children: React.ReactNode;
  /** Custom container className */
  containerClassName?: string;
  /** Custom text className */
  textClassName?: string;
  /** Enable blur animation effect */
  enableBlur?: boolean;
  /** Base opacity when text is out of view */
  baseOpacity?: number;
  /** Base rotation angle in degrees */
  baseRotation?: number;
  /** Blur strength in pixels */
  blurStrength?: number;
  /** Animation delay between words in seconds */
  staggerDelay?: number;
  /** Viewport threshold for triggering animation */
  threshold?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Spring animation configuration */
  springConfig?: {
    damping?: number;
    stiffness?: number;
    mass?: number;
  };
  /** Text size variant */
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Color variant */
  variant?: "default" | "muted" | "accent" | "primary";
  /** Tag or wrapper override */
  as?: React.ElementType;
  /** Only animate once on view */
  once?: boolean;
}

const sizeClasses = {
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl lg:text-3xl",
  lg: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
  xl: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
  "2xl": "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const variantClasses = {
  default: "",
  muted: "text-neutral-500",
  accent: "text-[#FF5722]",
  primary: "text-[#111827]",
};

interface Token {
  id: string;
  isSpace: boolean;
  content: React.ReactNode;
}

function tokenize(node: React.ReactNode, prefix: string, tokens: Token[]): void {
  if (node === null || node === undefined || typeof node === "boolean") {
    return;
  }

  if (typeof node === "string" || typeof node === "number") {
    const text = String(node);
    const parts = text.split(/(\s+)/);
    parts.forEach((part, index) => {
      if (part.length > 0) {
        const isSpace = /^\s+$/.test(part);
        tokens.push({
          id: `${prefix}-${index}`,
          isSpace,
          content: part,
        });
      }
    });
    return;
  }

  if (React.isValidElement(node)) {
    const { children: elementChildren, ...restProps } = node.props as {
      children?: React.ReactNode;
      [key: string]: any;
    };

    if (elementChildren !== undefined && elementChildren !== null) {
      const subTokens: Token[] = [];
      if (Array.isArray(elementChildren)) {
        elementChildren.forEach((child, cIdx) => {
          tokenize(child, `${prefix}-c${cIdx}`, subTokens);
        });
      } else {
        tokenize(elementChildren, `${prefix}-c0`, subTokens);
      }

      subTokens.forEach((sub, sIdx) => {
        if (sub.isSpace) {
          tokens.push({
            id: `${prefix}-s${sIdx}`,
            isSpace: true,
            content: sub.content,
          });
        } else {
          tokens.push({
            id: `${prefix}-s${sIdx}`,
            isSpace: false,
            content: React.cloneElement(
              node,
              {
                ...restProps,
                key: `${prefix}-cloned-${sIdx}`,
              },
              sub.content
            ),
          });
        }
      });
      return;
    }

    tokens.push({
      id: `${prefix}-elem`,
      isSpace: false,
      content: node,
    });
    return;
  }

  if (Array.isArray(node)) {
    node.forEach((item, itemIdx) => {
      tokenize(item, `${prefix}-a${itemIdx}`, tokens);
    });
  }
}

export function ScrollReveal({
  children,
  containerClassName,
  textClassName,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 2,
  blurStrength = 3,
  staggerDelay = 0.04,
  threshold = 0.5,
  duration = 0.6,
  springConfig = {
    damping: 25,
    stiffness: 100,
    mass: 1,
  },
  size = "lg",
  align = "left",
  variant = "default",
  as: Component = "span",
  once = false,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const isInView = useInView(containerRef, {
    amount: threshold,
    once,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform rotation based on scroll (disabled if reduced motion)
  const rotation = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [baseRotation, 0, 0]
  );

  // Tokenize children into individual words and spaces preserving nested JSX
  const tokens = useMemo(() => {
    const list: Token[] = [];
    tokenize(children, "tok", list);
    return list;
  }, [children]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : baseOpacity,
      filter: !shouldReduceMotion && enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
      y: shouldReduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : {
            ...springConfig,
            duration,
          },
    },
  };

  const MotionComponent = motion(Component as any);

  return (
    <motion.span
      ref={containerRef}
      style={{ rotate: rotation, display: "inline-block", maxWidth: "100%" }}
      className={cn("transform-gpu", containerClassName)}
    >
      <MotionComponent
        className={cn(
          "leading-inherit font-inherit text-inherit",
          alignClasses[align],
          variantClasses[variant],
          textClassName
        )}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {tokens.map((item) =>
          item.isSpace ? (
            <span key={item.id}>{item.content}</span>
          ) : (
            <motion.span
              key={item.id}
              className="inline-block"
              variants={wordVariants}
            >
              {item.content}
            </motion.span>
          )
        )}
      </MotionComponent>
    </motion.span>
  );
}

export default ScrollReveal;
