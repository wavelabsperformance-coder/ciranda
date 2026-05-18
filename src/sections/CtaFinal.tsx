import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { buildWhatsAppLink, contact } from "@/data/contact";

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative isolate">
        <img
          src="/images/cta-final.jpg"
          alt="Mulher em silhueta com braços abertos em floresta iluminada"
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/55 to-[color:var(--deep)]" />

        <div className="container-x py-32 text-center text-white md:py-44">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-[1.1] md:text-6xl">
              Ela está lá.
              <br />
              <span className="italic text-white/90">Esperando pela sua permissão.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-relaxed text-white/75 md:text-base">
              Talvez você ainda não saiba qual é a mulher que existe do outro lado desse portal.
              Mas ela está lá. As vagas para esta edição da Ciranda são{" "}
              <strong className="text-white">limitadas</strong>. Não deixe que o medo de
              atravessar seja maior do que o desejo de chegar.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-[11px] uppercase tracking-[0.35em] text-white/55">
              {contact.eventDate} · {contact.eventLocation} · Lua Azul
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#formulario" className="btn-primary">
                Quero atravessar <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
