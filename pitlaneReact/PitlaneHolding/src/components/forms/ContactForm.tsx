import React from "react";
import FormBase from "./FormBase";
import type { Field } from "./FormBase";
import { sendContactForm } from "../../api/apiContact";

const ContactForm: React.FC = () => {
  const fields: Field[] = [
    { name: "nombre", label: "Nombre Completo", type: "text", placeholder: "Ingresa tu nombre completo", required: true },
    { name: "email", label: "Correo Electrónico", type: "email", placeholder: "ejemplo@correo.com", required: true },
    { name: "telefono", label: "Teléfono", type: "tel", placeholder: "+34 600 000 000" },
    { name: "empresa", label: "Empresa / Fondo de inversión", type: "text", placeholder: "Nombre de la empresa o fondo" },
    { name: "mensaje", label: "Mensaje", type: "textarea", placeholder: "Escribe tu mensaje aquí...", rows: 5 }
  ];


  /*
  const handleSubmit = (data: Record<string, string>) => {
    console.log("Datos del formulario:", data);

    // Ejemplo de envío con fetch:
    
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((result) => console.log("Respuesta del servidor:", result));
    
  };
  */

  return (
      <FormBase
        title="¿Te interesa invertir?"
        fields={fields}
        onSubmit={sendContactForm}
      />
  );
};

export default ContactForm;
