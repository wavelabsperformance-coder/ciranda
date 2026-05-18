import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#condutora", label: "Condutora" },
  { href: "#jornada", label: "Jornada" },
  { href: "#espaco", label: "Espaço" },
  { href: "#investimento", label: "Investimento" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);

    on();

    window.addEventListener("scroll", on);

    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--background)]/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(120,80,50,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 md:px-8 md:py-5">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">

          {/* CÍRCULO VERMELHO */}
          <span
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              bg-[#C65449]
              text-white
              font-serif
              text-base
              shadow-sm
              transition
              group-hover:scale-105
            "
          >
            C
          </span>

          {/* TEXTO */}
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[28px] text-[#7A574B]">
              Ciranda
            </span>

            <span
              className="
                mt-1
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-[#B5978C]
              "
            >
              Dona de Mim
            </span>
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-[color:var(--foreground)]/80 transition hover:text-[color:var(--primary)]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* BOTÃO */}
        <a
          href="#formulario"
          className="hidden rounded-full bg-[color:var(--primary)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-[0_10px_25px_-12px_rgba(165,70,45,0.7)] transition hover:opacity-95 md:inline-flex"
        >
          Garantir minha vaga
        </a>

        {/* MOBILE BUTTON */}
        <button
          aria-label="Menu"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-[color:var(--border-soft)] bg-[color:var(--background)] px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base text-[color:var(--foreground)]"
              >
                {n.label}
              </a>
            ))}

            <a
              href="#formulario"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[color:var(--primary)] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.15em] text-white"
            >
              Garantir minha vaga
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}