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
}

const FormBase: React.FC<FormBaseProps> = ({ title, fields, onSubmit }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <div className="w-[90%] max-w-xl bg-[rgba(0,20,50,0.9)] p-10 rounded-xl shadow-lg shadow-cyan-500/30 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color,#3db2ff)] mb-6 tracking-wide">
        {title}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center">
        {fields.map((field) => (
          <div className="w-full flex flex-col text-left" key={field.name}>
            <label htmlFor={field.name} className="text-sm mb-1 text-[var(--text-secondary,#cce6ff)]">
              {field.label}
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
                className="w-full p-3 rounded-md bg-white/10 text-white text-sm outline-none transition-all 
                           placeholder-gray-400 focus:border focus:border-[var(--primary-color,#3db2ff)] focus:bg-white/15 focus:shadow-lg"
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
                className="w-full p-3 rounded-md bg-white/10 text-white text-sm outline-none transition-all 
                           placeholder-gray-400 focus:border focus:border-[var(--primary-color,#3db2ff)] focus:bg-white/15 focus:shadow-lg"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-[var(--primary-color,#3db2ff)] text-white font-semibold text-lg tracking-wide 
                     transition-transform transform hover:scale-[1.02] hover:bg-[var(--primary-hover,#29a1f5)] hover:shadow-lg"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormBase;
