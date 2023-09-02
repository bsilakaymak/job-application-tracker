import { FC, InputHTMLAttributes } from "react";
import ErrorMessage from "./ErrorMessage";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
}
const RadioButton: FC<RadioButtonProps> = ({ label, id, error, ...props }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="radio"
        value=""
        name="default-radio"
        className="w-4 h-4 text-red-900 bg-gray-100 border-red-300"
        {...props}
      />
      <label htmlFor={id} className="ml-2 text-sm font-medium">
        {label}
      </label>
      <ErrorMessage error={error} />
    </div>
  );
};

export default RadioButton;
