import { useEffect, useState, useRef } from 'react'
import backgroundImage from '../../assets/img/background4.png'

function ProjectDetailsSection(): React.JSX.Element {
  const [visible, setVisible] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => setButtonsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [visible])

  return (
    <section
      ref={sectionRef}
      id="project-details"
      className="relative overflow-hidden font-orbitron flex items-center justify-center px-6 py-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-[-20] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--color-primary)]/80 z-[-10]" />

      {/* Content */}
      <div
        className={`
          max-w-5xl mx-auto text-center text-[var(--color-text-muted)]
          transition-all duration-700 
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        {/* MAIN INTRO BLOCK */}
        <p className="text-md md:text-lg px-4 mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tempus tortor. 
          Fusce aliquet dictum eros id malesuada. Mauris at consequat ipsum. Donec consequat 
          risus ac est viverra convallis. Proin iaculis sed lorem in luctus. Praesent vitae 
          sem sed libero scelerisque laoreet sit amet a mauris.
        </p>

        <p className="text-sm md:text-md px-4 mb-12 leading-relaxed">
          Donec blandit dignissim lacus, sed dapibus libero fringilla in. Sed at tempor sem. 
          Mauris auctor euismod sapien, feugiat gravida lectus porta sed. Nulla vitae leo 
          fringilla, semper mauris id, suscipit elit.
        </p>

        {/* SECTION DIVIDER */}
        <div className="w-full h-px bg-white/20 my-12" />

        {/* FEATURE BLOCK */}
        <div
          className={`
            transition-all duration-700 delay-200
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <h2 className="text-xl md:text-2xl text-cyan-300 mb-6 font-semibold">
            Key Features of the Project
          </h2>

          <p className="text-sm md:text-md px-4 mb-10 leading-relaxed">
            Suspendisse potenti. Nunc ultricies mauris id augue condimentum, ac vehicula ex rutrum.
            Integer convallis aliquam velit, id congue neque dignissim ac. Fusce nec justo vitae
            lacus tempus auctor a id nisi.
          </p>
        </div>

        {/* SECTION DIVIDER */}
        <div className="w-full h-px bg-white/20 my-12" />

        {/* ARCHITECTURE BLOCK */}
        <div
          className={`
            transition-all duration-700 delay-300
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <h2 className="text-xl md:text-2xl text-cyan-300 mb-6 font-semibold">
            How the System Works
          </h2>

          <p className="text-sm md:text-md px-4 mb-10 leading-relaxed">
            Sed euismod lectus vitae urna congue, id feugiat leo ullamcorper. Donec luctus
            tincidunt metus nec consequat. Morbi vitae dui vehicula, ultricies purus et,
            tempor tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae.
          </p>
        </div>

        {/* SECTION DIVIDER */}
        <div className="w-full h-px bg-white/20 my-12" />

        {/* LIST / BULLET BLOCK */}
        <div
          className={`
            transition-all duration-700 delay-500
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <h2 className="text-xl md:text-2xl text-cyan-300 mb-6 font-semibold">
            Vision & Goals
          </h2>

          <ul className="text-sm md:text-md px-8 text-left mx-auto max-w-3xl space-y-4 leading-relaxed">
            <li>• Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae.</li>
            <li>• Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae.</li>
            <li>• Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae.</li>
            <li>• Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae.</li>
            <li>• Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae.</li>
          </ul>
        </div>

        {/* EXTRA SPACING */}
        <div className="mt-20" />
      </div>
    </section>
  )
}

export default ProjectDetailsSection
