import React, { useEffect, useState } from "react";

interface ModalProps {
  open: boolean;
  title: string;
  message: string;
  errors?: Record<string, string>;
  onClose: () => void;
  type?: "success" | "error" | "warning";
}

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  message,
  errors,
  onClose,
  type = "success",
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (open) {
      // allow Tailwind to apply the initial hidden state before animating
      requestAnimationFrame(() => {
        setAnimate(true);
      });
    } else {
      setAnimate(false);
    }
  }, [open]);

  if (!open) return null;

  const color =
    type === "success"
      ? "text-green-400"
      : type === "warning"
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <div className="fixed inset-0 flex justify-center items-start z-50 pointer-events-none">
      <div
        className={`
          pointer-events-auto bg-[#0e1a29] text-white w-[90%] max-w-md p-6 rounded-xl shadow-xl border border-[#15415c]
          transform transition-all duration-300 ease-out
          ${animate ? "opacity-100 translate-y-6" : "opacity-0 -translate-y-10"}
        `}
      >
        <h3 className={`text-xl font-semibold mb-2 ${color}`}>
          {title}
        </h3>

        <p className="text-sm text-gray-200 mb-4">
          {message}
        </p>

        {errors && Object.keys(errors).length > 0 && (
          <ul className="text-red-300 text-sm mb-4 list-disc pl-5">
            {Object.entries(errors).map(([field, msg]) => (
              <li key={field}>{msg}</li>
            ))}
          </ul>
        )}

        <button
          className="w-full mt-2 py-2 bg-[#12374d] hover:bg-[#1a4e68] transition rounded-lg text-sm font-medium"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
