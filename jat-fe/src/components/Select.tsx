import { FC } from "react";
import ErrorMessage from "./ErrorMessage";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  error?: string;
  options: {
    label: string;
    value: string;
  }[];
}

const Select: FC<SelectProps> = ({ label, id, error, options, ...props }) => {
  return (
    <div className="inline-block relative w-64">
      <label className="text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
        <select
          id={id}
          className="font-normal shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </label>

      <ErrorMessage error={error} />
    </div>
  );
};

export default Select;
