import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface Props {
  src: string;
  poster?: string;
  className?: string;
  aspect?: "portrait" | "landscape";
}

/**
 * Player premium:
 * - Thumb é o próprio vídeo (primeiro frame)
 * - Hover (desktop) ou touch (mobile): preview em mute
 * - Click: inicia com som e revela controles nativos
 */
export default function PremiumVideo({ src, poster, className, aspect = "portrait" }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (v) v.load();
  }, [src]);

  const onEnter = () => {
    if (activated) return;
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  };
  const onLeave = () => {
    if (activated) return;
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };
  const activate = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    v.controls = true;
    v.currentTime = 0;
    v.play().catch(() => {});
    setActivated(true);
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-[22px] bg-black/5 shadow-[0_30px_60px_-30px_rgba(75,40,20,0.45)] ${aspect === "portrait" ? "aspect-[3/4]" : "aspect-[16/9]"} ${className ?? ""}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={onEnter}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
      {!activated && (
        <button
          type="button"
          onClick={activate}
          aria-label="Reproduzir vídeo com som"
          className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/45 via-black/0 to-transparent p-5 transition-opacity duration-300 group-hover:from-black/25"
        >
          <span className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-[color:var(--foreground)] shadow-lg backdrop-blur transition-transform group-hover:scale-105">
            <Play className="h-3.5 w-3.5 fill-current" /> Assistir
          </span>
        </button>
      )}
    </div>
  );
}
