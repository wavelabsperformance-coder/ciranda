import LegalLayout from "./LegalLayout";

export default function TermosUso() {
  return (
    <LegalLayout
      title="Termos de Uso"
      intro="Ao utilizar nosso site e contratar a experiência Ciranda, você concorda com os termos abaixo."
    >
      <h2>Inscrições</h2>
      <p>
        As inscrições são confirmadas mediante pagamento e respeitam a ordem cronológica de
        confirmação. As vagas são limitadas e podem se encerrar antes da data prevista.
      </p>
      <h2>Cancelamento</h2>
      <p>
        Solicitações de cancelamento devem ser feitas com no mínimo 15 dias de antecedência para
        análise de reembolso parcial. Não há reembolso em caso de não comparecimento.
      </p>
      <h2>Responsabilidades</h2>
      <p>
        A participação na experiência é de inteira responsabilidade da participante. Recomendamos
        consultar profissional de saúde em caso de condições clínicas específicas.
      </p>
      <h2>Imagem</h2>
      <p>
        Durante a vivência poderão ser realizados registros fotográficos. O uso de imagens ocorre
        apenas mediante autorização individual.
      </p>
    </LegalLayout>
  );
}
