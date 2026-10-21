'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    if (dot && ring && finePointer && !reduceMotion) {
      document.documentElement.classList.add("cursor-on");

      let mx = -100, my = -100;
      let rx = -100, ry = -100;
      let cursorShown = false;
      let animationFrameId: number;

      const onPointerMove = (e: PointerEvent) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.setProperty("--x", `${mx}px`);
        dot.style.setProperty("--y", `${my}px`);
        if (!cursorShown) {
          cursorShown = true;
          rx = mx;
          ry = my;
          document.documentElement.classList.add("cursor-live");
        }
      };

      const onMouseLeave = () => {
        cursorShown = false;
        document.documentElement.classList.remove("cursor-live");
      };

      const onMouseEnter = () => {
        cursorShown = true;
        document.documentElement.classList.add("cursor-live");
      };

   
      const onMouseOver = (e: MouseEvent) => {
        if (!e.target) return;
        const target = e.target as HTMLElement;
        const hit = target.closest("a, button, .chip, [data-copy]");
        ring.classList.toggle("link", !!hit);
      };

      document.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseover", onMouseOver, { passive: true });

     
      const cursorLoop = () => {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.setProperty("--x", `${rx.toFixed(1)}px`);
        ring.style.setProperty("--y", `${ry.toFixed(1)}px`);
        animationFrameId = requestAnimationFrame(cursorLoop);
      };
      
      cursorLoop();

     
      return () => {
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseover", onMouseOver);
        cancelAnimationFrame(animationFrameId);
        document.documentElement.classList.remove("cursor-on", "cursor-live");
      };
    }
  }, []);

  return (
    <>
      <div id="cursor-dot" aria-hidden="true"></div>
      <div id="cursor-ring" aria-hidden="true"></div>
    </>
  );
}
