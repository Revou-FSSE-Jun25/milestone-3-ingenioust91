"use client";
import React, { useEffect, useRef } from "react";
import { waapi, stagger, text } from "animejs";

function Loading() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const { chars } = text.split(el, { chars: true, words: false });

    waapi.animate(chars, {
      transform: ["translateY(0)", "translateY(-1rem)", "translateY(0)"],
      delay: stagger(100),
      duration: 600,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="absolute z-[999] w-full h-[100vh] flex items-center justify-center">
      <h2 ref={headingRef} className="text-2xl font-bold">
        LOADING...
      </h2>
    </div>
  );
}

export default Loading;
