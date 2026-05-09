export default function FloralFrame() {
  return (
    <div
      className="frame-bloom"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 50, // Move above content so scrolling content passes underneath
        overflow: "hidden",
      }}
    >
      {/* Top Background Fade so content fades underneath */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "15vh",
          background:
            "linear-gradient(to bottom, var(--color-bg-primary) 10%, transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Bottom Background Fade so content fades underneath */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "15vh",
          background:
            "linear-gradient(to top, var(--color-bg-primary) 10%, transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Inner gold rectangle (under the flowers) */}
      <div
        style={{
          position: "absolute",
          top: "min(4vh, 28px)",
          left: "min(4vw, 28px)",
          right: "min(4vw, 28px)",
          bottom: "min(4vh, 28px)",
          border: "2px solid #DB7A85",
          opacity: 0.8,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Top Left Flower cluster */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "min(200vw, 800px)",
          height: "min(200vw, 800px)",
          pointerEvents: "none",
          backgroundImage: "url(/images/top-left-frame.png)",
          backgroundSize: "contain",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
          zIndex: 2,
        }}
      />

      {/* Bottom Right Flower cluster */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "min(200vw, 800px)",
          height: "min(200vw, 800px)",
          pointerEvents: "none",
          backgroundImage: "url(/images/bottom-right-frame.png)",
          backgroundSize: "contain",
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
          zIndex: 2,
        }}
      />

      {/* Subtle vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 100px rgba(219,122,133,0.04)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />
    </div>
  );
}
