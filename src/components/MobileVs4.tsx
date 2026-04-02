import logoDna from '../assets/logo_dna.png'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Hero } from './Hero'
import { Problem } from './Problem'
import { CommonIssues } from './CommonIssues'
import { Benefits } from './Benefits'
import { Dashboard } from './Dashboard'
import { Testimonials } from './Testimonials'
import { Footer } from './Footer'
import { getUserData, type LandingPageCustomDataType } from '../api'
import { useEffect, useState } from 'react'
import ContainerPrice from './ContainerPrice/ContainerPrice'

export type PropsComponentsType = {
  landingData: LandingPageCustomDataType | null
  onOpenModal: () => void
}

export function MobileVs4() {
  const [landingData, setLandingData] = useState<LandingPageCustomDataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useScrollReveal(isLoading ? 'loading' : 'ready')
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);

  function onOpenModal() {
    setIsPriceModalOpen(true);
  };

  console.log("Dados API: ", landingData);

  const getData = async () => {
    try {
      const res = await getUserData();
      setLandingData(res);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData()
  }, []);

  if (isLoading) {
    return (
      <main className="mobile-vs4">
        <header className="header">
          <img className='logo_img' src={logoDna} />
          <button className="header-button" type="button" onClick={onOpenModal}>
            Garantir acompanhamento
          </button>
        </header>
        <div className="loading-state" aria-live="polite" aria-busy="true">
          <div className="loading-spinner" />
          <p className="loading-text">Carregando dados...</p>
        </div>
        <style>{`
          .loading-state {
            min-height: calc(100vh - 88px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
          }

          .loading-spinner {
            width: 44px;
            height: 44px;
            border-radius: 999px;
            border: 4px solid #d9e8e7;
            border-top-color: #01ab9d;
            animation: mobileVs4Spin 0.85s linear infinite;
          }

          .loading-text {
            margin: 0;
            color: #4b5b61;
            font-size: 14px;
            font-weight: 500;
          }

          @keyframes mobileVs4Spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </main>
    )
  };

  return (
    <main className="mobile-vs4">
      <ContainerPrice
        isOpen={isPriceModalOpen}
        onClose={() => setIsPriceModalOpen(false)}
        landingData={landingData}
      />
      <header className="header js-reveal">
        <img className='logo_img' src={logoDna} />
        <button className="header-button" type="button" onClick={onOpenModal}>
          Garantir acompanhamento
        </button>
        {/* <span className="mobile-vs4__menu">☰</span> */}
      </header>

      <Hero landingData={landingData} onOpenModal={onOpenModal} />
      <Problem onOpenModal={onOpenModal} />
      <CommonIssues onOpenModal={onOpenModal} />
      <Dashboard onOpenModal={onOpenModal} />
      <Benefits landingData={landingData} onOpenModal={onOpenModal} />
      <Testimonials onOpenModal={onOpenModal} />
      <Footer />
    </main>
  )
}
