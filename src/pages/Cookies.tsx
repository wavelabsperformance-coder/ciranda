import LegalLayout from "./LegalLayout";

export default function Cookies() {
  return (
    <LegalLayout
      title="Política de Cookies"
      intro="Utilizamos cookies para melhorar sua experiência de navegação e entender como nosso site é utilizado."
    >
      <h2>O que são cookies</h2>
      <p>Pequenos arquivos armazenados no seu navegador que permitem reconhecer suas preferências.</p>
      <h2>Tipos de cookies que utilizamos</h2>
      <p>
        <strong>Essenciais:</strong> necessários para o funcionamento básico do site.{" "}
        <strong>Analíticos:</strong> para entender o uso do site e melhorar a experiência.
      </p>
      <h2>Gerenciamento</h2>
      <p>
        Você pode desativar cookies nas configurações do seu navegador. Isso pode limitar algumas
        funcionalidades.
      </p>
    </LegalLayout>
  );
}
