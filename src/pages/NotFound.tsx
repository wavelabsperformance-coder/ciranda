import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página não encontrada</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <main className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <p className="font-serif text-[120px] leading-none text-[color:var(--primary)] md:text-[180px]">
            404
          </p>
          <h1 className="mt-4 font-serif text-3xl text-[color:var(--foreground)] md:text-4xl">
            Esse portal ainda não existe.
          </h1>
          <p className="mt-3 text-[color:var(--muted-foreground)]">
            A página que você procura foi movida ou nunca esteve aqui.
          </p>
          <Link to="/" className="btn-primary mt-8 inline-flex">
            Voltar para o início
          </Link>
        </div>
      </main>
    </>
  );
}
