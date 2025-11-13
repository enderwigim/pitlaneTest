// SectionStage.tsx
import SectionBase from "../../SectionBase"

interface SectionStageProps {
  visible: boolean
}

export default function SectionStage({ visible }: SectionStageProps) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      <SectionBase
        title="Descarga el Plan de Proyecto Completo"
        buttonText="Descargar Proyecto"
        buttonLink="/api/files/PitlaneProject.pdf"  // Connects to the spring boot backend
      />
    </div>
  )
}
