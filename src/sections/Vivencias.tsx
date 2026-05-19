import Reveal from "@/components/Reveal";

const vivencias = [
  {
    num: "01",
    img: "/images/vivencia-1.jpeg",
    title: "Exercícios sensoriais",
    text: "Vivências corporais e dança que libertam o que as palavras não alcançam.",
  },
  {
    num: "02",
    img: "/images/vivencia-2.jpeg",
    title: "Banhos terapêuticos medicinais",
    text: "Conexão sagrada com água, terra, fogo e ar para ativar sua transformação.",
  },
  {
    num: "03",
    img: "/images/vivencia-3.jpeg",
    title: "Transmutação no fogo sagrado",
    text: "Desbloqueios emocionais e movimentos que reorganizam padrões profundos.",
  },
  {
    num: "04",
    img: "/images/vivencia-4.jpeg",
    title: "Expansão da Consciência",
    text: "Abertura de caminhos sob a energia viva da Fazenda Saint Germain.",
  },
];

export default function Vivencias() {
  return (
    <section className="py-10 md:py-10">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Vivências</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] text-[color:var(--foreground)] md:text-5xl">
            Conexão profunda com{" "}
            <span className="accent-text not-italic md:italic">corpo, mente e alma.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {vivencias.map((v, i) => (
            <Reveal key={v.num} delay={i * 0.06}>
              <article
                className={`group ${i % 2 === 1 ? "lg:mt-10" : ""}`}
              >
                <div className="relative overflow-hidden rounded-[18px] shadow-[0_25px_50px_-25px_rgba(75,40,20,0.35)]">
                  <img
                    src={v.img}
                    alt={v.title}
                    loading="lazy"
                    width={576}
                    height={720}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[10px] tracking-[0.35em] text-white/65">{v.num}</p>
                    <h3 className="mt-2 font-serif text-xl text-white">{v.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                  {v.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
