import { useEffect, useState, useRef } from 'react'
import logo from '../assets/img/logo_noBG.png'
import backgroundImage from '../assets/img/background1.png'
import Lenis from '@studio-freight/lenis'

function HeroSection(): React.JSX.Element {
  const [displayedText, setDisplayedText] = useState('')
  const indexRef = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const fullText = 'Inversión con visión de futuro'
  const [buttonsVisible, setButtonsVisible] = useState(false)


  useEffect(() => {
    const lenis = new Lenis()
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

      // for anchor links
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href')!) as HTMLElement | null
      if (target) lenis.scrollTo(target, {
        offset: -120  // adjust this to match your navbar height
      })
    })
  })
  return () => lenis.destroy()
  }, [])

  useEffect(() => {
    const typeNext = () => {
      if (indexRef.current < fullText.length) {
        setDisplayedText(fullText.slice(0, indexRef.current + 1))
        indexRef.current++
        timeoutRef.current = setTimeout(typeNext, 25)
      } else {
        // Finished typing → fade in buttons
        setTimeout(() => setButtonsVisible(true), 200) 
      }
    }

    typeNext()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])


  return (
    <>
    <main
      className="relative overflow-hidden font-orbitron flex flex-col items-center justify-center"
      style={{ minHeight: 'calc(100vh - 7rem)' }}
    >
      {/* Fondo con imagen y parallax fijo */}
      <div
        className="absolute inset-0 z-[-20] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url("${backgroundImage}")`
        }}
      />

      {/* Capa azul con transparencia encima de la imagen */}
      <div className="absolute inset-0 bg-[var(--color-primary)]/70 z-[-10]" />

      {/* Contenido */}
      <div className="relative z-10 text-[var(--color-text-muted)] text-center px-4">
        <img
          className="h-28 sm:h-28 md:h-36 lg:h-48 mx-auto mb-4 transition-all duration-300"
          src={logo}
          alt="Logo"
        />
        <h1 className="text-2xl md:text-4xl lg:text-5xl whitespace-pre">
          {displayedText}
        </h1>
        
        {/* Botones */}
        <div
          className={`
            mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700
            ${buttonsVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
          `}
        >
          <a
            href="#about-us"
            className="px-6 py-3 rounded-lg border-2 border-[var(--color-primary-neon)] text-[var(--color-primary-neon)] 
                      font-semibold shadow-lg hover:bg-[var(--color-primary-neon)] hover:text-[var(--color-primary)] 
                      hover:scale-105 transition-all duration-300"
          >
            Sobre nosotros
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-[var(--color-primary-neon)] text-[var(--color-primary)] font-semibold 
                      shadow-lg hover:scale-105 transition-all duration-300"
          >
            Contáctanos
          </a>
        </div>


      </div>
    </main>
    </>
  )
}

export default HeroSection