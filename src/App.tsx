import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import FloralFrame from "./components/FloralFrame";
import MusicPlayer, { type MusicPlayerHandle } from "./components/MusicPlayer";
import SplashGate from "./components/SplashGate";
import Hero from "./sections/Hero";
import Gallery from "./sections/Gallery";
import Venue from "./sections/Venue";

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const musicPlayerRef = useRef<MusicPlayerHandle | null>(null);
  const splashTimeoutRef = useRef<number | null>(null);
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isSplashExiting, setIsSplashExiting] = useState(false);

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

  useEffect(() => {
    if (!isSplashVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isSplashVisible]);

  useEffect(() => {
    return () => {
      if (splashTimeoutRef.current !== null) {
        window.clearTimeout(splashTimeoutRef.current);
      }
    };
  }, []);

  const handleOpenInvitation = async () => {
    await musicPlayerRef.current?.startUnmuted();
    setIsSplashExiting(true);

    splashTimeoutRef.current = window.setTimeout(() => {
      setIsSplashVisible(false);
      setIsSplashExiting(false);
    }, 550);
  };

  return (
    <>
      {/* Fixed Floral Frame Overlay */}
      <FloralFrame />

      {/* Background Music Player */}
      <MusicPlayer ref={musicPlayerRef} showControl={!isSplashVisible} />

      {isSplashVisible && <SplashGate isExiting={isSplashExiting} onOpen={handleOpenInvitation} />}

      {/* Main Content - scrolls beneath the frame */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Gallery />
        <Venue />
      </main>
    </>
  );
}
