import React from "react";

interface FeatureCardProps {
  Icon: React.ComponentType<{ className?: string }>;
  text: React.ReactNode;
  // We add the property className to allow custom styling
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, text, className }) => {
  return (
    <div className={`${className}`}>
      <Icon className="text-cyan-300 text-6xl mb-4 transition-colors duration-300 group-hover:text-[#00CA73]" />
      <p className="font-semibold text-[#C4C6C9] text-center">{text}</p>
    </div>
  );
};

export default FeatureCard;
