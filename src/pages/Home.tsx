import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Experiencia from "@/sections/Experiencia";
import Vivencias from "@/sections/Vivencias";
import Condutora from "@/sections/Condutora";
import Jornada from "@/sections/Jornada";
import Espaco from "@/sections/Espaco";
import Depoimentos from "@/sections/Depoimentos";
import Investimento from "@/sections/Investimento";
import FAQ from "@/sections/FAQ";
import Formulario from "@/sections/Formulario";
import CtaFinal from "@/sections/CtaFinal";
import { contact } from "@/data/contact";

export default function Home() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: contact.company,
    description:
      "Ciranda — Edição Dona de Mim. Uma travessia feminina sob a Lua Azul na Fazenda Saint Germain.",
    address: { "@type": "PostalAddress", streetAddress: contact.address },
    telephone: contact.phone,
    email: contact.email,
    image: "/images/hero.jpg",
  };
  return (
    <>
      <Helmet>
        <title>Ciranda — Edição Dona de Mim · Travessia feminina sob a Lua Azul</title>
        <meta
          name="description"
          content="Uma experiência feminina de desbloqueio, expansão e travessia emocional, conduzida por Juliana Prado na Fazenda Saint Germain sob a Lua Azul. Vagas limitadas."
        />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Ciranda — Travessia feminina sob a Lua Azul" />
        <meta
          property="og:description"
          content="Edição Dona de Mim · 30 de Maio · Fazenda Saint Germain · Vagas limitadas."
        />
        <meta property="og:image" content="/images/hero.jpg" />
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Experiencia />
        <Vivencias />
        <Condutora />
        <Jornada />
        <Espaco />
        <Depoimentos />
        <Investimento />
        <FAQ />
        <Formulario />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
