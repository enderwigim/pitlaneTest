import React, { useState } from "react";
import FormBase from "./FormBase";
import type { Field } from "./FormBase";
import { sendContactForm } from "../../api/apiContact";
import Modal from "./Modal";

const ContactForm: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error" | "warning">("success");
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalErrors, setModalErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const fields: Field[] = [
    { name: "name", label: "Nombre Completo", type: "text", required: true },
    { name: "email", label: "Correo Electrónico", type: "email", required: true },
    { name: "number", label: "Teléfono", type: "tel" },
    { name: "company", label: "Empresa / Fondo de inversión", type: "text" },
    { name: "message", label: "Mensaje", type: "textarea", rows: 5 }
  ];



async function handleSubmit(data: Record<string, string>) {
  if (isSubmitting || isSent) return; // blocks double submit + sending again

  setIsSubmitting(true);

  try {
    const result = await sendContactForm(data);

    if (result.status === "SUCCESS") {
      setIsSent(true);          // 🔥 NOW it becomes "sent"
      setIsSubmitting(false);   // 🔥 stops showing "Sending..."
      setModalType("success");
      setModalTitle("¡Formulario enviado!");
      setModalMessage("Tu mensaje ha sido enviado correctamente.");
      setModalOpen(true);
      return;
    }

    // ❌ backend responded but not success
    setIsSubmitting(false);
    setModalType("error");
    setModalTitle("Error");
    setModalMessage(result.message || "No se pudo enviar.");
    setModalOpen(true);

  } catch (err: any) {
    setIsSubmitting(false);      // 🔥 restore sending state

    if (err.errors) {
      setModalErrors(err.errors);
      setModalType("warning");
      setModalTitle("Corrige los campos");
      setModalMessage("Hay errores en el formulario.");
    } else {
      setModalType("error");
      setModalTitle("Error inesperado");
      setModalMessage("No se pudo enviar el formulario.");
    }

    setModalOpen(true);
  }
}


  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-xl">
          <FormBase
            title="¿Te interesa invertir?"
            fields={fields}
            onSubmit={handleSubmit}
            disabled={isSubmitting || isSent}  
            isSubmitting={isSubmitting}
            isSent={isSent}                 
          />
        </div>
      </div>

      <Modal
        open={modalOpen}
        title={modalTitle}
        message={modalMessage}
        errors={modalErrors}
        type={modalType}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default ContactForm;
