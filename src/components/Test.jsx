"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScaleOnScroll() {
  const boxRef = useRef(null);

  useEffect(() => {
    if (!boxRef.current) return;

    gsap.fromTo(
      boxRef.current,
      { scale: 0.5 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",   // when box enters viewport
          end: "top 30%",     // when box reaches 30% of viewport
          scrub: true,        // smooth scrub
          markers: true,      // ✅ turn on markers for testing
        },
      }
    );
  }, []);

  return (
    <div className="min-h-[200vh] flex items-center justify-center">
      <div
        ref={boxRef}
        className="w-40 h-40 bg-red-500 rounded-2xl"
      />
    </div>
  );
}
