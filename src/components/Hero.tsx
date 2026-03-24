
import checkIcon from '../assets/CheckIcon.svg'
import heroImage from '../assets/hero_image.png'

export function Hero() {
  return (
    <section className="section hero js-reveal" id="hero" aria-label="Hero">
      <div className="content">
        <img className="img_hero" src={heroImage} />
        <h2 className="regular">
          Não deixe sua venda <br />
          <span style={{ color: '#ff9b4c' }}>travar</span> nas <span style={{ color: '#ff9b4c' }}>certidões</span>
        </h2>
        <p className="regular p2">
          <strong>Leandro, </strong>
          essa é a etapa em que mais surgem
          problemas na venda,
          <strong> mesmo quando tudo parece certo.</strong>
        </p>
        <p className="regular p2">
          Quando isso acontece
          <strong> perto da escritura, </strong>
          o processo pode
          <strong> atrasar ou voltar etapas.</strong>
        </p>
        <div className="card">
          <h3>Acompanhamento completo</h3>

          <div className="item">
            <img className="checkicon" src={checkIcon} />
            <div className="label">
              <p className="regular p2">Sem burocracia</p>
              <span className="regular s1">Certidões corretas desde o início</span>
            </div>
          </div>

          <div className="item">
            <img className="checkicon" src={checkIcon} />
            <div className="label">
              <p className="regular p2">Tudo sob controle</p>
              <span className="regular s1">Prazos e documentos organizados</span>
            </div>
          </div>

          <div className="item">
            <img className="checkicon" src={checkIcon} />
            <div className="label">
              <p className="regular p2">Suporte humano</p>
              <span className="regular s1">Exigências resolvidas por especialista</span>
            </div>
          </div>

          <div className="item">
            <img className="checkicon" src={checkIcon} />
            <div className="label">
              <p className="regular p2">Até a escritura</p>
              <span className="regular s1">Orientação clara em cada etapa</span>
            </div>
          </div>

          <div>
            <span className="valor-estimado">Valor estimado</span>
            <div className="divider"></div>
          </div>

          <div className="valor-container">
            <span>R$ <strong>500</strong>,00</span>
            <span className="label">/serviço completo</span>
          </div>
          <span className="regular s1">90% dos proprietários escolhem esse acompanhamento.</span>
          <div className="actions">
            <a className="btn btn-primary" href="#">Acompanhar com a DNA</a>
            <span className="regular s1">Seguir por conta própria e assumir riscos</span>
          </div>
        </div>
      </div>
    </section>
  )
}
