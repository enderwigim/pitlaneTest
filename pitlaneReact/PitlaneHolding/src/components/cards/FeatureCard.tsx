import React, { useState } from "react";

interface FeatureCardProps {
  Icon: React.ComponentType<{ className?: string }>;
  text: React.ReactNode;
  className?: string;
  details?: React.ReactNode; // ⬅️ NEW
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  Icon,
  text,
  className,
  details
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${className} cursor-pointer transition-all duration-300`}
      onClick={() => setOpen(!open)}
    >
      {/* Icon */}
      <Icon className="text-cyan-300 text-6xl mb-4 transition-transform duration-300 group-hover:text-[#00CA73]" />

      {/* Title */}
      <p className="font-semibold text-[#C4C6C9] text-center">{text}</p>

      {/* Expandable Details */}
      {details && (
        <div
          className={`
            overflow-hidden transition-all duration-500 ease-in-out 
            text-[#C4C6C9] text-sm mt-4
            ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <p className="leading-relaxed px-2">{details}</p>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
