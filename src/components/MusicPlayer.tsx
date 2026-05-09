import { useEffect, useRef, useState } from "react";
import { Music, Pause, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.loop = true;
    audio.muted = true;

    // Autoplay muted (browsers allow this)
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        isPlayingRef.current = true;
      })
      .catch(() => {});

    // Unmute on first interaction
    const unmuteAudio = () => {
      if (audio.muted) {
        audio.muted = false;
        setIsMuted(false);
      }
    };

    document.addEventListener("click", unmuteAudio, { once: true });
    document.addEventListener("touchstart", unmuteAudio, { once: true });
    document.addEventListener("scroll", unmuteAudio, { once: true });
    document.addEventListener("keydown", unmuteAudio, { once: true });

    // Tab visibility handling
    const handleVisibility = () => {
      if (document.hidden) {
        audio.pause();
      } else if (isPlayingRef.current) {
        audio.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("click", unmuteAudio);
      document.removeEventListener("touchstart", unmuteAudio);
      document.removeEventListener("scroll", unmuteAudio);
      document.removeEventListener("keydown", unmuteAudio);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      isPlayingRef.current = false;
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          isPlayingRef.current = true;
        })
        .catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/esseilye-eleila.mp3" preload="auto" />
      <button
        onClick={toggle}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        style={{
          position: "fixed",
          bottom: "36px",
          left: "24px",
          zIndex: 100,
          width: "48px",
          height: "48px",
          borderRadius: "100px",
          border: "none",
          backgroundColor: "var(--color-accent-rose)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(219,122,133,0.35)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {!isPlaying ?
          <Music size={20} strokeWidth={2} />
        : isMuted ?
          <VolumeX size={20} strokeWidth={2} />
        : <Pause size={20} strokeWidth={2} />}
      </button>
    </>
  );
}
