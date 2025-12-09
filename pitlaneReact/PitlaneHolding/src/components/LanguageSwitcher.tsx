import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"

import enFlag from "../assets/img/flags/en.png"
import esFlag from "../assets/img/flags/es.png"

const LANGUAGES = [
  { code: "en", label: "English", flag: enFlag },
  { code: "es", label: "Español", flag: esFlag }
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => setOpen(!open)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0]

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className="
          flex items-center gap-2 px-3 py-2 rounded-lg
          bg-[var(--color-primary)]
          text-[var(--color-text-muted)]
          transition-all
          hover:bg-[var(--color-primary-neon)]
          hover:text-[var(--color-primary)]
        "
      >
        <img src={currentLang.flag} alt={currentLang.code} className="w-5 h-5 rounded-sm" />
        <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
        <span className="text-xs ml-1">▼</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full mt-2 right-0 w-40 bg-[var(--color-primary)] border rounded-lg shadow-lg z-50">
          {LANGUAGES.map(lang => {
            const isActive = lang.code === i18n.language
            return (
            <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`
                w-full flex items-center gap-3 px-3 py-2 text-left
                transition-all rounded-md  /* <-- added here */

                ${
                    isActive
                    ? "bg-[var(--color-primary-neon)] text-[var(--color-primary)] font-semibold"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-primary-neon)] hover:text-[var(--color-primary)]"
                }
                `}
            >
                <img src={lang.flag} alt={lang.label} className="w-5 h-5 rounded-sm" />
                {lang.label}
            </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
