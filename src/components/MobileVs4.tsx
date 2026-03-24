import logoDna from '../assets/logo_dna.png'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Hero } from './Hero'
import { Problem } from './Problem'
import { CommonIssues } from './CommonIssues'
import { Benefits } from './Benefits'
import { Dashboard } from './Dashboard'
import { Testimonials } from './Testimonials'
import { Footer } from './Footer'

export function MobileVs4() {
  useScrollReveal()

  return (
    <main className="mobile-vs4">
      <header className="header js-reveal">
        <img className='logo_img' src={logoDna} />
        <button className="header-button">Garantir acompanhamento</button>
        {/* <span className="mobile-vs4__menu">☰</span> */}
      </header>

      <Hero />
      <Problem />
      <CommonIssues />
      <Dashboard />
      <Benefits />
      <Testimonials />
      <Footer />
    </main>
  )
}
