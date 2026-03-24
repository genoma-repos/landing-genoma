import { useState } from 'react'

import quotesIcon from '../assets/icons/QuotesIcon.svg'
import { figmaImages } from '../constants/figmaAssets'

const testimonials = [
  {
    name: 'Sebastian',
    location: 'Ipanema, RJ',
    text:
      '"Morava no exterior enquanto a venda acontecia. A equipe da DNA gerenciou tudo remotamente sem precisar da minha presença física. Incrível a dedicação e transparência."',
    avatar: figmaImages.sebastian,
  },
  {
    name: 'Miguel',
    location: 'Copacabana, RJ',
    text:
      '"Processo rápido e claro. Em poucos dias tudo resolvido. A equipe cuidou de cada detalhe e eu fui informado em cada etapa. Não precisei me preocupar com nada."',
    avatar: figmaImages.miguel,
  },
  {
    name: 'Elisa & Raquel',
    location: 'Copacabana, RJ',
    text:
      '"Suporte completo do início ao fim. Tínhamos muito medo da burocracia, mas a DNA simplificou tudo. Escritura assinada em tempo recorde, sem nenhuma surpresa."',
    avatar: figmaImages.elisaRaquel,
  },
] as const

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  return (
    <section className="section testimonials js-reveal" id="testimonials" aria-label="Depoimentos">
      <div className="testimonials__content">
        <div className="testimonials__intro">
          <h2 className="testimonials__title">
            Quem já passou por essa
            <br />
            etapa <span>preferiu não arriscar</span>
          </h2>

          <p className="testimonials__description regular p2">
            Eles deixaram essa etapa com a DNA e seguiram com a venda sem preocupação.
          </p>
        </div>

        <div className="testimonials__carousel">
          <div className="testimonials__viewport">
            <div
              className="testimonials__track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((item) => (
                <article className="testimonials__card" key={item.name}>
                  <div className="testimonials__quote-icon" aria-hidden="true">
                    <img src={quotesIcon} />
                  </div>

                  <div className="testimonials__stars" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <blockquote className="testimonials__quote">{item.text}</blockquote>

                  <footer className="testimonials__author">
                    <img className="testimonials__avatar" src={item.avatar} alt={item.name} />

                    <div className="testimonials__author-copy">
                      <strong>{item.name}</strong>
                      <span>{item.location}</span>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>

          <div className="testimonials__controls">
            <button
              className="testimonials__arrow"
              type="button"
              onClick={goToPrevious}
              aria-label="Ver depoimento anterior"
            >
              ‹
            </button>

            <div className="testimonials__dots">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  className={`testimonials__dot ${index === activeIndex ? 'is-active' : ''}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ver depoimento de ${item.name}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>

            <button
              className="testimonials__arrow"
              type="button"
              onClick={goToNext}
              aria-label="Ver próximo depoimento"
            >
              ›
            </button>
          </div>
        </div>

        <div className="testimonials__cta-group">
          <p className="testimonials__cta-copy regular p2">
            Essa etapa pode travar sua venda. <br />Você pode seguir com mais segurança.
          </p>

          <button className="btn testimonials__cta" type="button">
            Garantir acompanhamento e evitar atrasos
          </button>
        </div>
      </div>
    </section>
  )
}
