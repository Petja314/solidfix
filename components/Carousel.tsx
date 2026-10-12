"use client";

import { useEffect, useState } from "react";
import type { Slide } from "@/data/slides";

type CarouselProps = {
  slides: Slide[];
  kind: "projects" | "reviews";
  label: string;
};

export default function Carousel({ slides, kind, label }: CarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const isProjects = kind === "projects";
  const singular = isProjects ? "project" : "review";

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
  }, []);

  useEffect(() => {
    if (paused || interacting) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [active, interacting, paused, slides.length]);

  useEffect(() => {
    function onVisibilityChange() {
      if (document.hidden) setInteracting(true);
      else setInteracting(false);
    }
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  function moveTo(index: number) {
    setActive((index + slides.length) % slides.length);
  }

  return (
    <div
      className={`carousel-gallery ${isProjects ? "project-gallery" : "review-gallery"}`}
      aria-label={label}
      aria-roledescription="carousel"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setInteracting(false);
      }}
    >
      <div className={`review-carousel ${isProjects ? "project-carousel" : "review-carousel-reviews"}`}>
        <button
          className="review-arrow review-prev"
          type="button"
          aria-label={`Previous ${singular}`}
          onClick={() => moveTo(active - 1)}
        >←</button>
        <div className="review-stage" aria-live="polite">
          {slides.map((slide, index) => (
            <div
              className={`review-slide${index === active ? " is-active" : ""}`}
              key={slide.src}
              aria-hidden={index !== active}
            >
              {/* Plain img is intentional: static export keeps these original, unedited photos. */}
              <img
                src={slide.src}
                alt={slide.alt}
                loading={index === active ? "eager" : "lazy"}
                fetchPriority={index === active && index === 0 ? "high" : undefined}
              />
              {slide.source && <span className="review-source">{slide.source}</span>}
            </div>
          ))}
        </div>
        <button
          className="review-arrow review-next"
          type="button"
          aria-label={`Next ${singular}`}
          onClick={() => moveTo(active + 1)}
        >→</button>
      </div>
      <div className={`review-controls${isProjects ? " project-controls" : ""}`}>
        <div className={`review-dots${isProjects ? " project-dots" : ""}`} role="group" aria-label={`Choose a ${singular}`}>
          {slides.map((slide, index) => (
            <button
              className={`review-dot${index === active ? " is-active" : ""}`}
              type="button"
              key={slide.src}
              aria-label={`Show ${singular} ${index + 1}`}
              aria-current={index === active ? "true" : "false"}
              onClick={() => moveTo(index)}
            />
          ))}
        </div>
        <span className="review-count"><b>{String(active + 1).padStart(2, "0")}</b> / {String(slides.length).padStart(2, "0")}</span>
        <button
          className="review-pause"
          type="button"
          aria-label={`${paused ? "Resume" : "Pause"} automatic ${singular} rotation`}
          onClick={() => setPaused((value) => !value)}
        >{paused ? "▶ " : "Ⅱ "}<span>{paused ? "Play" : "Pause"}</span></button>
      </div>
    </div>
  );
}
