import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  "/images/couple-01.jpg",
  "/images/couple-02.jpg",
  "/images/couple-03.jpg",
  "/images/couple-04.jpg",
  "/images/couple-05.jpg",
  "/images/couple-06.jpg",
  "/images/couple-07.jpg",
  "/images/couple-08.jpg",
] as const;

const GALLERY_IMAGE_ALT = "لحظة جميلة من رحلة مَلَك  و مَحْمُود";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = GALLERY_IMAGES.length;

  const getOffset = (index: number) => {
    let offset = index - currentIndex;
    const half = Math.floor(totalImages / 2);

    if (offset > half) offset -= totalImages;
    if (offset < -half) offset += totalImages;

    return offset;
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <section
      id="gallery"
      style={{
        padding: "60px 16px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--color-bg-primary)",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
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
          Our Moments
        </h2>

        <div
          className="reveal reveal-delay-1"
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: "var(--color-accent-gold)",
            marginBottom: "32px",
          }}
        />

        <div
          className="reveal reveal-delay-2"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "480px",
            height: "clamp(320px, 70vw, 480px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: "1200px",
            marginBottom: "32px",
          }}
        >
          {GALLERY_IMAGES.map((src, index) => {
            const offset = getOffset(index);
            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isVisible = Math.abs(offset) <= 1;
            const opacity =
              isCenter ? 1
              : isVisible ? 0.4
              : 0;
            const translateX =
              isCenter ? "0%"
              : isLeft ? "-56%"
              : isRight ? "56%"
              : offset < 0 ? "-104%"
              : "104%";
            const scale =
              isCenter ? 1
              : isVisible ? 0.84
              : 0.72;
            const rotate =
              isCenter ? 0
              : isLeft ? -7
              : isRight ? 7
              : offset < 0 ? -12
              : 12;
            const zIndex =
              isCenter ? 30
              : isVisible ? 20
              : 0;

            return (
              <div
                key={src}
                style={{
                  position: "absolute",
                  width: "clamp(200px, 60vw, 360px)",
                  aspectRatio: "3 / 4",
                  borderRadius: "20px",
                  overflow: "hidden",
                  pointerEvents: isCenter ? "auto" : "none",
                  display: isVisible ? "block" : "none",
                  opacity,
                  zIndex,
                  transform: `translateX(${translateX}) scale(${scale}) rotate(${rotate}deg)`,
                  transition:
                    "transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease, border-color 0.45s ease",
                  border:
                    isCenter ?
                      "2px solid var(--color-accent-rose-light)"
                    : "1px solid rgba(219, 122, 133, 0.22)",
                  boxShadow:
                    isCenter ?
                      "0 14px 42px rgba(44, 44, 44, 0.14)"
                    : "0 10px 28px rgba(44, 44, 44, 0.08)",
                }}
              >
                <img
                  alt={GALLERY_IMAGE_ALT}
                  src={src}
                  loading={isCenter ? "eager" : "lazy"}
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: isCenter ? "none" : "saturate(0.9) brightness(0.9)",
                    transition: "filter 0.45s ease",
                  }}
                />
              </div>
            );
          })}

          <button
            type="button"
            aria-label="Show previous photo"
            onClick={prev}
            className="absolute z-40 flex items-center justify-center transition-colors duration-300 -translate-y-1/2 rounded-full left-2 sm:left-4 md:left-6 top-1/2 w-11 h-11 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-rose-light)] hover:bg-[var(--color-accent-rose)] hover:text-white"
            style={{
              border: "1px solid var(--color-accent-rose)",
              backgroundColor: "rgba(255, 255, 255, 0.88)",
              color: "var(--color-accent-rose)",
              boxShadow: "0 8px 24px rgba(44, 44, 44, 0.1)",
            }}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            aria-label="Show next photo"
            onClick={next}
            className="absolute z-40 flex items-center justify-center transition-colors duration-300 -translate-y-1/2 rounded-full right-2 sm:right-4 md:right-6 top-1/2 w-11 h-11 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-rose-light)] hover:bg-[var(--color-accent-rose)] hover:text-white"
            style={{
              border: "1px solid var(--color-accent-rose)",
              backgroundColor: "rgba(255, 255, 255, 0.88)",
              color: "var(--color-accent-rose)",
              boxShadow: "0 8px 24px rgba(44, 44, 44, 0.1)",
            }}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
