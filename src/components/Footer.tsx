import logoDna from '../assets/logo_dna.png'
import shieldIcon from '../assets/icons/ShieldIcon.svg'

export function Footer() {
  return (
    <section className="section footer js-reveal" id="footer" aria-label="Call to action final">
      <div className="footer__content">
        <img className="footer__logo" src={logoDna} alt="DNA Imóveis" />

        <div className="footer__badge">
          <span className="footer__badge-icon" aria-hidden="true">
            <img src={shieldIcon} />
          </span>

          <strong>Proteção total nas certidões</strong>
        </div>
      </div>
    </section>
  )
}
