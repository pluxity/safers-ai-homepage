// React 섬(island) 안에서 쓰는 공통 섹션 조각. .astro 쪽에는 같은 모양의 Astro 버전이 따로 있다.
import { motion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "../../lib/cn";

export function Eyebrow({
  children,
  tone = "light",
  size = "sm",
}: {
  children: ReactNode;
  tone?: "light" | "ink";
  size?: "sm" | "lg";
}) {
  return (
    <p
      className={cn(
        size === "lg" ? "eyebrow-lg" : "eyebrow",
        tone === "ink" ? "text-primary-bright" : "text-primary",
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "ink";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && (
        <Eyebrow tone={tone} size="lg">
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "mt-4 text-[2.25rem] font-bold display-tight sm:text-5xl lg:text-[3.5rem]",
          tone === "ink" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed sm:text-xl",
            tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** 화면에 들어오면 아래에서 위로 떠오르며 나타난다 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5rem" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** 밝은 액자 안의 반복 제품 영상. 재생 준비가 되면 서서히 나타난다 */
export function VideoShot({
  src,
  poster,
  label,
  className,
}: {
  src: string;
  poster?: string | undefined;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const play = () => {
      void v.play().catch(() => {});
    };
    play();
    v.addEventListener("canplay", play);
    // React가 이벤트를 붙이기 전에 canplay가 이미 지나갔을 수 있다
    if (v.readyState >= 3) setReady(true);
    return () => v.removeEventListener("canplay", play);
  }, []);

  return (
    <div className="media-frame">
      <video
        ref={ref}
        src={src}
        poster={poster}
        aria-label={label}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setReady(true)}
        className={cn(
          "block w-full rounded-[0.625rem] bg-secondary transition-opacity duration-1000",
          ready ? "opacity-100" : "opacity-0",
          className,
        )}
      />
    </div>
  );
}

/** 같은 액자 안의 제품 스크린샷 */
export function Shot({
  src,
  alt,
  className,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className="media-frame">
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className={cn("block w-full rounded-[0.625rem] bg-secondary", className)}
      />
    </div>
  );
}
