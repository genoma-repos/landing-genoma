const stats = [
  { value: '5', label: 'Certidões solicitadas' },
  { value: '3', label: 'Concluídas' },
  { value: '1', label: 'Em andamento' },
  { value: '1', label: 'Pendente' },
]

const timeline = [
  { title: 'Solicitação de certidões', date: '12/03', status: 'done' },
  { title: 'Análise documental', date: '14/03', status: 'done' },
  { title: 'Certidão de ônus reais', date: '15/03', status: 'done' },
  { title: 'Certidão negativa de débitos', date: '18/03', status: 'active' },
  { title: 'Validação final para escritura', date: '—', status: 'pending' },
] as const

type DashboardProps = {
  onOpenModal: () => void
}

export function Dashboard({ onOpenModal }: DashboardProps) {
  return (
    <section className="section dashboard js-reveal" id="dashboard" aria-label="Painel Genoma">
      <div className="dashboard__content">
        <div className="title-container">
          <h2 className="dashboard__title">
            DNA <span>resolve</span>
            <br />
            Genoma <span>mostra</span>
          </h2>

          <p className="dashboard__description regular p2">
            A DNA Imóveis cuida das certidões. Você acompanha cada etapa
            <br />
            em tempo real pelo Genoma.
            <br />
            Tudo no seu painel, com total visibilidade.
          </p>
        </div>

        <div className="dashboard__panel">
          <div className="dashboard__panel-header">
            <strong>Painel Genoma</strong>

            <div className="dashboard__panel-dots" aria-hidden="true">
              <span className="is-active" />
              <span />
              <span />
            </div>
          </div>

          <div className="dashboard__stats">
            {stats.map((item) => (
              <article className="dashboard__stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <div className="dashboard__timeline">
            <p className="dashboard__timeline-title">Linha do tempo</p>

            <div className="dashboard__timeline-list">
              {timeline.map((item, index) => (
                <article className="dashboard__timeline-item" key={item.title}>
                  <div className="dashboard__timeline-marker">
                    {item.status === 'active' ? (
                      <span className="dashboard__timeline-icon dashboard__timeline-icon--active" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                      </span>
                    ) : (
                      <span className={`dashboard__timeline-icon dashboard__timeline-icon--${item.status}`} />
                    )}
                    {index < timeline.length - 2 ? <span className={`dashboard__timeline-line ${item.status === 'pending' ? 'is-muted' : ''}`} /> : null}
                  </div>

                  <div className="dashboard__timeline-copy">
                    <strong className={item.status === 'active' ? 'is-active' : ''}>{item.title}</strong>
                    <span>{item.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <button className="btn dashboard__cta" type="button" onClick={onOpenModal}>
          Deixar a DNA resolver isso
        </button>

      </div>
    </section>
  )
}
