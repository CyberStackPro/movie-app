import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: string;
  onClick?: () => void;
  className?: string;
}
const Button = ({ children, onClick, className, color = "primary" }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${color} rounded-md mx-4 p-1.5 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
