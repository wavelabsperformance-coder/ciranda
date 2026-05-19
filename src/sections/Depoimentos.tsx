import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

const depoimentos = [
  {
    name: "Edvane Libório.",
    role: "Edição anterior",
    quote:
      "Saí da Ciranda outra mulher. Algo se reorganizou dentro de mim que eu nem sabia que precisava.",
    video: "/videos/depoimento-1.mp4",
  },
  {
    name: "América Nejaim.",
    role: "Edição anterior",
    quote:
      "Foi a travessia mais profunda da minha vida. Recomendo a toda mulher que sente o chamado.",
    video: "/videos/depoimento-2.mp4",
  },
  {
    name: "Aline Gizimti.",
    role: "Edição anterior",
    quote:
      "Voltei mais leve, mais inteira, mais minha. A Juliana conduz com uma profundidade rara.",
    video: "/videos/depoimento-3.mp4",
  },
];

export default function Depoimentos() {
  const scroller = useRef<HTMLDivElement>(null);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const showArrows = depoimentos.length > 3;

  const scroll = (dir: 1 | -1) => {
    scroller.current?.scrollBy({
      left: dir * 400,
      behavior: "smooth",
    });
  };

  // ✅ FORÇA FRAME VISÍVEL NO MOBILE/IPHONE
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;

      video.muted = true;
      video.playsInline = true;

      const forceFrame = async () => {
        try {
          await video.play();

          setTimeout(() => {
            video.pause();
            video.currentTime = 0.1;
          }, 80);
        } catch (err) {
          console.log(err);
        }
      };

      forceFrame();
    });
  }, []);

  // ✅ PREVIEW DESKTOP
  const handleHoverPlay = async (index: number) => {
    if (window.innerWidth < 768) return;

    const video = videoRefs.current[index];

    if (!video) return;

    try {
      video.muted = true;
      await video.play();
    } catch (err) {
      console.log(err);
    }
  };

  const handleHoverLeave = (index: number) => {
    if (window.innerWidth < 768) return;

    const video = videoRefs.current[index];

    if (!video) return;

    video.pause();
    video.currentTime = 0.1;
  };

  return (
    <section className="relative py-10 md:py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* HEADER */}
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Depoimentos</p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-6xl text-balance">
              Mulheres que{" "}
              <em className="text-primary not-italic">
                atravessaram
              </em>{" "}
              o portal.
            </h2>
          </div>

          {showArrows && (
            <div className="hidden gap-2 md:flex">
              <button
                onClick={() => scroll(-1)}
                aria-label="Anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:border-primary hover:text-primary"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => scroll(1)}
                aria-label="Próximo"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:border-primary hover:text-primary"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {/* LISTA */}
        <div
          ref={scroller}
          className={`mt-14 ${
            showArrows
              ? "flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : "grid gap-6 md:grid-cols-3"
          }`}
        >
          {depoimentos.map((d, i) => (
            <motion.figure
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group relative ${
                showArrows
                  ? "min-w-[280px] md:min-w-[340px] snap-start"
                  : ""
              }`}
            >
              <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-foreground/5 shadow-xl shadow-black/5">

                {/* VIDEO */}
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={d.video}
                  muted
                  playsInline
                  preload="auto"
                  controls
                  loop
                  className="relative z-10 aspect-[9/16] w-full object-cover transition-transform duration-[1.4s] ease-out"
                  onMouseEnter={() => handleHoverPlay(i)}
                  onMouseLeave={() => handleHoverLeave(i)}
                />

                {/* OVERLAY */}
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* TEXTO */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 p-5">
                  <div className="max-w-xs">
                    <p className="font-serif text-lg italic leading-snug text-white">
                      "{d.quote}"
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <span className="h-px w-8 bg-white/50" />

                      <p className="text-sm font-medium text-white">
                        {d.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <figcaption className="mt-5 px-1">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-primary/60" />

                  <p className="text-sm font-medium text-foreground">
                    {d.name}
                  </p>

                  <span className="text-xs text-muted-foreground">
                    · {d.role}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* STATS */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 md:grid-cols-4">
          {[
            ["+500", "Mulheres atravessaram"],
            ["+10", "Anos de experiência"],
            ["4.9★", "Avaliação média"],
            ["98%", "Recomendariam"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="bg-card p-7 text-center"
            >
              <p className="font-serif text-4xl text-primary">
                {n}
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}