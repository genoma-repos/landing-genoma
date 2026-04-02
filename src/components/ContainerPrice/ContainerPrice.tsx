import { useCallback, useEffect, useState } from 'react';
import {
  AlertIcon,
  AnalystIcon,
  ArrowIcon,
  ChevronIcon,
  CloseIconButton,
  DiscountIcon,
  ItemCertificatesIcon,
  ItemDnaIcon,
  SaleInfoIcon,
  ServiceIcon,
  WarningIcon
} from './components/Icons';
import './ContainerPrice.scss';
import { type LandingPageCustomDataType } from '../../api';

type ContainerPriceProps = {
  isOpen: boolean
  onClose: () => void
  landingData: LandingPageCustomDataType | null
};

export default function ContainerPrice({ isOpen, onClose, landingData }: ContainerPriceProps) {
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
  };

  const returnQuantCertidoes = () => {
    if (landingData?.certidoes) {
      const certidoes = landingData.certidoes.length
      const value = landingData.quant_vendedores && certidoes ? certidoes * landingData.quant_vendedores : null;
      return value || 12;
    } else return 12;
  };

  const returnServicos = () => {
    const valorCertidoes = landingData?.servicos?.find(e => e.title === 'Emissão das certidões')?.value || 'R$ 400,00';
    const valorAcompanhamento = landingData?.servicos?.find(e => e.title === 'Acompanhamento especializado')?.value || 'R$ 100,00';
    const valorAverbacao = landingData?.servicos?.find(e => e.title === 'Averbação de documentos')?.value || 'R$ 0,00';
    const outros = landingData?.servicos?.filter(e => e.title !== 'Emissão das certidões' && e.title !== 'Acompanhamento especializado' && e.title !== 'Averbação de documentos') || [];

    return <div className="price-details">

      <div className="price-item">
        <div className="item-row">
          <div className="item-details">
            <ItemCertificatesIcon />
            Certidões
          </div>
          <div className="item-price">{valorCertidoes}</div>
        </div>
        <p className="item-description">Valores definidos por órgãos públicos</p>
      </div>

      {valorAverbacao !== 'R$ 0,00' &&
        <div className="price-item">
          <div className="item-row">
            <div className="item-details">
              <ItemCertificatesIcon />
              Averbação de documentos
            </div>
            <div className="item-price">{valorAverbacao}</div>
          </div>
          <p className="item-description">Serviço de averbação da venda no registro do imóvel</p>
        </div>
      }

      {outros.map((servico) => (
        <div key={servico.title} className="price-item">
          <div className="item-row">
            <div className="item-details">
              <ItemCertificatesIcon />
              {servico.title}
            </div>
            <div className="item-price">{servico.value}</div>
          </div>
          <p className="item-description">{servico.description}</p>
        </div>
      ))}

      <div className="price-item">
        <div className="item-row">
          <div className="item-details">
            <ItemDnaIcon />
            Acompanhamento da DNA
          </div>
          <div className="item-price">{valorAcompanhamento}</div>
        </div>
        <p className="item-description">Gestão completa das certidões até a escritura</p>
      </div>

      <div className="discount-box">
        <div className="discount-label">
          <DiscountIcon />
          <p>Desconto exclusivo</p>
        </div>
        <div className="discount-value">- {landingData?.valor_desconto}</div>
      </div>

    </div>
  };

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
          <div className="header-container" data-name="Container">
            <div className="header-content">
              <div className="header-inner">
                <CloseIconButton onClose={handleCloseModal} />
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

          <div className="sale-info-container" data-name="Container">
            <div className="sale-info-header">
              <p className="sale-info-title">Sobre a sua venda</p>
              <SaleInfoIcon />
            </div>
            <div className="sale-info-stats">
              <div className="stat-box sellers" data-name="Container">
                <div className="stat-content">
                  <p className="stat-number">{landingData?.quant_vendedores || 1}</p>
                  <p className="stat-label">vendedor{landingData?.quant_vendedores !== 1 ? 'es' : ''}</p>
                </div>
              </div>
              <ArrowIcon />
              <div className="stat-box certificates" data-name="Container">
                <div className="stat-content">
                  <p className="stat-number">{returnQuantCertidoes()}</p>
                  <p className="stat-label">certidões necessárias</p>
                </div>
              </div>
            </div>
          </div>

          <div className="services-section">
            <div className="services-header">
              <p className="services-title">Incluído no acompanhamento</p>
              <div className="services-list">
                <div className="service-item">
                  <ServiceIcon clipId="clip0_1_3619" />
                  <div className="service-text multiline">
                    <p>Emissão das certidões obrigatórias</p>
                  </div>
                </div>
                <div className="service-item">
                  <ServiceIcon clipId="clip0_1_3620" />
                  <div className="service-text multiline">
                    <p>Validação e conferência dos documentos</p>
                  </div>
                </div>
                <div className="service-item centered">
                  <ServiceIcon clipId="clip0_1_3621" />
                  <p className="service-text-single">Tratativa de exigências</p>
                </div>
                <div className="service-item centered">
                  <ServiceIcon clipId="clip0_1_3622" />
                  <p className="service-text-single">Acompanhamento até a escritura</p>
                </div>
              </div>
            </div>

            <div className="analyst-info" data-name="Container">
              <AnalystIcon />
              <div className="analyst-text" data-name="Paragraph">
                Uma analista da DNA acompanha todo o processo para evitar retrabalho e manter o andamento da venda.
              </div>
            </div>
          </div>

          <div className="price-section">
            <div className="divider-line" />
            <button
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="price-header"
            >
              <p className="price-header-text">Composição do valor</p>
              <div className={`chevron-wrapper ${!isDetailsOpen ? '' : 'rotated'}`}>
                <ChevronIcon />
              </div>
            </button>

            <div className={`price-content ${isDetailsOpen ? 'open' : 'closed'}`}>
              {returnServicos()}
            </div>

            <div className="divider-line" />

            <div className="price-total">
              <p className="total-label">Total</p>
              <p className="total-value">{landingData?.valor_total}</p>
            </div>

            <div className="discount-warning">
              <WarningIcon />
              <p className="warning-text">
                O desconto é exclusivo para este momento da venda. Após essa etapa, o serviço pode ser contratado pelo valor integral.
              </p>
            </div>

            <div className="divider-line" />
          </div>

          <div className="cta-section">
            <div className="alert-content">
              <AlertIcon />
              <p className="alert-text">
                Essa é a etapa que mais gera impedimentos na escritura.
              </p>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
