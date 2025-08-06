import logo from '../assets/img/logo_noBG.png'
import backgroundImage from '../assets/img/background1.png'
import { Parallax } from 'react-scroll-parallax'

function HeroSection(): React.JSX.Element {
  return (
    <main
      className="hero flex flex-col items-center justify-center relative overflow-hidden font-orbitron"
      style={{ minHeight: 'calc(100vh - 7rem)' }}
    >
      {/* Fondo azul oscuro con opacidad */}
      <div className="absolute inset-0 bg-blue-900 opacity-90 z-0"></div>

      {/* Imagen de fondo con Parallax */}
      <Parallax speed={-20} className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
      </Parallax>

      {/* Contenido: logo + texto */}
      <div className="relative z-10 text-[#A9B1BA] text-center px-4">
        <img className="h-60 mx-auto mb-4" src={logo} alt="Logo" />
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          Inversión con visión de futuro
        </h1>
      </div>
    </main>
  )
}

export default HeroSection
