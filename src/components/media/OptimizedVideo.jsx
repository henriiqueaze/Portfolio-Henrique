import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function OptimizedVideo({
  source,
  poster,
  className,
  label,
  eager = false,
  controls = false,
  onLoadedMetadata,
  onTimeUpdate,
}) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          if (!shouldReduceMotion) video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "240px 0px", threshold: 0.12 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad || shouldReduceMotion) return;
    video.play().catch(() => {});
  }, [shouldLoad, shouldReduceMotion]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? source : undefined}
      poster={poster}
      className={className}
      aria-label={label}
      muted
      loop
      playsInline
      controls={controls}
      preload={eager ? "metadata" : "none"}
      onLoadedMetadata={(event) => {
        const video = event.currentTarget;
        video.dataset.orientation = video.videoHeight > video.videoWidth ? "portrait" : "landscape";
        onLoadedMetadata?.(event);
      }}
      onTimeUpdate={onTimeUpdate}
    />
  );
}
