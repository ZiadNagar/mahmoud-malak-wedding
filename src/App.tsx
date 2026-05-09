import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import FloralFrame from "./components/FloralFrame";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./sections/Hero";
import Gallery from "./sections/Gallery";
import Venue from "./sections/Venue";

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll reveal system using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Fixed Floral Frame Overlay */}
      <FloralFrame />

      {/* Background Music Player */}
      <MusicPlayer />

      {/* Main Content - scrolls beneath the frame */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Gallery />
        <Venue />
      </main>
    </>
  );
}
