import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, MessageCircle, Instagram } from "lucide-react";
import { contact, buildWhatsAppLink } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="bg-[color:var(--deep)] text-[color:var(--deep-foreground)]">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 font-serif text-lg text-white/90">
              S
            </span>
            <div>
              <p className="font-serif text-lg text-white">Spaço Integrativo</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/50">
                Psicologia · Travessia · Feminino
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
            Um espaço dedicado à transformação feminina profunda. Conduzimos mulheres em jornadas
            de reconstrução emocional, expansão e reconexão com a própria essência.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
          
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">Navegação</p>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li><a href="#experiencia" className="hover:text-white">A experiência</a></li>
            <li><a href="#condutora" className="hover:text-white">Condutora</a></li>
            <li><a href="#jornada" className="hover:text-white">Jornada</a></li>
            <li><a href="#espaco" className="hover:text-white">Espaço</a></li>
            <li><a href="#investimento" className="hover:text-white">Investimento</a></li>
            <li><a href="#formulario" className="hover:text-white">Contato</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">Contato</p>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-white/55" />
              <span>{contact.phone}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-white/55" />
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-white/55" />
              <span>{contact.address}</span>
            </li>
          </ul>
          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-white/45">
            CNPJ {contact.cnpj}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-4 px-5 py-6 text-xs text-white/55 md:flex-row md:items-center md:px-8">
          <p>© {new Date().getFullYear()} {contact.company}. Todos os direitos reservados.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link to="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link></li>
            <li><Link to="/termos-de-uso" className="hover:text-white">Termos de Uso</Link></li>
            <li><Link to="/politica-de-cookies" className="hover:text-white">Cookies</Link></li>
            <li><Link to="/lgpd" className="hover:text-white">LGPD</Link></li>
          </ul>
        </div>
        <div className="mx-auto max-w-[1240px] border-t border-white/5 px-5 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-white/35 md:px-8">
          Desenvolvido por{" "}
          <a
            href={contact.agency.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white"
          >
            {contact.agency.name}
          </a>
        </div>
      </div>
    </footer>
  );
}
