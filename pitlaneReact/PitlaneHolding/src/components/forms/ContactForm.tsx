import React, { useState } from "react";
import FormBase from "./FormBase";
import type { Field } from "./FormBase";
import { sendContactForm } from "../../api/apiContact";

const ContactForm: React.FC = () => {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [errorFields, setErrorFields] = useState<Record<string, string>>({});

  const fields: Field[] = [
    { name: "name", label: "Nombre Completo", type: "text", placeholder: "Ingresa tu nombre completo", required: true },
    { name: "email", label: "Correo Electrónico", type: "email", placeholder: "ejemplo@correo.com", required: true },
    { name: "number", label: "Teléfono", type: "tel", placeholder: "+34 600 000 000" },
    { name: "company", label: "Empresa / Fondo de inversión", type: "text", placeholder: "Nombre de la empresa o fondo" },
    { name: "message", label: "Mensaje", type: "textarea", placeholder: "Escribe tu mensaje aquí...", rows: 5 }
  ];

  async function handleSubmit(data: Record<string, string>) {
    setFeedback(null);
    setErrorFields({});
    let result = null;
    try {
      result = await sendContactForm(data);

      if (result.status === "SUCCESS") {
        setFeedback("✅ ¡Formulario enviado correctamente!");
      } else {
        setFeedback("❌ Ha ocurrido un problema: " + (result.message || "Error desconocido"));
      }
    } catch (err: any) {
      if (result && result.message) {
        setFeedback("❌ No se pudo enviar el formulario." + (result.message || "Error desconocido"));
      } else if (err.errors) {
        setErrorFields(err.errors);
        setFeedback("⚠️ Por favor corrige los errores del formulario.");
      } else {
        setFeedback("❌ Error al enviar el formulario. Inténtalo de nuevo más tarde.");
      }
    }
  }

  return (
    <div>
      <FormBase
        title="¿Te interesa invertir?"
        fields={fields}
        onSubmit={handleSubmit}
      />

      {feedback && (
        <p className="mt-4 text-center text-sm text-[var(--text-secondary,#cce6ff)]">
          {feedback}
        </p>
      )}

      {Object.keys(errorFields).length > 0 && (
        <ul className="mt-2 text-red-400 text-sm text-left max-w-xl mx-auto">
          {Object.entries(errorFields).map(([field, msg]) => (
            <li key={field}>
              {msg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactForm;
