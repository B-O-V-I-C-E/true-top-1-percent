"use client"

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function LenisSmoothScroll() {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
          lerp: 0.1,
        });
      
        // Set up a requestAnimationFrame loop to call the raf method of the lenis instance
        function raf(time: any) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }, []);

      return (
        <></>
      )
}