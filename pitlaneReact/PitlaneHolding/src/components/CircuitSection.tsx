import { HiLocationMarker, HiClock, HiCheckCircle } from 'react-icons/hi'
import { FaFlagCheckered, FaMapMarkedAlt, FaChartLine } from 'react-icons/fa'
import { GiRaceCar, GiProcessor } from 'react-icons/gi'

import { Parallax } from 'react-scroll-parallax'

import circuitImage from '../assets/img/circuito.png'
import backgroundImage from '../assets/img/background2.png'

function CircuitInfoSection(): React.JSX.Element {
  return (
    <section className="relative text-[#C4C6C9] font-orbitron px-4 py-10 min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
  
  {/* Imagen de fondo con estilo en línea */}
  <div
    className="absolute inset-0 z-[-20]"
    style={{
      backgroundImage: `url("${backgroundImage}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  ></div>
    {/* Capa azul translúcida encima de la imagen */}
  <div className="absolute inset-0 bg-[#0D2C53]/90 z-[-10]"></div>  
      {/* Imagen de fondo con parallax */}
      {/* <Parallax speed={-20}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 -z-0"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
        ></div>
      </Parallax> */}

      {/* Título */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-white drop-shadow-lg z-10">
        Una nueva era para el automovilismo y el alto rendimiento
      </h1>

      {/* Grid principal */}
      <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl w-full z-10">
        {/* Imagen circuito */}
        <div className="rounded-lg border-2 border-cyan-500 overflow-hidden max-w-md mx-auto shadow-xl z-10">
          <img src={circuitImage} alt="Circuito" className="w-full h-auto" />
        </div>

        {/* Detalles */}
        <div className="space-y-5 text-left text-sm sm:text-base">
          <div className="flex items-start gap-4">
            <HiLocationMarker className="text-cyan-400 text-2xl" />
            <p><strong>Ubicación:</strong> Agost, Alicante</p>
          </div>
          <div className="flex items-start gap-4">
            <HiClock className="text-cyan-400 text-2xl" />
            <p><strong>Superficie:</strong> 2.200.000 m²</p>
          </div>
          <div className="flex items-start gap-4">
            <HiCheckCircle className="text-cyan-400 text-2xl" />
            <p><strong>Homologación:</strong> FIA Grado 1</p>
          </div>
          <div className="flex items-start gap-4">
            <FaFlagCheckered className="text-cyan-400 text-2xl" />
            <p><strong>Centro de alto rendimiento</strong></p>
          </div>
          <div className="flex items-start gap-4">
            <GiRaceCar className="text-cyan-400 text-2xl" />
            <p><strong>Zonas de:</strong> Karting, tierra y simuladores</p>
          </div>
        </div>
      </div>

      {/* Características inferiores */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center z-10">
        <div className="flex flex-col items-center">
          <GiProcessor className="text-cyan-300 text-4xl mb-2" />
          <p className="font-semibold">Estructura Completa</p>
        </div>
        <div className="flex flex-col items-center">
          <FaChartLine className="text-cyan-300 text-4xl mb-2" />
          <p className="font-semibold">Modelo de<br />negocio rentable</p>
        </div>
        <div className="flex flex-col items-center">
          <FaMapMarkedAlt className="text-cyan-300 text-4xl mb-2" />
          <p className="font-semibold">Enclave Estratégico</p>
        </div>
      </div>
    </section>
  )
}

export default CircuitInfoSection
