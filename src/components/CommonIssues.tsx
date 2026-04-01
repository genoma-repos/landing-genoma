import checkIcon from '../assets/CheckIcon.svg'
import Analista from '../assets/analista_image.png'

const issueSteps = [
  'Solicita e valida as certidões necessárias',
  'Trata exigências antes que virem atraso',
  'Mantém tudo pronto para a escritura',
]

const certificates = [
  { label: 'Certidão Negativa - Receita Federal', status: 'done' },
  { label: 'Certidão Negativa - PGFN', status: 'done' },
  { label: 'Certidão de Distribuição - TJ', status: 'done' },
  { label: 'Certidão de Matrícula', status: 'progress' },
] as const

type CommonIssuesProps = {
  onOpenModal: () => void
}

export function CommonIssues({ onOpenModal }: CommonIssuesProps) {
  return (
    <section
      className="section common-issues js-reveal"
      id="common-issues"
      aria-label="Problemas Comuns"
    >
      <div className="common-issues__content">
        <h2 className="common-issues__title">
          A DNA Imóveis <span>resolve essa etapa</span> <br />
          por você
        </h2>

        <p className="common-issues__description regular p2">
          Um <strong>analista acompanha sua venda do início à escritura</strong>,
          garantindo que todas as certidões sejam solicitadas, validadas
          <br />e <strong>mantidas em conformidade</strong>
          <br />
          ao longo do processo.
        </p>

        <div className='image-container'>

          <div className="common-issues__benefits">
            {issueSteps.map((item) => (
              <div className="common-issues__benefit" key={item}>
                <span>
                  <img className="checkicon" src={checkIcon} />
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="common-issues__image-card">
            <img
              className="common-issues__image"
              src={Analista}
              alt="Analista especializada acompanhando a venda"
            />

            <div className="common-issues__analyst">
              <div className="common-issues__avatar">A</div>

              <div className="common-issues__analyst-copy">
                <strong>Sua analista especializada</strong>
                <div className="common-issues__rating" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>

          <div className="common-issues__panel">
            <p className="common-issues__panel-title">
              <span>Mais de 20 certidões.</span> <br />
              Vários órgãos. Regras diferentes.
            </p>

            <div className="common-issues__certificate-list">
              {certificates.map((item) => (
                <div className="common-issues__certificate" key={item.label}>
                  <span className="common-issues__certificate-label">{item.label}</span>

                  {item.status === 'done' ? (
                    <img className="checkicon" src={checkIcon} />
                  ) : (
                    <span className="common-issues__status-badge">Em andamento</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="common-issues__cta-group">
          <p className="common-issues__cta-copy regular p2 bold">
            Você não precisa lidar
            com tudo isso sozinho.
          </p>

          <button className="btn common-issues__cta" type="button" onClick={onOpenModal}>
            Deixar a DNA resolver isso
          </button>
        </div>
      </div>
    </section>
  )
}
