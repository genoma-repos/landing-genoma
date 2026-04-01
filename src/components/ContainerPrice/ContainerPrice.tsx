import { useCallback, useEffect, useState } from 'react';
import svgPathsClosed from '../../assets/icons/ContainerPriceClosed/svg-wsf2upobez';
import svgPathsOpen from '../../assets/icons/ContainerPriceOpen/svg-5q14jniilq';
import './ContainerPrice.scss';

function Frame13() {
  return <div className="spacer" />;
}

type XIconProps = {
  onClose: () => void
}

function XIcon({ onClose }: XIconProps) {
  return (
    <div className="close-button-wrapper">
      <button
        type="button"
        className="close-icon-container"
        data-name="Icons"
        onClick={onClose}
        aria-label="Fechar modal"
      >
        <div className="close-icon" data-name="heroicons-outline/x-mark">
          <div className="close-icon-vector" data-name="Vector">
            <div className="close-icon-svg-wrapper">
              <svg fill="none" viewBox="0 0 13.8357 13.5">
                <path d={svgPathsOpen.p3edfec80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </button>
      <Frame13 />
    </div>
  );
}

type ContainerProps = {
  onClose: () => void
}

function Container({ onClose }: ContainerProps) {
  return (
    <div className="header-container" data-name="Container">
      <div className="header-content">
        <div className="header-inner">
          <XIcon onClose={onClose} />
          <p className="title">
            <span>{`Siga com `}</span>
            <span className="highlight">mais segurança</span>
            <span>
              {` `}
              <br aria-hidden="true" />
              {`e `}
            </span>
            <span className="highlight">evite atrasos</span>
            <span>{` na sua venda`}</span>
          </p>
          <p className="subtitle">
            Revise os detalhes abaixo e confirme o acompanhamento das certidões.
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="sale-info-icon" data-name="Icon">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPathsClosed.p33f8a400} id="Vector" stroke="var(--stroke-0, #CC8E00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsClosed.p37cb8680} id="Vector_2" stroke="var(--stroke-0, #CC8E00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsClosed.pf3a8600} id="Vector_3" stroke="var(--stroke-0, #CC8E00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsClosed.p1103640} id="Vector_4" stroke="var(--stroke-0, #CC8E00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="sale-info-header">
      <p className="sale-info-title">
        Sobre a sua venda
      </p>
      <Icon />
    </div>
  );
}

function Frame4() {
  return (
    <div className="stat-content">
      <p className="stat-number">2</p>
      <p className="stat-label">vendedores</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="stat-box sellers" data-name="Container">
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="stat-content">
      <p className="stat-number">12</p>
      <p className="stat-label">certidões necessárias</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="stat-box certificates" data-name="Container">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="sale-info-stats">
      <Container2 />
      <div className="arrow-icon" data-name="Icons">
        <div className="arrow-icon-inner" data-name="heroicons-outline/arrow-right">
          <div className="arrow-vector" data-name="Vector">
            <div className="arrow-svg-wrapper">
              <svg fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 16.5">
                <path d={svgPathsOpen.p1e8ea100} id="Vector" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="sale-info-container" data-name="Container">
      <Group2 />
      <Frame6 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="service-icon" data-name="Icon">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_3619)" id="Icon">
          <path d={svgPathsOpen.p11535600} id="Vector" stroke="var(--stroke-0, #01AB9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPathsOpen.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #01AB9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_3619">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="service-item">
      <Icon1 />
      <div className="service-text multiline">
        <p>Emissão das certidões obrigatórias</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="service-icon" data-name="Icon">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_3620)" id="Icon">
          <path d={svgPathsOpen.p11535600} id="Vector" stroke="var(--stroke-0, #01AB9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPathsOpen.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #01AB9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_3620">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="service-item">
      <Icon2 />
      <div className="service-text multiline">
        <p>Validação e conferência dos documentos</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="service-icon" data-name="Icon">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_3621)" id="Icon">
          <path d={svgPathsOpen.p11535600} id="Vector" stroke="var(--stroke-0, #01AB9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPathsOpen.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #01AB9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_3621">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="service-item centered">
      <Icon3 />
      <p className="service-text-single">
        Tratativa de exigências
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="service-icon" data-name="Icon">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_3622)" id="Icon">
          <path d={svgPathsOpen.p11535600} id="Vector" stroke="var(--stroke-0, #01AB9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPathsOpen.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #01AB9D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_3622">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="service-item centered">
      <Icon4 />
      <p className="service-text-single">
        Acompanhamento até a escritura
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="services-list">
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Group3() {
  return (
    <div className="services-header">
      <p className="services-title">
        Incluído no acompanhamento
      </p>
      <Frame11 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="analyst-icon" data-name="Icon">
      <svg fill="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3602)" id="Icon">
          <path d={svgPathsOpen.p13f48e00} id="Vector" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33306" />
          <path d={svgPathsOpen.p6e62c00} id="Vector_2" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33306" />
          <path d={svgPathsOpen.p2ea28c80} id="Vector_3" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33306" />
        </g>
        <defs>
          <clipPath id="clip0_1_3602">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="analyst-text" data-name="Paragraph">
      Uma analista da DNA acompanha todo o processo para evitar retrabalho e manter o andamento da venda.
    </div>
  );
}

function Container4() {
  return (
    <div className="analyst-info" data-name="Container">
      <Icon5 />
      <Paragraph />
    </div>
  );
}

function Frame14() {
  return (
    <div className="services-section">
      <Group3 />
      <Container4 />
    </div>
  );
}

// Collapsible section components
function Icon6() {
  return (
    <div className="item-icon" data-name="Icon">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPathsOpen.p2e7d1f80} id="Vector" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsOpen.p39e2f880} id="Vector_2" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66634 6H5.33301" id="Vector_3" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6663 8.66669H5.33301" id="Vector_4" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6663 11.3333H5.33301" id="Vector_5" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="item-icon" data-name="Icon">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPathsOpen.p39559880} id="Vector" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsOpen.p3427f480} id="Vector_2" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsOpen.p21527a40} id="Vector_3" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPathsOpen.p30e07e80} id="Vector_4" stroke="var(--stroke-0, #01988C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="discount-icon" data-name="Icon">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 15.9967 15.9967">
        <g clipPath="url(#clip0_1_3774)" id="Icon">
          <path d={svgPathsOpen.pb246e00} id="Vector" stroke="var(--stroke-0, #6B9539)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33306" />
          <path d={svgPathsOpen.p759f600} fill="var(--fill-0, #6B9539)" id="Vector_2" stroke="var(--stroke-0, #6B9539)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33306" />
        </g>
        <defs>
          <clipPath id="clip0_1_3774">
            <rect fill="white" height="15.9967" width="15.9967" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AlertBox() {
  return (
    <div className="alert-content">
      <div className="alert-icon" data-name="Icons">
        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path clipRule="evenodd" d={svgPathsOpen.p34da8c80} fill="var(--fill-0, #E33838)" fillRule="evenodd" id="Subtract" />
        </svg>
      </div>
      <p className="alert-text">
        Essa é a etapa que mais gera impedimentos na escritura.
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="cta-buttons">
      <button className="cta-button" data-name="primary/large">
        <div className="cta-button-text">
          <p>Confirmar acompanhamento</p>
        </div>
      </button>
      <p className="cta-note">
        O boleto será enviado para o seu e-mail após a confirmação.
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="cta-section">
      <AlertBox />
      <Frame />
    </div>
  );
}

type ContainerPriceProps = {
  isOpen: boolean
  onClose: () => void
}

export default function ContainerPrice({ isOpen, onClose }: ContainerPriceProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const handleCloseModal = useCallback(() => {
    setIsDetailsOpen(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handleCloseModal, isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="container-price-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Detalhes de acompanhamento da venda"
      onClick={handleCloseModal}
    >
      <div className="container-price-modal__panel" onClick={(event) => event.stopPropagation()}>
        <div className="container-price" data-name="Container Price">
          <Container onClose={handleCloseModal} />
          <Container1 />
          <Frame14 />


          {/* Collapsible Section */}
          <div className="price-section">

            <div className="divider-line" />
            {/* Header - Clickable */}
            <button
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="price-header"
            >
              <p className="price-header-text">
                Composição do valor
              </p>
              <div className={`chevron-wrapper ${isDetailsOpen ? '' : 'rotated'}`}>
                <div className="chevron-icon" data-name="Icons">
                  <div className="chevron-inner" data-name="heroicons-mini/chevron-down">
                    <div className="chevron-vector" data-name="Vector (Stroke)">
                      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                        <path clipRule="evenodd" d={svgPathsClosed.p2bf3180} fill="var(--fill-0, #5D696F)" fillRule="evenodd" id="Vector (Stroke)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Collapsible Content */}
            <div className={`price-content ${isDetailsOpen ? 'open' : 'closed'}`}>
              <div className="price-details">

                {/* Certidões */}
                <div className="price-item">
                  <div className='item-row'>
                    <div className="item-details">
                      <Icon6 />
                      Certidões
                    </div>
                    <div className="item-price">
                      R$ 800,00
                    </div>
                  </div>
                  <p className="item-description">
                    Valores definidos por órgãos públicos
                  </p>
                </div>


                {/* Acompanhamento */}
                <div className="price-item">
                  <div className='item-row'>
                    <div className="item-details">
                      <Icon7 />
                      Acompanhamento da DNA
                    </div>
                    <div className="item-price">
                      R$ 300,00
                    </div>
                  </div>
                  <p className="item-description">
                    Gestão completa das certidões até a escritura
                  </p>
                </div>

                {/* Desconto */}
                <div className="discount-box">
                  <div className="discount-label">
                    <Icon8 />
                    <p>Desconto exclusivo</p>
                  </div>
                  <div className="discount-value">
                    - R$ 190,00
                  </div>
                </div>


              </div>
            </div>
            <div className="divider-line" />

            {/* Total - Always visible */}
            <div className="price-total">
              <p className="total-label">Total</p>
              <p className="total-value">R$ 887,60</p>
            </div>

            {/* Discount Warning */}
            <div className="discount-warning">
              <div className="warning-icon">
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                  <path d={svgPathsOpen.p27002400} id="Vector" stroke="var(--stroke-0, #FF9B4C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
              <p className="warning-text">
                O desconto é exclusivo para este momento da venda. Após essa etapa, o serviço pode ser contratado pelo valor integral.
              </p>
            </div>

            <div className="divider-line" />
          </div>

          <Frame18 />
        </div>
      </div>
    </div >
  );
}
