import { useEffect, useState, useRef } from 'react'
import backgroundImage from '../../assets/img/background3.png'

function AboutSection(): React.JSX.Element {
  const [visible, setVisible] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(false)
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

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => setButtonsVisible(true), 200)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="relative overflow-hidden font-orbitron flex items-center justify-center px-6"
      style={{ minHeight: 'calc(100vh - 7rem)' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-[-20] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[var(--color-primary)]/80 z-[-10]" />

      {/* Content */}
      <div
        className={`
          max-w-5xl mx-auto text-center text-[var(--color-text-muted)] transition-all duration-700
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        {/* Paragraph 1 */}
        <p className="text-md md:text-lg text-[var(--color-text-muted)] px-4 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed aliquet felis. Fusce vestibulum felis blandit convallis maximus. In
          laoreet, augue vitae tempor tristique, quam justo euismod nibh, a mattis mi eros sed augue. Cras felis urna, posuere eu aliquet in,
          venenatis feugiat justo. In eget sodales mauris, quis tristique tellus. In et sapien et tellus faucibus consequat sit amet sit amet elit.
          <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed aliquet felis. Fusce vestibulum felis blandit convallis maximus. In
          laoreet, augue vitae tempor tristique, quam justo euismod nibh, a mattis mi eros sed augue. Cras felis urna, posuere eu aliquet in,
          venenatis feugiat justo. In eget sodales mauris, quis tristique tellus. In et sapien et tellus faucibus consequat sit amet sit amet elit.

        </p>

        {/* Paragraph 2 */}
        <p className="text-sm md:text-md text-[var(--color-text-muted)] px-4 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed aliquet felis. Fusce vestibulum felis blandit convallis maximus. In
          laoreet, augue vitae tempor tristique, quam justo euismod nibh, a mattis mi eros sed augue. Cras felis urna, posuere eu aliquet in,
          venenatis feugiat justo. In eget sodales mauris, quis tristique tellus. In et sapien et tellus faucibus consequat sit amet sit amet elit.
        </p>


        {/* Buttons */}
        <div
          className={`
            mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700
            ${buttonsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
          `}
        >
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
            Descargar Proyecto
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
