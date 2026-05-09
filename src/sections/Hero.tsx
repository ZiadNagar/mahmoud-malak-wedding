import { Calendar, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-texture-rose"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "80px 24px 80px",
      }}
    >
      {/* Content Container - 480px max-width */}
      <div
        style={{
          maxWidth: "480px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Bismillah */}
        <p
          className="hero-bismillah"
          style={{
            fontFamily: "var(--font-arabic)",
            fontSize: "26px",
            color: "var(--color-text-primary)",
            textAlign: "center",
            lineHeight: 1.6,
            marginBottom: "8px",
          }}
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>

        {/* Opening Verse */}
        <p
          className="hero-verse"
          style={{
            fontFamily: "var(--font-arabic)",
            fontSize: "14px",
            color: "var(--color-text-secondary)",
            textAlign: "center",
            lineHeight: 1.8,
            maxWidth: "300px",
            marginBottom: "20px",
            direction: "rtl",
          }}
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
          لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </p>
        {/* Quote */}
        <p
          className="hero-quote"
          style={{
            fontFamily: "var(--font-arabic)",
            fontSize: "20px",
            color: "var(--color-accent-rose)",
            textAlign: "center",
            lineHeight: 1.6,
            marginBottom: "8px",
            direction: "rtl",
          }}
        >
          صُدْفَةً وَأَصْبَحَتْ قَدَرًا
        </p>

        {/* Couple Names */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2px",
            marginBottom: "8px",
          }}
        >
          <h1
            className="hero-name-1"
            style={{
              fontFamily: "var(--font-arabic)",
              fontSize: "clamp(32px, 8vw, 48px)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              textAlign: "center",
              lineHeight: 1.2,
              direction: "rtl",
            }}
          >
            مَلَك
          </h1>

          <span
            className="hero-ampersand"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--color-accent-rose)",
              lineHeight: 1.5,
            }}
          >
            &amp;
          </span>

          <h1
            className="hero-name-2"
            style={{
              fontFamily: "var(--font-arabic)",
              fontSize: "clamp(32px, 8vw, 48px)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              textAlign: "center",
              lineHeight: 1.2,
              direction: "rtl",
            }}
          >
            مَحْمُود
          </h1>
        </div>

        {/* Gold Divider */}
        <div
          className="hero-divider"
          style={{
            width: "60px",
            height: "1px",
            backgroundColor: "var(--color-accent-rose)",
            margin: "12px 0",
          }}
        />
        {/* Wedding Details */}
        <div style={{ marginBottom: "16px", textAlign: "center" }}>
          {/* Invitation Text */}
          <p
            className="hero-invite"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(16px, 5vw, 18px)",
              color: "var(--color-text-secondary)",
              textAlign: "center",
              lineHeight: 1.7,
              maxWidth: "280px",
              marginBottom: "24px",
              fontStyle: "italic",
            }}
          >
            Together with our families, we invite you to join us in celebrating
            our wedding
          </p>
          {/* Date Row - Icon Left, Text Right */}
          <div
            className="hero-date"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "4px",
            }}
          >
            <Calendar
              size={20}
              style={{ color: "var(--color-accent-rose)", flexShrink: 0 }}
            />
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(18px, 5vw, 22px)",
                fontWeight: 400,
                color: "var(--color-accent-rose)",
                fontStyle: "italic",
              }}
            >
              30 July 2026
            </p>
          </div>
          {/* Location Row - Icon Left, Text Right */}
          <div
            className="hero-location"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "4px",
            }}
          >
            <MapPin
              size={20}
              style={{ color: "var(--color-accent-rose)", flexShrink: 0 }}
            />
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(18px, 5vw, 22px)",
                fontWeight: 400,
                color: "var(--color-accent-rose)",
                fontStyle: "italic",
              }}
            >
              El Sekka El Hadid Stadium, Nasr City
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="hero-chevron"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      ></div>
    </section>
  );
}
