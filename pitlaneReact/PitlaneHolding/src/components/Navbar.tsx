import { useState, useEffect } from 'react'
import logo from '../assets/img/logo_noBG.png'
import '../styles/navbar.css'

function Navbar(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) closeMenu() // md breakpoint
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 font-orbitron">
        <nav className="bg-[var(--color-primary)] shadow-lg">
          <div className="mx-auto px-6">
            <div className="flex justify-between items-center py-3">
              {/* Logo */}
              <div className="flex items-center">
                <div className="w-32 h-24 md:w-40 md:h-24 flex items-center justify-center text-xs text-gray-500 mr-4">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
              </div>

              {/* Menú Desktop */}
              <div className="hidden md:flex items-center space-x-4">
                <a href="#project" className="navbar-link text-[var(--color-text-muted)]  font-orbitron font-medium text-[1.3rem] no-underline">Proyecto</a>
                <span className="text-gray-400">|</span>
                <a href="#about-us" className="navbar-link text-[var(--color-text-muted)]  font-orbitron font-medium text-[1.3rem] no-underline">Sobre nosotros</a>
                <span className="text-gray-400">|</span>
                <a href="#investors" className="navbar-link text-[var(--color-text-muted)]  font-orbitron font-medium text-[1.3rem] no-underline">Inversores</a>
                <span className="text-gray-400">|</span>
                <a href="#contact" className="navbar-link text-[var(--color-text-muted)]  font-orbitron font-medium text-[1.3rem] no-underline">Contacto</a>
                <span className="text-gray-400">|</span>
                <a href="#download" className="navbar-link text-[var(--color-text-muted)]  font-orbitron font-medium text-[1.3rem] no-underline">Descarga el proyecto</a>
              </div>

              {/* Botón Hamburger */}
              <div className="md:hidden flex items-center">
                <button onClick={openMenu} className="text-[var(--color-text-muted)]  focus:outline-none">
                  <div className="space-y-1">
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Fondo semitransparente */}
      <div
        className={`backdrop fixed inset-0 bg-black/60 z-40 ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      ></div>

      {/* Menú móvil */}
      <div
        className={`slide-menu fixed top-0 right-0 h-full w-64 bg-primary shadow-2xl z-50 ${
          menuOpen ? 'open' : ''
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="text-[var(--color-text-muted)] text-3xl hover:text-[var(--color-accent)]">&times;</button>
        </div>
        <div className="flex flex-col px-6 py-4 space-y-5">
          <a href="#project" className="navbar-link text-[var(--color-text-muted)] font-poppins font-medium text-lg py-2 border-b border-gray-700">Proyecto</a>
          <a href="#investors" className="navbar-link text-[var(--color-text-muted)]  font-poppins font-medium text-lg py-2 border-b border-gray-700">Inversores</a>
          <a href="#contact" className="navbar-link text-[var(--color-text-muted)]  font-poppins font-medium text-lg py-2 border-b border-gray-700">Contacto</a>
          <a href="#download" className="navbar-link text-[var(--color-text-muted)]  font-poppins font-medium text-lg py-2 border-b border-gray-700">Descarga el Proyecto</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
