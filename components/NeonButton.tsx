
import React from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  variant = 'blue', 
  onClick, 
  className = '',
  type = 'button'
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 text-white uppercase tracking-wider text-sm";
  const variants = {
    blue: "bg-transparent border-2 border-neonBlue shadow-neonBlue hover:bg-neonBlue hover:text-black",
    purple: "bg-transparent border-2 border-neonPurple shadow-neonPurple hover:bg-neonPurple hover:text-white"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default NeonButton;
