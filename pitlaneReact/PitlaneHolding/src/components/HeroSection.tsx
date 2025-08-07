import { useEffect, useState, useRef } from 'react'
import logo from '../assets/img/logo_noBG.png'
import backgroundImage from '../assets/img/background1.png'
import Lenis from '@studio-freight/lenis'

function HeroSection(): React.JSX.Element {
  const [displayedText, setDisplayedText] = useState('')
  const indexRef = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const fullText = 'Inversión con visión de futuro'

  useEffect(() => {
    const lenis = new Lenis()
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    const typeNext = () => {
      if (indexRef.current < fullText.length) {
        setDisplayedText(fullText.slice(0, indexRef.current + 1))
        indexRef.current++
        timeoutRef.current = setTimeout(typeNext, 25)
      }
    }

    typeNext()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
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
      <div className="absolute inset-0 bg-[#0D2C53]/70 z-[-10]" />

      {/* Contenido */}
      <div className="relative z-10 text-[#A9B1BA] text-center px-4">
        <img
          className="h-28 sm:h-28 md:h-36 lg:h-48 mx-auto mb-4 transition-all duration-300"
          src={logo}
          alt="Logo"
        />
        <h1 className="text-2xl md:text-4xl lg:text-5xl whitespace-pre">
          {displayedText}
        </h1>
      </div>
    </main>
  )
}

export default HeroSection