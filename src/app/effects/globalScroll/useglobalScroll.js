"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { useMotionValue, useSpring } from "framer-motion";

let singleton; // make sure we don’t create multiple Lenis instances

export function useGlobalScroll() {
  const rawY = useMotionValue(0);

  useEffect(() => {
    if (!singleton) {
      const lenis = new Lenis({
        smoothWheel: true,
        smoothTouch: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenis.on("scroll", ({ scroll }) => {
        rawY.set(scroll);
      });

      singleton = lenis;
    }
  }, [rawY]);

  // ✅ Apply spring physics globally
  const smoothY = useSpring(rawY, {
    stiffness: 120,
    damping: 18,
    mass: 0.25,
  });

  return smoothY;
}
