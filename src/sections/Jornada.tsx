import { motion } from "framer-motion";
import { useRef, useState } from "react";

const etapas = [
  {
    n: "01",
    title: "Chegada",
    desc: "Acolhimento e integração ao espaço sagrado. O início do desacelerar.",
  },
  {
    n: "02",
    title: "Vivências",
    desc: "Rituais e experiências guiadas que tocam o corpo e a alma.",
  },
  {
    n: "03",
    title: "Travessia",
    desc: "Movimentos profundos de liberação. O instante em que algo cede.",
  },
  {
    n: "04",
    title: "Despertar",
    desc: "Reconexão com a sua nova versão. O retorno transformado.",
  },
];

export default function Jornada() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [activeVideo, setActiveVideo] = useState(false);

  return (
    <section
      id="jornada"
      className="relative overflow-hidden bg-secondary/50 py-10 md:py-10"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* HEADER */}
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Como acontece</p>

            <h2 className="mt-5 font-serif text-5xl leading-[1.02] text-foreground md:text-7xl text-balance">
              A jornada{" "}
              <em className="text-primary not-italic">da Ciranda</em>.
            </h2>
          </div>

          <div className="md:col-span-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              Quatro movimentos que se entrelaçam ao longo do dia. Cada etapa
              prepara, dissolve e revela a próxima.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:mt-10 md:grid-cols-12 md:gap-12">

          {/* VIDEO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative md:col-span-5"
          >
            <div className="group relative isolate overflow-hidden rounded-[1.5rem]">

              <video
                ref={(el) => {
                  videoRef.current = el;

                  // força thumb no mobile
                  if (el) {
                    el.currentTime = 0.1;
                  }
                }}
                src="/videos/jornada.mp4"
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
                  relative z-10 aspect-[4/5] w-full cursor-pointer object-cover
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
                <div className="pointer-events-none absolute inset-0 z-20 bg-black/10 transition-all duration-500 group-hover:bg-black/0" />
              )}
            </div>

            {/* BADGE */}
            <div className="absolute -right-4 -top-4 rounded-full bg-primary px-4 py-2 text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground">
              Lua Azul
            </div>
          </motion.div>

          {/* ETAPAS */}
          <ol className="md:col-span-7 md:pl-6">
            {etapas.map((e, i) => (
              <motion.li
                key={e.n}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative grid grid-cols-[auto_1fr] gap-6 border-b border-border py-7 last:border-b-0"
              >
                <span className="font-serif text-3xl italic text-primary/60 transition-colors group-hover:text-primary md:text-4xl">
                  {e.n}
                </span>

                <div>
                  <h3 className="font-serif text-2xl text-foreground md:text-3xl">
                    {e.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                    {e.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
}