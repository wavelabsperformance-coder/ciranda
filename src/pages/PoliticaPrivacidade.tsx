import LegalLayout from "./LegalLayout";
import { contact } from "@/data/contact";

export default function PoliticaPrivacidade() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      intro={`O ${contact.company} valoriza a privacidade dos seus dados e está comprometido com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).`}
    >
      <h2>Quais dados coletamos</h2>
      <p>
        Coletamos nome, e-mail e WhatsApp informados voluntariamente no formulário de contato, com
        a finalidade exclusiva de atendimento sobre a Ciranda e demais experiências oferecidas.
      </p>
      <h2>Como usamos seus dados</h2>
      <p>
        Os dados são utilizados para responder solicitações, enviar informações sobre as turmas e
        confirmações de pagamento. Não compartilhamos seus dados com terceiros sem consentimento.
      </p>
      <h2>Seus direitos</h2>
      <p>
        Você pode solicitar a qualquer momento o acesso, correção ou exclusão dos seus dados
        enviando um e-mail para <strong>{contact.email}</strong>.
      </p>
      <h2>Segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas para proteger seus dados pessoais contra
        acessos não autorizados.
      </p>
      <h2>Contato</h2>
      <p>
        {contact.company} · CNPJ {contact.cnpj} · {contact.address} · {contact.phone}.
      </p>
    </LegalLayout>
  );
}
