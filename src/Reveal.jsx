"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({
  children,
  initialX = 0,
  initialY = 0,
  duration = 1,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, x: initialX, y: initialY },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{ duration, delay }}
      animate={controls}
    >
      {children}
    </motion.span>
  );
};

export default Reveal;
