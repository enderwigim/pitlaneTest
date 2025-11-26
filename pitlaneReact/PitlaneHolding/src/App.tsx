import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CircuitSection from './components/CircuitSection'
import ContactSection from './components/ContactSection'
import CarAnimation from './components/animation/car_animation/CarAnimation'
import CarVideoSection from "./components/CarVideoSection";
import carVideo from "./assets/video/car_intro.mp4";
import AboutSection from './components/AboutSection'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CircuitSection />
      <AboutSection />
      <ContactSection />
      <CarVideoSection videoSrc={carVideo} />  
      <section id="download" className="contact-section">
        <CarAnimation />

      </section>


    </>
  )
}

export default App
