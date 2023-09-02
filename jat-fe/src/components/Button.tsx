import React, { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
