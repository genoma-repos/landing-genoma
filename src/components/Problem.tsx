const problemItems = [
  { title: 'Dados divergentes entre documentos', icon: 'DocIcon.svg' },
  { title: 'Certidões vencidas ou incorretas', icon: 'ClockIcon.svg' },
  { title: 'Solicitação de novos documentos no processo', icon: 'MultiDocsIcon.svg' },
  { title: 'Custos extras com documentação', icon: 'DollarIcon.svg' },
  { title: 'Exigências do cartório que impedem a escritura', icon: 'AlertIcon.svg' },
  { title: 'Falta de informações sobre o imóvel', icon: 'AlertDocIcon.svg' },
]

export function Problem() {
  return (
    <section className="section problem js-reveal" id="problem" aria-label="Problema">
      <div className="problem__content">
        <div className="problem__headline">
          <div className="problem__stat">
            <span className="problem__stat-value">67</span>
            <span className="problem__stat-symbol">%</span>
          </div>

          <p className="problem__stat-copy">
            dos <span>atrasos</span> <br />
            na venda
            <br />
            acontecem aqui
          </p>
        </div>

        <div className="problem__intro">
          <p className="regular p1">
            A maioria desses atrasos vem de pendências em certidões, muitas vezes
            desconhecidas pelos proprietários.
          </p>

          <p className="p1 problem__highlight">
            <span>Evite </span>
            que isso aconteça na sua venda.
          </p>
        </div>

        <div className="problem__chart">
          <div className="problem__chart-fill">67%</div>
          <div className="problem__chart-empty">33%</div>
          <div className="problem__legend-item">
            <span className="problem__legend-dot problem__legend-dot--primary" />
            <span>Certidões</span>
          </div>
          <div className="problem__legend-item">
            <span className="problem__legend-dot problem__legend-dot--secondary" />
            <span>Outras etapas</span>
          </div>
        </div>

        <div className="problem__details">
          <p className="regular p1">
            Mesmo quando parece
            <br />
            que está tudo certo, surgem problemas como:
          </p>

          <div className="problem__cards">
            {problemItems.map((item) => (
              <article className="problem__card" key={item.title}>
                <div className="problem__icon">
                  <img src={"src/assets/icons/" + item.icon} />
                </div>

                <p className="problem__card-text">{item.title}</p>
              </article>
            ))}
          </div>

          <button className="btn problem__cta" type="button">
            Quero evitar atrasos na minha venda
          </button>
        </div>
      </div>
    </section>
  )
}
