
import checkIcon from '../assets/CheckIcon.svg'
import heroImage from '../assets/hero_image.png'
import heroImageDesktop from '../assets/hero_image_desktop.png'
import type { PropsComponentsType } from './MobileVs4';

export function Hero({ landingData }: PropsComponentsType) {
  const width = window.visualViewport?.width || 0;

  const returnValor = () => {
    if(landingData?.valor_total) {
      const valor = landingData?.valor_total.replace('R$', '').replace(' ', '');
      const cents = valor.split(',')?.[1];
      const real = valor.split(',')?.[0];
      return <span>R$ <strong>{real}</strong>,{cents ? cents : '00'}</span>
    } else  return <span>R$ <strong>500</strong>,00</span>
  };

  return (
    <section className="section hero js-reveal" id="hero" aria-label="Hero">
      <div className="container">
        <img className="img_hero" src={width > 1278 ? heroImageDesktop : heroImage} />
        <div className='content'>

          <h2 className="regular">
            Não deixe sua venda <br />
            <span style={{ color: '#ff9b4c' }}>travar</span> nas <span style={{ color: '#ff9b4c' }}>certidões</span>
          </h2>

          <p className="regular p2">
            <strong>{landingData ? landingData.user_name : 'Leandro'}, </strong>
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
              {returnValor()}
              <span className="label">/serviço completo</span>
            </div>
            <span className="regular s1">90% dos proprietários escolhem esse acompanhamento.</span>
            <div className="actions">
              <a className="btn btn-primary" href="#">Acompanhar com a DNA</a>
              <span className="regular s1">Seguir por conta própria e assumir riscos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
