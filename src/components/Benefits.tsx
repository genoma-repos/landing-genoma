const costItems = [
  {
    title: 'Emissão das certidões',
    value: 'R$ 700,00',
    description: 'Pagamentos destinados aos órgãos emissores (cartórios e serviços oficiais)',
    icon: 'FileIcon.svg',
  },
  {
    title: 'Acompanhamento especializado',
    value: 'R$ 300,00',
    description: 'Gestão completa da etapa, validação de documentos e tratativa de exigências',
    icon: 'UsersGroupIcon.svg',
  },
]

const highlights = [
  'Você acompanha tudo pelo Genoma.',
  'Sem surpresas no processo.',
]

export function Benefits() {
  return (
    <section className="section benefits js-reveal" id="benefits" aria-label="Benefícios">
      <div className="benefits__content">
        <div className="benefits__intro">
          <h2 className="benefits__title">
            Pequenos<span> erros</span> podem gerar <br />
            grandes<span> custos</span>
          </h2>

          <p className="benefits__description regular p2">
            Alguns ajustes podem
            <br />
            <strong>custar milhares de reais. </strong>
            <br />
            <strong>Começar certo aqui evita atraso depois.</strong>
          </p>
        </div>

        <div className="benefits__card">
          <div className="benefits__summary">
            <p className="benefits__eyebrow">Serviço completo</p>

            <h3 className="benefits__summary-title">
              Acompanhamento <span>completo</span> <br />
              até a escritura
            </h3>

            <div className="benefits__price">
              <span className="benefits__currency">R$</span>
              <strong>1.000</strong>
              <span className="benefits__asterisk">*</span>
              <span className="benefits__cents">,00</span>
            </div>

            <span className="benefits__price-note">*Valor estimado</span>

            <img className="benefits__seal" src="src/assets/selo_dna.png" />
          </div>

          <div className="benefits__details">
            <p className="benefits__details-title">Como esse valor é composto:</p>

            <div className="benefits__cost-list">
              {costItems.map((item) => (
                <article className="benefits__cost-item" key={item.title}>
                  <div className={`benefits__cost-icon`}>
                    <img src={"src/assets/icons/" + item.icon} />
                  </div>

                  <div className="benefits__cost-copy">
                    <div className="benefits__cost-header">
                      <strong>{item.title}</strong>
                      <span>{item.value}</span>
                    </div>

                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <span className="benefits__divider" />

            <p className="benefits__support-copy">
              Prazos sob controle e exigências resolvidas antes de atrasar sua venda.
            </p>
            <p className="benefits__highlight">Mais segurança, menos imprevistos.</p>

            <div className="benefits__cta-group">
              <button className="btn benefits__cta" type="button">
                Garantir acompanhamento DNA
              </button>

              <p className="benefits__cta-note">
                Muitos já garantem esse acompanhamento. <br />Garanta o seu.
              </p>
            </div>
          </div>
        </div>

        <div className="benefits__highlights">
          {highlights.map((item) => (
            <div className="benefits__highlight-item" key={item}>
              <span className="benefits__highlight-check" aria-hidden="true">
                ✓
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
