import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    q: "Para quem é a Ciranda?",
    a: "Para mulheres em qualquer fase da vida que sentem o chamado de uma travessia emocional profunda e desejam reconectar-se com a própria força.",
  },
  {
    q: "Preciso ter experiência prévia em vivências?",
    a: "Não. Toda a jornada é conduzida com acolhimento e segurança. Você é guiada do início ao fim.",
  },
  {
    q: "O que está incluso no investimento?",
    a: "Imersão completa de um dia na Fazenda Saint Germain, transporte, rituais, vivências, alimentação consciente e material de apoio.",
  },
  {
    q: "Como funcionam as formas de pagamento?",
    a: "Aceitamos Pix, débito, crédito à vista e parcelado em até 12x. Confirmação por ordem de pagamento.",
  },
  {
    q: "Posso levar uma amiga?",
    a: "Sim! Você e sua amiga ganham 10% de desconto cada uma ao se inscreverem juntas.",
  },
  {
    q: "E se eu precisar cancelar?",
    a: "Vagas são limitadas. Pedimos comunicação com no mínimo 15 dias de antecedência para reembolso parcial. Detalhes nos Termos de Uso.",
  },
];

export default function FAQ() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-x grid gap-14 md:grid-cols-12 md:items-start">
        {/* IMAGEM */}
        <div className="md:col-span-5">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="/images/faq.jpeg"
                alt="Ciranda"
                className="aspect-[4/5] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
          </Reveal>
        </div>

        {/* FAQ */}
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow mb-8">
              Perguntas Frequentes
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion.Root
              type="single"
              collapsible
              className="divide-y divide-[color:var(--border-soft)]"
            >
              {faqs.map((f, i) => (
                <Accordion.Item
                  key={i}
                  value={`item-${i}`}
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left">
                      <span className="font-serif text-lg text-[color:var(--foreground)] md:text-xl">
                        {f.q}
                      </span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--border-soft)] text-[color:var(--primary)] transition-all duration-500 group-data-[state=open]:rotate-45">
                        <Plus className="h-4 w-4" />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <Accordion.Content className="overflow-hidden text-[15px] leading-relaxed text-[color:var(--muted-foreground)] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="pb-6 pr-12">
                      {f.a}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Reveal>
        </div>
      </div>
    </section>
  );
}