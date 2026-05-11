import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Music, Pause, VolumeX } from "lucide-react";

export type MusicPlayerHandle = {
  startUnmuted: () => Promise<boolean>;
};

type MusicPlayerProps = {
  showControl?: boolean;
};

const MusicPlayer = forwardRef<MusicPlayerHandle, MusicPlayerProps>(function MusicPlayer(
  { showControl = true },
  ref,
) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const shouldPlayRef = useRef(true);
  const autoplayBlockedRef = useRef(false);

  const attemptPlayback = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return false;

    try {
      await audio.play();
      autoplayBlockedRef.current = false;
      return true;
    } catch {
      autoplayBlockedRef.current = true;
      return false;
    }
  }, []);

  const startUnmuted = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return false;

    shouldPlayRef.current = true;
    audio.muted = false;
    return attemptPlayback();
  }, [attemptPlayback]);

  useImperativeHandle(
    ref,
    () => ({
      startUnmuted,
    }),
    [startUnmuted],
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleVolumeChange = () => setIsMuted(audio.muted);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("volumechange", handleVolumeChange);

    audio.volume = 0.5;
    audio.loop = true;
    audio.muted = true;

    void attemptPlayback();

    // First user activation should unmute and recover playback when autoplay is blocked.
    const activateAudio = () => {
      if (audio.muted) {
        audio.muted = false;
      }

      if (audio.paused || autoplayBlockedRef.current) {
        shouldPlayRef.current = true;
        void attemptPlayback();
      }
    };

    document.addEventListener("pointerdown", activateAudio, { once: true });
    document.addEventListener("click", activateAudio, { once: true });
    document.addEventListener("touchstart", activateAudio, { once: true });
    document.addEventListener("scroll", activateAudio, { once: true });
    document.addEventListener("keydown", activateAudio, { once: true });

    // Tab visibility handling
    const handleVisibility = () => {
      if (document.hidden) {
        audio.pause();
      } else if (shouldPlayRef.current) {
        void attemptPlayback();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("pointerdown", activateAudio);
      document.removeEventListener("click", activateAudio);
      document.removeEventListener("touchstart", activateAudio);
      document.removeEventListener("scroll", activateAudio);
      document.removeEventListener("keydown", activateAudio);
      document.removeEventListener("visibilitychange", handleVisibility);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("volumechange", handleVolumeChange);
    };
  }, [attemptPlayback]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying && !audio.paused) {
      audio.pause();
      shouldPlayRef.current = false;
    } else {
      if (audio.muted) {
        audio.muted = false;
      }

      shouldPlayRef.current = true;
      void attemptPlayback();
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/esseilye-eleila.mp3" preload="auto" autoPlay muted playsInline />
      {showControl && (
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
      )}
    </>
  );
});

export default MusicPlayer;
