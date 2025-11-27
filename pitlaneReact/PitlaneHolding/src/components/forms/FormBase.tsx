import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

interface FormBaseProps {
  title: string;
  fields: Field[];
  onSubmit?: (data: Record<string, string>) => void;

  disabled?: boolean;       // sending or sent
  isSubmitting?: boolean;
  isSent?: boolean;         // NEW
}

const FormBase: React.FC<FormBaseProps> = ({
  title,
  fields,
  onSubmit,
  disabled = false,
  isSubmitting = false,
  isSent = false
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // If user edits something after success → unlock the form again
    if (isSent) {
      // You inform ContactForm that the form is no longer "sent"
      // So ContactForm must have a setter or an event
      // But since this is inside FormBase, we just allow editing here
      // ContactForm-side logic will depend on your needs
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!disabled && onSubmit) onSubmit(formData);
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className="w-[90%] max-w-xl mx-auto bg-gradient-to-b 
                   from-[var(--color-bg-darker)] to-[var(--color-primary)]
                   p-10 rounded-2xl shadow-[0_0_20px_rgba(0,200,255,0.15)]
                   border border-white/10 backdrop-blur-sm text-center"
      >

        <h2 className="text-3xl md:text-4xl font-orbitron text-[var(--color-primary-neon)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
          {title}
        </h2>

        <p className="text-sm text-[var(--color-text-muted)] mt-2 mb-6 tracking-wide">
          Completa el formulario y un miembro del equipo te contactará.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center">
          {fields.map((field) => (
            <div className="w-full flex flex-col text-left" key={field.name}>
              <label
                htmlFor={field.name}
                className="text-sm mb-1 font-orbitron text-[var(--color-text-muted)]"
              >
                {field.label}
                {field.required && <span className="text-red-500"> *</span>}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={field.rows || 4}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  required={field.required}
                  disabled={disabled}
                  className={`
                    w-full p-3 rounded-md bg-white/10 text-[var(--color-text-muted)] text-sm 
                    outline-none transition-all placeholder-[var(--color-text-muted)] 
                    font-orbitron
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                    focus:border focus:border-[var(--color-primary-hover)] 
                    focus:bg-white/15 focus:shadow-lg
                  `}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  required={field.required}
                  disabled={disabled}
                  className={`
                    w-full p-3 rounded-md bg-white/10 text-[var(--color-text-muted)] text-sm 
                    font-orbitron placeholder-[var(--color-text-muted)] outline-none 
                    transition-all border border-white/10
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                    focus:border-[var(--color-accent)] focus:bg-white/15 
                    focus:shadow-[0_0_10px_rgba(0,200,255,0.2)]
                  `}
                />
              )}
            </div>
          ))}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={disabled}
            className={`
              w-full py-3 rounded-md font-semibold text-lg tracking-wide transition 
              ${
                isSent
                  ? "bg-green-600 text-white cursor-default"
                  : isSubmitting
                  ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                  : "bg-[var(--primary-color,#3db2ff)] text-white hover:scale-[1.02] hover:bg-[var(--color-primary-hover)] hover:shadow-lg"
              }
            `}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Enviando...
              </div>
            ) : isSent ? (
              "✔ Enviado!"
            ) : (
              "Enviar"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormBase;
