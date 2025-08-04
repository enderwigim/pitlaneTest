import logo from '../assets/img/logo_noBG.png'
import backgroundImage from '../assets/img/background1.png'

function HeroSection(): React.JSX.Element {
  return (
<main
  className="hero flex flex-col items-center justify-center relative overflow-hidden font-orbitron" style={{ minHeight: 'calc(100vh - 7rem)' }}>
      {/* Fondo azul oscuro con opacidad */}
      <div className="absolute inset-0 bg-blue-900 opacity-90"></div>

      {/* Imagen de fondo con opacidad */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.5 }}
      ></div>

      {/* Contenido: logo + texto */}
      <div className="relative z-10 text-[#A9B1BA] text-center px-4">
        <img className="h-60 mx-auto mb-4" src={logo} alt="Logo" />
        <h1 className="text-2xl md:text-3xl lg:text-4xl">Inversión con visión de futuro</h1>
      </div>
    </main>
  )
}

export default HeroSection