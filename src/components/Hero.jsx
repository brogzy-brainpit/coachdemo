"use client";
import { useScrollY } from "@/app/effects/globalScroll/ScrollProvider";
import { motion, useTransform } from "framer-motion";

export default function Hero() {
  const scrollY = useScrollY();

  // Example: parallax image
  const y = useTransform(scrollY, [0, 500], [0, -200]);

  // Example: scale text
  const scale = useTransform(scrollY, [0, 300], [1, 1.3]);

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <motion.h1 style={{ scale }} className="text-6xl font-bold">
        Hello World
      </motion.h1>
      <motion.img
        src="/hero.png"
        alt="hero"
        style={{ y }}
        className="mt-10 w-80"
      />
    </section>
  );
}
