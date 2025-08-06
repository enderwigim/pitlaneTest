import { Parallax } from 'react-scroll-parallax'
import backgroundImage from '../assets/img/background1.png'

function ParallaxSection(): React.JSX.Element {
  return (
    <section className="h-screen relative overflow-hidden">
      {/* Imagen de fondo con parallax */}
      <Parallax speed={-20}>
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      </Parallax>

      {/* Contenido encima del fondo */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white font-orbitron">
        <h1 className="text-4xl md:text-6xl text-center px-4">Inversión con visión de futuro</h1>
        <p className="text-lg mt-4 text-center text-[#A9B1BA]">Con efecto parallax elegante</p>
      </div>
    </section>
  )
}

export default ParallaxSection
