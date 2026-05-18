import Reveal from "@/components/Reveal";

const blocks = [
  {
    num: "01",
    title: "Presa em dores",
    text: "Medos e padrões que se repetem sem que você consiga sair. Uma sensação de pausa que se prolonga.",
  },
  {
    num: "02",
    title: "Silêncios",
    text: "Relacionamentos e versões antigas de si mesma que ainda te prendem em um lugar que já não cabe.",
  },
  {
    num: "03",
    title: "Um portal te espera",
    text: "A Ciranda nasce como espaço seguro de travessia, despertar e reorganização profunda do feminino.",
  },
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="font-serif text-4xl leading-[1.05] text-[color:var(--foreground)] md:text-6xl">
                Existe uma vida muito maior{" "}
                <span className="accent-text not-italic md:italic">esperando por você.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-12 lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="mt-2 max-w-xl font-serif text-xl italic text-[color:var(--muted-foreground)] md:text-2xl">
                Mas talvez, neste momento, você ainda esteja olhando para a vida por um único
                caminho.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-3">
          {blocks.map((b, i) => (
            <Reveal key={b.num} delay={i * 0.08}>
              <article
                className={`card-soft h-full p-8 md:p-9 ${i === 1 ? "md:mt-12" : ""} ${i === 2 ? "md:mt-4" : ""}`}
              >
                <p className="font-serif text-3xl italic text-[color:var(--accent)]">{b.num}</p>
                <h3 className="mt-6 font-serif text-2xl text-[color:var(--foreground)]">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                  {b.text}
                </p>
                <div className="mt-7 h-px w-10 bg-[color:var(--primary)]/40" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-20 max-w-3xl text-center font-serif text-2xl italic text-[color:var(--foreground)] md:text-3xl">
            A Ciranda não é apenas uma experiência.
            <br />
            <span className="text-[color:var(--primary)]">É um chamado.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
