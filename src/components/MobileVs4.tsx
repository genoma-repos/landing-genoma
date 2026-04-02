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
  useScrollReveal()
  const [landingData, setLandingData] = useState<LandingPageCustomDataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getData()
  },[])

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
      {isLoading ? (
        <section
          className="js-reveal"
          aria-label="Carregando benefícios"
          aria-busy="true"
          style={{ padding: '24px 16px' }}
        >
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div
              style={{
                width: '60%',
                height: 24,
                borderRadius: 8,
                background: 'linear-gradient(90deg, #eceff1 25%, #f6f8f9 40%, #eceff1 55%)',
                backgroundSize: '200% 100%',
                animation: 'mobileVs4SkeletonShimmer 1.2s linear infinite'
              }}
            />
            <div
              style={{
                width: '100%',
                height: 88,
                marginTop: 16,
                borderRadius: 12,
                background: 'linear-gradient(90deg, #eceff1 25%, #f6f8f9 40%, #eceff1 55%)',
                backgroundSize: '200% 100%',
                animation: 'mobileVs4SkeletonShimmer 1.2s linear infinite'
              }}
            />
            <div
              style={{
                width: '100%',
                height: 88,
                marginTop: 12,
                borderRadius: 12,
                background: 'linear-gradient(90deg, #eceff1 25%, #f6f8f9 40%, #eceff1 55%)',
                backgroundSize: '200% 100%',
                animation: 'mobileVs4SkeletonShimmer 1.2s linear infinite'
              }}
            />
          </div>
        </section>
      ) : (
        <Benefits landingData={landingData} onOpenModal={onOpenModal} />
      )}
      <Testimonials onOpenModal={onOpenModal} />
      <Footer />

      <style>{`
        @keyframes mobileVs4SkeletonShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </main>
  )
}
