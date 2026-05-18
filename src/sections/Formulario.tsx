import { useState } from "react";
import { toast } from "sonner";
import Reveal from "@/components/Reveal";
import { buildWhatsAppLink } from "@/data/contact";

export default function Formulario() {
  const [data, setData] = useState({ name: "", email: "", phone: "", message: "" });
  const [lgpd, setLgpd] = useState(false);

  const change = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name.trim() || !data.email.trim() || !data.phone.trim()) {
      toast.error("Preencha nome, e-mail e WhatsApp.");
      return;
    }
    if (!lgpd) {
      toast.error("É necessário aceitar a Política de Privacidade.");
      return;
    }
    const msg = `Olá! Vim pelo site da Ciranda.\n\nNome: ${data.name}\nE-mail: ${data.email}\nWhatsApp: ${data.phone}${data.message ? `\nMensagem: ${data.message}` : ""}`;
    window.open(buildWhatsAppLink(msg), "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <section id="formulario" className="py-10 md:py-10">
      <div className="container-x max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow">Fale Conosco</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-serif text-5xl leading-[1.05] text-[color:var(--foreground)] md:text-6xl">
            Reserve sua <span className="accent-text not-italic md:italic">vaga</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-[color:var(--muted-foreground)]">
            Deixe seus dados e entraremos em contato pelo WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={submit}
            className="card-soft mx-auto mt-12 text-left p-7 md:p-10"
          >
            <div className="space-y-6">
              <Field label="Nome Completo">
                <input
                  type="text"
                  value={data.name}
                  onChange={change("name")}
                  placeholder="Como podemos te chamar?"
                  className="form-input"
                />
              </Field>
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="E-mail">
                  <input
                    type="email"
                    value={data.email}
                    onChange={change("email")}
                    placeholder="voce@email.com"
                    className="form-input"
                  />
                </Field>
                <Field label="WhatsApp">
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={change("phone")}
                    placeholder="(00) 00000-0000"
                    className="form-input"
                  />
                </Field>
              </div>
              <Field label="Mensagem (opcional)">
                <textarea
                  value={data.message}
                  onChange={change("message")}
                  placeholder="Conte um pouco sobre o que te chamou..."
                  rows={4}
                  className="form-input resize-none"
                />
              </Field>

              <label className="flex items-start gap-3 text-sm text-[color:var(--muted-foreground)]">
                <input
                  type="checkbox"
                  checked={lgpd}
                  onChange={(e) => setLgpd(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[color:var(--primary)]"
                />
                <span>
                  Concordo com a{" "}
                  <a href="/politica-de-privacidade" className="text-[color:var(--primary)] underline">
                    Política de Privacidade
                  </a>{" "}
                  e autorizo o tratamento dos meus dados conforme a LGPD para fins de contato sobre
                  a Ciranda.
                </span>
              </label>

              <button type="submit" className="btn-primary w-full justify-center">
                Enviar e falar no WhatsApp
              </button>
            </div>
          </form>
        </Reveal>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: transparent;
          border: 1px solid var(--border-soft);
          border-radius: 12px;
          padding: 14px 16px;
          font-size: 14px;
          color: var(--foreground);
          transition: border-color .25s ease, box-shadow .25s ease;
        }
        .form-input::placeholder { color: color-mix(in oklab, var(--muted-foreground) 75%, transparent); }
        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--primary) 15%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted-foreground)]">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
