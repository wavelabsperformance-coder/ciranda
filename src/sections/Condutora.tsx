import Reveal from "@/components/Reveal";

const tags = ["Psicologia Junguiana", "Visão Sistêmica", "Tantra", "Espiritualidade"];

export default function Condutora() {
  return (
    <section id="condutora" className="bg-[color:var(--surface-soft)] py-28 md:py-36">
      <div className="container-x grid items-center gap-14 md:grid-cols-12 md:gap-20">
        <div className="relative md:col-span-5">
          <Reveal y={30}>
            <div className="relative">
              <span className="absolute -left-3 -top-3 h-16 w-16 rounded-full border border-[color:var(--primary)]/40" />
              <img
                src="/images/condutora.jpeg"
                alt="Juliana Prado, condutora da Ciranda"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-[26px] object-cover shadow-[0_35px_70px_-35px_rgba(75,40,20,0.45)]"
              />
              <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] px-5 py-3 shadow-xl">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--accent-rose)] font-serif text-sm text-[color:var(--primary)]">
                  JP
                </span>
                <div>
                  <p className="font-serif text-base text-[color:var(--foreground)]">+10 anos</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--muted-foreground)]">
                    Conduzindo Mulheres
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow">A Condutora</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-5xl leading-[1.05] text-[color:var(--foreground)] md:text-6xl">
              Juliana <span className="text-[color:var(--primary)]">Prado</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 font-serif text-xl italic text-[color:var(--muted-foreground)] md:text-2xl">
              Psicóloga Junguiana, fundadora da Ciranda, facilitadora de meditação tântrica e
              consteladora familiar.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl leading-relaxed text-[color:var(--muted-foreground)]">
              Juliana conduz mulheres em processos de{" "}
              <strong className="font-medium text-[color:var(--foreground)]">
                reconstrução emocional
              </strong>
              , libertação de padrões inconscientes e reconexão com a própria força. Unindo
              psicologia, visão sistêmica, espiritualidade e experiências corporais, ela criou a
              Ciranda como um espaço vivo de transformação feminina profunda.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-7 flex flex-wrap gap-2">
              {tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] px-4 py-2 text-sm text-[color:var(--foreground)]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
