import { useEffect, useState, useRef } from "react";
import ContactForm from "./forms/ContactForm";
import backgroundImage from "../assets/img/background2.png"; // replace with the image you prefer

function ContactSection(): React.JSX.Element {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden font-orbitron flex items-center justify-center px-6"
      style={{ minHeight: "calc(100vh - 7rem)" }} // 👈 full screen minus navbar
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
        className={`w-full max-w-3xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-center text-4xl md:text-5xl font-bold tracking-wide mb-10 text-[var(--color-text-muted)] drop-shadow-[0_0_8px_var(--color-primary-neon)]">
          Contáctanos
        </h2>

        <div className="bg-[var(--color-primary)]/60 rounded-xl shadow-xl p-6 md:p-10 backdrop-blur-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
