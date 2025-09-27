import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CircuitSection from './components/CircuitSection'
import ContactForm from './components/forms/ContactForm'
import SectionBase from './components/SectionBase'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CircuitSection />
      <section id="contact" className="contact-section">
        <ContactForm />
      </section>
      <section id="download" className="contact-section">
        <SectionBase
        title="Descarga el Plan de Proyecto Completo"
        buttonText="Descargar Proyecto"
        // buttonLink="/docs/plan-proyecto.pdf" // 🔗 ruta al PDF
        />

      </section>


    </>
  )
}

export default App
