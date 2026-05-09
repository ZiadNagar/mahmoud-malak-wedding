import { MapPin, ExternalLink } from "lucide-react";

export default function Venue() {
  const openGoogleMaps = () => {
    window.open(
      "https://maps.app.goo.gl/G1rGFu6PyGrduHecA",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="venue"
      className="bg-texture-sage"
      style={{
        padding: "80px 40px 100px",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Section Title */}
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(26px, 6vw, 32px)",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            textAlign: "center",
            marginBottom: "12px",
          }}
        >
          Wedding Venue Location
        </h2>

        {/* Gold Divider */}
        <div
          className="reveal reveal-delay-1"
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: "var(--color-accent-rose)",
            marginBottom: "32px",
          }}
        />

        {/* Venue Image with Overlay */}
        <div
          className="reveal reveal-delay-1"
          style={{
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "28px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
            position: "relative",
          }}
        >
          {/* Gradient Overlay - z-index 2 (middle) */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(219,122,133,0.25)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
          {/* Subtle inner border - z-index 3 (top) */}
          <div
            style={{
              position: "absolute",
              top: "8px",
              left: "8px",
              right: "8px",
              bottom: "8px",
              border: "1px solid rgba(219,122,133,0.4)",
              borderRadius: "12px",
              pointerEvents: "none",
              zIndex: 3,
            }}
          />
          {/* Background Image - z-index 1 (bottom) */}
          <img
            src="/images/venue-thumbnail.jpg"
            alt="Tia-Vie Wedding Venue"
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "16/10",
              objectFit: "cover",
              display: "block",
              position: "relative",
              zIndex: 1,
            }}
            loading="lazy"
          />
        </div>

        {/* Location Card */}
        <div
          className="reveal reveal-delay-4"
          style={{
            width: "100%",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <MapPin
            size={22}
            style={{ color: "var(--color-accent-rose)", marginBottom: "12px" }}
            strokeWidth={1.5}
          />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              textAlign: "center",
              marginBottom: "4px",
            }}
          >
            El Sekka El Hadid Stadium
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "var(--color-text-muted)",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            El-Nasr Rd, Al Abageyah, Nasr City, Cairo
          </p>

          {/* Google Maps Button */}
          <button
            onClick={openGoogleMaps}
            className="btn-gold-solid"
            style={{
              width: "100%",
              padding: "14px 24px",
              borderRadius: "100px",
              border: "none",
              backgroundColor: "var(--color-accent-rose)",
              color: "#ffffff",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.04em",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            Open in Google Maps
            <ExternalLink size={14} strokeWidth={2} />
          </button>
        </div>

        {/* Closing Message */}
        <p
          className="reveal reveal-delay-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            fontStyle: "italic",
            color: "var(--color-text-secondary)",
            textAlign: "center",
            lineHeight: 1.7,
            maxWidth: "300px",
            marginBottom: "36px",
          }}
        >
          We look forward to celebrating this special day with you. Your
          presence is the greatest gift we could ask for.
        </p>

        {/* Couple Names Footer */}
        <h3
          className="reveal reveal-delay-5"
          style={{
            fontFamily: "var(--font-arabic)",
            fontSize: "24px",
            fontWeight: 700,
            fontStyle: "italic",
            color: "var(--color-accent-rose)",
            textAlign: "center",
            direction: "rtl",
          }}
        >
          مَلَك &amp; مَحْمُود
        </h3>
      </div>
    </section>
  );
}
