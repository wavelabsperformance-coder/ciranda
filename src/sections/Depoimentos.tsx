import { motion } from "framer-motion";
import { Leaf, Moon, Shield, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

const features = [
  {
    Icon: Leaf,
    title: "Natureza Viva",
    desc: "Um ambiente que respira e pulsa junto com cada mulher presente.",
  },
  {
    Icon: Moon,
    title: "Energia Especial",
    desc: "Realizada sob a força da Lua Azul, fenômeno astrológico raro.",
  },
  {
    Icon: Shield,
    title: "Campo Seguro",
    desc: "Espaço de acolhimento, confiança e profunda conexão entre mulheres.",
  },
  {
    Icon: Sparkles,
    title: "Vagas Limitadas",
    desc: "Para garantir a profundidade e a qualidade de cada experiência.",
  },
];

export default function Espaco() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [activeVideo, setActiveVideo] = useState(false);

  return (
    <section id="espaco" className="relative py-10 md:py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <p className="eyebrow">O Espaço</p>

          <h2 className="mt-5 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl text-balance">
            Fazenda{" "}
            <em className="text-primary not-italic">
              Saint Germain
            </em>
          </h2>
        </motion.div>

        <div className="mt-12 grid items-center gap-12 md:mt-16 md:grid-cols-12">

          {/* VIDEO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="relative md:col-span-7"
          >
            <div className="group relative isolate overflow-hidden rounded-[1.75rem] shadow-2xl shadow-foreground/10">

              <video
                ref={(el) => {
                  videoRef.current = el;

                  // força thumb no mobile
                  if (el) {
                    el.currentTime = 0.1;
                  }
                }}
                src="/videos/espaco.mp4"
                playsInline
                preload="metadata"
                controls
                muted={!activeVideo}
                disablePictureInPicture
                controlsList="nodownload noplaybackrate"
                style={{
                  WebkitAppearance: "none",
                }}
                className={`
                  relative z-10 aspect-video w-full cursor-pointer object-cover
                  transition-transform duration-[1.4s] ease-out group-hover:scale-105

                  [&::-webkit-media-controls-overlay-play-button]:hidden
                  [&::-webkit-media-controls-start-playback-button]:hidden
                  [&::-webkit-media-controls-play-button]:block
                  [&::-webkit-media-controls-panel]:flex

                  ${
                    !activeVideo
                      ? "[&::-webkit-media-controls]:opacity-0"
                      : "[&::-webkit-media-controls]:opacity-100"
                  }
                `}

                // PREVIEW DESKTOP
                onMouseEnter={async (e) => {
                  if (window.innerWidth < 768) return;

                  const video = e.currentTarget;

                  if (!activeVideo) {
                    try {
                      video.muted = true;
                      await video.play();
                    } catch {}
                  }
                }}

                onMouseLeave={(e) => {
                  if (window.innerWidth < 768) return;

                  const video = e.currentTarget;

                  if (!activeVideo) {
                    video.pause();
                    video.currentTime = 0.1;
                  }
                }}

                // PLAYER REAL
                onClick={(e) => {
                  const video = e.currentTarget;

                  setActiveVideo(true);

                  video.muted = false;
                }}
              />

              {/* OVERLAY */}
              {!activeVideo && (
                <>
                  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/30 via-black/10 to-transparent transition-all duration-700 group-hover:from-black/10 group-hover:via-transparent" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 p-6 md:p-8">
                    <div className="max-w-md">
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* TEXTOS */}
          <div className="md:col-span-5">
            <p className="font-serif text-2xl italic leading-snug text-foreground/80 md:text-3xl">
              Um dia inteiro de imersão em um espaço vivo, conectado à natureza
              e ao sagrado feminino.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                  }}
                  className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:bg-card"
                >
                  <Icon
                    size={20}
                    className="text-primary"
                    strokeWidth={1.4}
                  />

                  <h3 className="mt-3 font-serif text-lg text-foreground">
                    {title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}