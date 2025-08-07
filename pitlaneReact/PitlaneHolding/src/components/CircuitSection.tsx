import {
  HiLocationMarker,
  HiClock,
  HiCheckCircle
} from 'react-icons/hi'
import {
  FaFlagCheckered,
  FaMapMarkedAlt,
  FaChartLine
} from 'react-icons/fa'
import { GiRaceCar, GiProcessor } from 'react-icons/gi'

import circuitImage from '../assets/img/circuito.png'
import backgroundImage from '../assets/img/background2.png'

function CircuitInfoSection(): React.JSX.Element {
  return (
    <section
      className="relative text-[#C4C6C9] font-orbitron px-4 py-20 min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Imagen de fondo con efecto parallax básico */}
      <div
        className="absolute inset-0 z-[-20] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      ></div>

      {/* Capa azul translúcida encima de la imagen */}
      <div className="absolute inset-0 bg-[#0D2C53]/80 z-[-10]" />

      {/* Título */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-12 drop-shadow-lg z-10">
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
            <HiLocationMarker className="text-cyan-400 text-4xl" />
            <p><strong>Ubicación:</strong> Agost, Alicante</p>
          </div>
          <div className="flex items-start gap-4">
            <HiClock className="text-cyan-400 text-4xl" />
            <p><strong>Superficie:</strong> 2.200.000 m²</p>
          </div>
          <div className="flex items-start gap-4">
            <HiCheckCircle className="text-cyan-400 text-4xl" />
            <p><strong>Homologación:</strong> FIA Grado 1</p>
          </div>
          <div className="flex items-start gap-4">
            <FaFlagCheckered className="text-cyan-400 text-4xl" />
            <p><strong>Centro de alto rendimiento</strong></p>
          </div>
          <div className="flex items-start gap-4">
            <GiRaceCar className="text-cyan-400 text-4xl" />
            <p><strong>Zonas de:</strong> Karting, tierra y simuladores</p>
          </div>
        </div>
      </div>


    {/* Características inferiores */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-16 text-center z-10 w-full max-w-5xl">
      <div className="group flex flex-col items-center p-6 rounded-xl bg-[#0A2341] shadow-md border border-cyan-500 transition-colors duration-300 hover:border-[#00CA73]">
        <GiProcessor className="text-cyan-300 text-6xl mb-4 transition-colors duration-300 group-hover:text-[#00CA73]" />
        <p className="font-semibold text-[#C4C6C9]">Estructura Completa</p>
      </div>
      <div className="group flex flex-col items-center p-6 rounded-xl bg-[#0A2341] shadow-md border border-cyan-500 transition-colors duration-300 hover:border-[#00CA73]">
        <FaChartLine className="text-cyan-300 text-6xl mb-4 transition-colors duration-300 group-hover:text-[#00CA73]" />
        <p className="font-semibold text-[#C4C6C9]">Modelo de<br />negocio rentable</p>
      </div>
      <div className="group flex flex-col items-center p-6 rounded-xl bg-[#0A2341] shadow-md border border-cyan-500 transition-colors duration-300 hover:border-[#00CA73]">
        <FaMapMarkedAlt className="text-cyan-300 text-6xl mb-4 transition-colors duration-300 group-hover:text-[#00CA73]" />
        <p className="font-semibold text-[#C4C6C9]">Enclave Estratégico</p>
      </div>
    </div>


</section>
  )
}

export default CircuitInfoSection
