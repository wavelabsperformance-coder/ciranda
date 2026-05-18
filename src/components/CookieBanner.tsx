import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const KEY = "ciranda.cookies.v1";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);
  if (!show) return null;
  const accept = () => {
    localStorage.setItem(KEY, "accepted");
    setShow(false);
  };
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 md:inset-x-auto md:bottom-5 md:left-5 md:max-w-md">
      <div className="rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-card)]/95 p-5 shadow-2xl backdrop-blur">
        <p className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
          Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{" "}
          <Link to="/politica-de-cookies" className="text-[color:var(--primary)] underline">
            Política de Cookies
          </Link>
          .
        </p>
        <div className="mt-3 flex gap-2">
          <button
            onClick={accept}
            className="flex-1 rounded-full bg-[color:var(--primary)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Aceitar
          </button>
          <Link
            to="/lgpd"
            className="rounded-full border border-[color:var(--border-soft)] px-4 py-2 text-sm font-medium text-[color:var(--foreground)] transition hover:bg-[color:var(--surface-soft)]"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
}
