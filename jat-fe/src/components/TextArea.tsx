import { FC, TextareaHTMLAttributes } from "react";
import ErrorMessage from "./ErrorMessage";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  error?: string;
}
const TextArea: FC<TextAreaProps> = ({ label, id, error, ...props }) => {
  return (
    <div>
      <label className="text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...props}
      ></textarea>
      <ErrorMessage error={error} />
    </div>
  );
};

export default TextArea;
