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
import FeatureCard from "./cards/FeatureCard";


import circuitImage from '../assets/img/circuito.png'
import backgroundImage from '../assets/img/background3.png'

function CircuitInfoSection(): React.JSX.Element {
  return (
    <section
      className="relative text-[var(--color-text-muted)] font-orbitron px-4 py-20 min-h-screen flex 
                  flex-col justify-center items-center text-center overflow-hidden"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Imagen de fondo con efecto parallax básico */}
      <div
        className="absolute inset-0 z-[-20] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      ></div>

      {/* Capa azul translúcida encima de la imagen */}
      <div className="absolute inset-0 bg-[var(--color-primary)]/80 z-[-10]" />

      {/* Título */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-12 drop-shadow-lg z-10">
        Una nueva era para el automovilismo y el alto rendimiento
      </h1>

      {/* Grid principal */}
      <div className="grid lg:grid-cols-2 gap-10 items-center sm:items-start max-w-6xl w-full z-10">
        {/* Imagen circuito */}
        <div className="rounded-lg border-2 border-[var(--color-primary-neon)] hover:border-[var(--color-secondary)] 
                        transition-colors duration-400 overflow-hidden max-w-md mx-auto shadow-xl z-10">
          <img src={circuitImage} alt="Circuito" className="w-full h-auto" />
        </div>

        {/* Detalles */}
        <div className="grid justify-items-center lg:justify-items-start self-center gap-5 text-center lg:text-left text-sm sm:text-base">
          <div className="group grid grid-cols-[50px_220px] md:grid-cols-[50px_280px] lg:grid-cols-[50px_auto] items-center gap-4">
            <HiLocationMarker className="text-[var(--color-primary-neon)] text-4xl group-hover:text-[var(--color-secondary)] 
                              transition-colors duration-400" />
            <p><strong>Ubicación:</strong> Agost, Alicante</p>
          </div>

          <div className="group grid grid-cols-[50px_220px] md:grid-cols-[50px_280px] lg:grid-cols-[50px_auto] items-center gap-4">
            <HiClock className="text-[var(--color-primary-neon)] text-4xl group-hover:text-[var(--color-secondary)] transition-colors duration-400" />
            <p><strong>Superficie:</strong> 2.200.000 m²</p>
          </div>

          <div className="group grid grid-cols-[50px_220px] md:grid-cols-[50px_280px] lg:grid-cols-[50px_auto] items-center gap-4">
            <HiCheckCircle className="text-[var(--color-primary-neon)] text-4xl group-hover:text-[var(--color-secondary)] transition-colors duration-400" />
            <p><strong>Homologación:</strong> FIA Grado 1</p>
          </div>

          <div className="group grid grid-cols-[50px_220px] md:grid-cols-[50px_280px] lg:grid-cols-[50px_auto] items-center gap-4 cursor-pointer">
            <FaFlagCheckered className="text-[var(--color-primary-neon)] text-4xl transition-colors duration-400 group-hover:text-[var(--color-secondary)]" />
            <p>
              <strong>Centro de alto rendimiento</strong>
            </p>
          </div>


          <div className="group grid grid-cols-[50px_220px] md:grid-cols-[50px_280px] lg:grid-cols-[50px_auto] items-center gap-4">
            <GiRaceCar className="text-[var(--color-primary-neon)] text-5xl group-hover:text-[var(--color-secondary)] transition-colors duration-300" />
            <p><strong>Zonas de:</strong> Karting, tierra y simuladores</p>
          </div>
        </div>

      </div>
    {/* Características inferiores */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-16 text-center z-10 w-full max-w-5xl">
      <FeatureCard
        className="group flex flex-col items-center p-6 rounded-xl bg-[var(--color-primary)] shadow-md border border-[var(--color-primary-neon)] transition-colors duration-400 hover:border-[var(--color-secondary)]"
        Icon={GiProcessor}
        text="Estructura Completa"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Curabitur ac lorem nec sapien volutpat."/>
      <FeatureCard
        className="group flex flex-col items-center p-6 rounded-xl bg-[var(--color-primary)] shadow-md border border-[var(--color-primary-neon)] transition-colors duration-400 hover:border-[var(--color-secondary)]"
        Icon={FaChartLine}
        text={<>Modelo de<br />negocio rentable</>}
        details="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."/>
      <FeatureCard
        className="group flex flex-col items-center p-6 rounded-xl bg-[var(--color-primary)] shadow-md border border-[var(--color-primary-neon)] transition-colors duration-400 hover:border-[var(--color-secondary)]"
        Icon={FaMapMarkedAlt}
        text="Enclave Estratégico"
        details="Integer maximus neque a magna ultricies, eget malesuada lacus vehicula. Sed at tellus id magna cursus posuere."/>
    </div>
</section>
  )
}

export default CircuitInfoSection
