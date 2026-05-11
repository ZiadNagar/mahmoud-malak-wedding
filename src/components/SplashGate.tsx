type SplashGateProps = {
  isExiting: boolean;
  onOpen: () => void;
};

export default function SplashGate({ isExiting, onOpen }: SplashGateProps) {
  return (
    <section
      className={`splash-gate bg-texture-rose ${isExiting ? "is-exiting" : ""}`}
      aria-label="Wedding invitation entry gate"
    >
      <div className="splash-gate-card">
        <h1 className="splash-name">مَلَك و مَحْمُود</h1>

        <p className="splash-invite-line">Wedding invitation</p>
        <button
          type="button"
          className="splash-open-stamp"
          onClick={onOpen}
          aria-label="Open invitation"
        >
          OPEN
        </button>
      </div>
    </section>
  );
}
