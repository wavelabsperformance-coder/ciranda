import { ArrowRight, MessageCircle } from "lucide-react";
import { contact, buildWhatsAppLink } from "@/data/contact";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-36 md:pb-10">
      {/* gradient orgânico */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[color:var(--accent-rose)] opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-[color:var(--accent)] opacity-20 blur-3xl" />
      </div>

      <div className="container-x grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6 md:pr-4">
          <Reveal>
            <span className="chip">
              <span className="chip-dot" /> {contact.edition}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-7 font-serif text-[15vw] leading-[0.9] text-[color:var(--foreground)] md:text-[7.5rem]">
              Ciranda<span className="text-[color:var(--primary)]">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 font-serif text-2xl italic text-[color:var(--muted-foreground)] md:text-3xl">
              uma travessia feminina sob a{" "}
              <span className="text-[color:var(--primary)]">Lua Azul</span>
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-[color:var(--muted-foreground)] md:text-base">
              Realizada no fenômeno astrológico raro da{" "}
              <strong className="font-medium text-[color:var(--foreground)]">Lua Azul</strong>, uma
              experiência feminina de desbloqueio, expansão e travessia emocional. Um portal vivo
              para a mulher que existe do outro lado.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] px-5 py-2.5 text-sm text-[color:var(--foreground)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--primary)]" />
              <span className="font-medium">{contact.eventDate}</span>
              <span className="text-[color:var(--muted-foreground)]">·</span>
              <span className="text-[color:var(--muted-foreground)]">{contact.eventLocation}</span>
            </div>
          </Reveal>

          <Reveal delay={0.33}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#formulario" className="btn-primary">
                Quero atravessar <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={buildWhatsAppLink("Olá! Quero saber mais sobre a Ciranda.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <MessageCircle className="h-4 w-4" /> Conversar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative md:col-span-6">
          <Reveal y={36} delay={0.15}>
            <div className="relative">
              <img
                src="/images/hero.jpg"
                alt="Mulher caminhando por floresta tropical iluminada pelo sol"
                width={1080}
                height={1620}
                className="aspect-[4/5] w-full rounded-[28px] object-cover shadow-[0_40px_80px_-30px_rgba(75,40,20,0.45)]"
              />
              <div className="absolute -top-3 right-5 rounded-full bg-[color:var(--foreground)] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white shadow-lg">
                Vagas limitadas
              </div>
              <div className="absolute -bottom-6 left-6 rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-card)] px-5 py-3 shadow-xl">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
                  Fenômeno
                </p>
                <p className="mt-1 font-serif text-lg italic text-[color:var(--foreground)]">
                  Lua Azul
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
