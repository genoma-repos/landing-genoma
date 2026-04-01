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

export type PropsComponentsType = {
  landingData: LandingPageCustomDataType | null
  onOpenModal: () => void
}

type MobileVs4Props = {
  onOpenModal: () => void
}

export function MobileVs4({ onOpenModal }: MobileVs4Props) {
  useScrollReveal()
  const [landingData, setLandingData] = useState<LandingPageCustomDataType | null>(null);

  console.log("Dados API: ", landingData);

  const getData = async () => {
   const res = await getUserData();
    setLandingData(res);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getData()
  },[])

  return (
    <main className="mobile-vs4">
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
