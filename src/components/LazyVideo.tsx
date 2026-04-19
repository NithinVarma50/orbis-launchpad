import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  className?: string;
  /** When true, loads immediately (use for above-the-fold hero). */
  eager?: boolean;
  ariaLabel?: string;
};

/**
 * Performance-friendly looping background video.
 * - Defers load until the element is near the viewport (IntersectionObserver).
 * - Pauses playback when scrolled out of view to save CPU/battery.
 * - Respects prefers-reduced-motion (renders nothing — parent bg shows through).
 */
const LazyVideo = ({ src, className, eager = false, ariaLabel }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (eager || shouldLoad) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager, shouldLoad]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !shouldLoad || reducedMotion) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shouldLoad, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <video
      ref={ref}
      className={className}
      src={shouldLoad ? src : undefined}
      autoPlay
      loop
      muted
      playsInline
      preload={eager ? "auto" : "none"}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    />
  );
};

export default LazyVideo;
