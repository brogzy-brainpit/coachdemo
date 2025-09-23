"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, useSpring, useScroll } from "framer-motion";

// Store global scroll MotionValues
import { useMotionValue } from "framer-motion";

export const useGlobalScroll = () => {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Update scrollY MotionValue
    lenis.on("scroll", ({ scroll }) => {
      scrollY.set(scroll);
    });
  }, [scrollY]);

  // ✅ Add damping globally
  const smoothY = useSpring(scrollY, {
    stiffness: 120,
    damping: 18,
    mass: 0.25,
  });

  return smoothY;
};
