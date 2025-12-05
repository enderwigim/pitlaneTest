import { useEffect, useState, useRef } from 'react'
import backgroundImage from '../../assets/img/background4.png' // You can reuse any image

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
      className="relative overflow-hidden font-orbitron flex items-center justify-center px-6"
      style={{ minHeight: 'calc(100vh - 7rem)' }}
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
          max-w-5xl mx-auto text-center text-[var(--color-text-muted)] transition-all duration-700
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >

        {/* Main explanation block */}
        <p className="text-md md:text-lg text-[var(--color-text-muted)] px-4 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tempus tortor. 
          Fusce aliquet dictum eros id malesuada. Mauris at consequat ipsum. Donec consequat 
          risus ac est viverra convallis. Proin iaculis sed lorem in luctus. Praesent vitae 
          sem sed libero scelerisque laoreet sit amet a mauris.
          <br /><br />
          Donec blandit dignissim lacus, sed dapibus libero fringilla in. Sed at tempor sem. 
          Mauris auctor euismod sapien, feugiat gravida lectus porta sed. Nulla vitae leo 
          fringilla, semper mauris id, suscipit elit. Integer id dui pellentesque, dictum 
          arcu vitae, ullamcorper leo.
        </p>

        {/* Secondary explanation block */}
        <p className="text-sm md:text-md text-[var(--color-text-muted)] px-4 mb-10">
          Suspendisse potenti. Nunc ultricies mauris id augue condimentum, ac vehicula ex rutrum. 
          Vestibulum molestie ornare pellentesque. Integer convallis aliquam velit, id congue neque 
          dignissim ac. Fusce nec justo vitae lacus tempus auctor a id nisi.
        </p>
      </div>
    </section>
  )
}

export default ProjectDetailsSection
