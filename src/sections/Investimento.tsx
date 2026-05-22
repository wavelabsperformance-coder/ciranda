import { Check, CreditCard, Heart, QrCode, Wallet } from "lucide-react";
import Reveal from "@/components/Reveal";
import { contact } from "@/data/contact";

const incluso = [
  "Dia inteiro de imersão na Fazenda Saint Germain",
  "Rituais com os elementos e movimentos sistêmicos",
  "Vivências de dança e expressão feminina",
  "Condução por Juliana Prado e equipe",
  "Alimentação consciente durante a vivência",
  "Material de apoio e guia preparatório",
];

export default function Investimento() {
  return (
    <section
      id="investimento"
      className="bg-[color:var(--surface-soft)] py-28 md:py-36"
    >
      <div className="container-x grid gap-14 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow">Investimento</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-5xl leading-[1.05] text-[color:var(--foreground)] md:text-6xl">
              Um portal aberto{" "}
              <span className="accent-text not-italic md:italic">
                para poucas.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-[color:var(--muted-foreground)]">
              A Ciranda acontece em formato íntimo para preservar a profundidade
              da experiência. As vagas são limitadas e seguem por ordem de
              confirmação.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3">
              {incluso.map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[color:var(--foreground)]"
                >
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--primary)]/12 text-[color:var(--primary)]">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>

                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal y={30} delay={0.1}>
            <div className="relative overflow-hidden rounded-[26px] border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] p-8 shadow-[0_40px_80px_-40px_rgba(75,40,20,0.4)] md:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[color:var(--accent-rose)]/40 blur-3xl" />

              <div className="flex items-center justify-between">
                <p className="eyebrow">Investimento</p>

                <span className="chip">
                  <span className="chip-dot" /> {contact.edition}
                </span>
              </div>

              <div className="mt-7 flex items-end gap-3">
                <p className="font-serif text-7xl leading-none text-[color:var(--foreground)] md:text-8xl">
                  R$ 585
                  <span className="text-3xl text-[color:var(--muted-foreground)]">
                    ,00
                  </span>
                </p>
              </div>

              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
                à vista · ou em até 12x no cartão
              </p>

              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[color:var(--accent-rose)] bg-[color:var(--accent-rose)]/30 px-4 py-3">
                <Heart className="h-4 w-4 text-[color:var(--primary)]" />

                <p className="text-sm text-[color:var(--foreground)]">
                  Traga uma amiga e ganhe{" "}
                  <strong className="text-[color:var(--primary)]">
                    10% de desconto
                  </strong>{" "}
                  na sua vaga.
                </p>
              </div>

              <div className="mt-7">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
                  Formas de Pagamento
                </p>

                <div className="mt-3 grid grid-cols-3 gap-3">
                  {[
                    { i: CreditCard, l: "Crédito" },
                    { i: Wallet, l: "Débito" },
                    { i: QrCode, l: "Pix" },
                  ].map(({ i: Icon, l }) => (
                    <div
                      key={l}
                      className="flex items-center justify-center gap-2 rounded-xl border border-[color:var(--border-soft)] bg-[color:var(--background)] px-3 py-3 text-sm text-[color:var(--foreground)]"
                    >
                      <Icon className="h-4 w-4" />
                      {l}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://loja.infinitepay.io/juliana-prado-35k/bbl2375-inscricao-ciranda"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-7 w-full justify-center"
              >
                Garantir minha vaga
              </a>

              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
                Atendimento pelo WhatsApp
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}