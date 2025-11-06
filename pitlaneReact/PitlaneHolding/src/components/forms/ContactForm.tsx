import React from "react";
import FormBase from "./FormBase";
import type { Field } from "./FormBase";
import { sendContactForm } from "../../api/apiContact";

const ContactForm: React.FC = () => {
  const fields: Field[] = [
    { name: "name", label: "Nombre Completo", type: "text", placeholder: "Ingresa tu nombre completo", required: true },
    { name: "email", label: "Correo Electrónico", type: "email", placeholder: "ejemplo@correo.com", required: true },
    { name: "number", label: "Teléfono", type: "tel", placeholder: "+34 600 000 000" },
    { name: "company", label: "Empresa / Fondo de inversión", type: "text", placeholder: "Nombre de la empresa o fondo" },
    { name: "message", label: "Mensaje", type: "textarea", placeholder: "Escribe tu mensaje aquí...", rows: 5 }
  ];
  return (
      <FormBase
        title="¿Te interesa invertir?"
        fields={fields}
        onSubmit={sendContactForm}
      />
  );
};

export default ContactForm;