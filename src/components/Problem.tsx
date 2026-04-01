import alertDocIcon from '../assets/icons/AlertDocIcon.svg'
import alertIcon from '../assets/icons/AlertIcon.svg'
import clockIcon from '../assets/icons/ClockIcon.svg'
import docIcon from '../assets/icons/DocIcon.svg'
import dollarIcon from '../assets/icons/DollarIcon.svg'
import multiDocsIcon from '../assets/icons/MultiDocsIcon.svg'

const problemItems = [
  { title: 'Dados divergentes entre documentos', icon: docIcon },
  { title: 'Certidões vencidas ou incorretas', icon: clockIcon },
  { title: 'Solicitação de novos documentos no processo', icon: multiDocsIcon },
  { title: 'Custos extras com documentação', icon: dollarIcon },
  { title: 'Exigências do cartório que impedem a escritura', icon: alertIcon },
  { title: 'Falta de informações sobre o imóvel', icon: alertDocIcon },
]

type ProblemProps = {
  onOpenModal: () => void
}

export function Problem({ onOpenModal }: ProblemProps) {
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
            A maioria desses atrasos vem de <span>pendências em certidões</span>, muitas vezes
            <span> desconhecidas</span> pelos proprietários.
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
          <div className="problem__legend-item others">
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
                  <img src={item.icon} />
                </div>

                <p className="problem__card-text">{item.title}</p>
              </article>
            ))}
          </div>

          <button className="btn problem__cta" type="button" onClick={onOpenModal}>
            Quero evitar atrasos na minha venda
          </button>
        </div>
      </div>
    </section>
  )
}
