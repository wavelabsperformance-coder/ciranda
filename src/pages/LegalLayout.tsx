import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Helmet>
        <title>{title} — Spaço Integrativo</title>
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={`/${title.toLowerCase().replace(/\s+/g, "-")}`} />
      </Helmet>
      <Header />
      <main className="pt-32 pb-20 md:pt-40">
        <div className="container-x max-w-3xl">
          <Link
            to="/"
            className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)]"
          >
            ← Voltar
          </Link>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-[color:var(--foreground)] md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-[color:var(--muted-foreground)]">{intro}</p>
          )}
          <div className="prose mt-10 max-w-none space-y-5 text-[15px] leading-relaxed text-[color:var(--muted-foreground)] [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-[color:var(--foreground)] [&_h2]:mt-10 [&_h2]:mb-2 [&_strong]:text-[color:var(--foreground)]">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
