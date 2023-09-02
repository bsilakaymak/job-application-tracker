import { FC, InputHTMLAttributes } from "react";
import ErrorMessage from "./ErrorMessage";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
}
const Input: FC<InputProps> = ({ label, id, error, ...props }) => {
  return (
    <div>
      <label className="text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...props}
      ></input>
      <ErrorMessage error={error} />
    </div>
  );
};

export default Input;
