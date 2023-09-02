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
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        {...props}
      />
      <label
        htmlFor={id}
        className="ml-2 text-sm font-medium dark:text-gray-300"
      >
        {label}
      </label>
      <ErrorMessage error={error} />
    </div>
  );
};

export default RadioButton;
