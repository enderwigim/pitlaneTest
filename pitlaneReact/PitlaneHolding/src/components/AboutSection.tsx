import { useEffect, useState, useRef } from 'react'
import backgroundImage from '../assets/img/background4.png'

function AboutSection(): React.JSX.Element {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="relative overflow-hidden font-orbitron flex items-center justify-center px-6"
      style={{ minHeight: 'calc(100vh - 7rem)' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-[-20] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      />

      {/* Overlay layer */}
      <div className="absolute inset-0 bg-[var(--color-primary)]/80 z-[-10]" />

      {/* Content */}
      <div
        className={`
          max-w-4xl mx-auto text-center text-[var(--color-text-muted)] transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-10 drop-shadow-[0_0_10px_var(--color-primary-neon)]">
          Sobre Nosotros
        </h2>

        <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-10 px-4">
          En Pitlane Holding, trabajamos para construir un futuro en el que la inversión
          combine innovación, sostenibilidad y visión estratégica. Nuestro
          compromiso es desarrollar proyectos sólidos, bien estructurados y
          enfocados en el largo plazo, aprovechando tecnología avanzada y análisis
          fundamentado.
          <br /><br />
          Queremos ser un punto de referencia para quienes buscan oportunidades
          de inversión transparentes, responsables y con un potencial de
          crecimiento real. Este texto es provisional, pero representa la esencia
          de lo que queremos transmitir: claridad, futuro y propósito.
          <br /><br />
          Aquí podrás incluir la historia de la compañía, los valores que la
          inspiran, los pilares que sostenienen su visión, y cómo Pitlane Holding
          se diferencia en un mercado en constante evolución.
        </p>

        <p className="text-md md:text-lg opacity-80 mb-12 px-6">
          Más adelante podrás expandir esta sección con datos concretos, miembros
          del equipo, líneas de negocio, hitos conseguidos y una visión más profunda
          sobre el proyecto. Esta estructura ya está preparada para crecer contigo.
        </p>

        <div
          className={`mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700`}>
          <a
            href="#contact"
            className="px-10 py-4 rounded-lg border-2 border-[var(--color-primary-neon)]
                      text-[var(--color-primary-neon)] font-semibold shadow-lg
                      hover:bg-[var(--color-primary-neon)] hover:text-[var(--color-primary)]
                      hover:scale-105 transition-all duration-300 inline-block"
          >
            Contactanos
          </a>
          <a
            href="#download"
            className="px-10 py-4 rounded-lg border-2 border-[var(--color-primary-neon)]
                      text-[var(--color-primary-neon)] font-semibold shadow-lg
                      hover:bg-[var(--color-primary-neon)] hover:text-[var(--color-primary)]
                      hover:scale-105 transition-all duration-300 inline-block"
          >
            Descargar Projecto
          </a>
      </div>
    </div>


      
    </section>
  )
}

export default AboutSection