"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Section({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.8 1", "0.2 0"],
  });

  // raw transforms
  const yRaw = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  // ✅ add damping with spring
  const y = useSpring(yRaw, { stiffness: 120, damping: 15, mass: 0.3 });
  const scale = useSpring(scaleRaw, { stiffness: 120, damping: 15, mass: 0.3 });

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="h-screen flex items-center justify-center bg-black text-white text-6xl font-bold"
    >
      {children}
      <h2 className="bebas text-white text-footer">hello world</h2>
    </motion.section>
  );
}
