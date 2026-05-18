import LegalLayout from "./LegalLayout";
import { contact } from "@/data/contact";

export default function LGPD() {
  return (
    <LegalLayout
      title="LGPD"
      intro="Tratamos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
    >
      <h2>Encarregado de Dados</h2>
      <p>
        Para qualquer dúvida sobre o tratamento dos seus dados ou para exercer seus direitos,
        contate-nos: <strong>{contact.email}</strong>.
      </p>
      <h2>Direitos do titular</h2>
      <p>
        Confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação e
        revogação do consentimento podem ser solicitados a qualquer momento.
      </p>
      <h2>Base legal</h2>
      <p>
        O tratamento dos seus dados ocorre com base no consentimento informado no formulário e na
        execução de procedimentos preliminares relacionados ao contrato da experiência Ciranda.
      </p>
    </LegalLayout>
  );
}
