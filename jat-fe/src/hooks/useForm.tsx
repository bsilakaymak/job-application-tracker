import { useState } from "react";

function useForm(
  initialState: any,
  validationSchema: { [key: string]: (arg0: any) => any }
) {
  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (e: any) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "radio" ? (value === "true" ? true : false) : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    const validationError = validateField(name, newValue);

    setErrors({
      ...errors,
      [name]: validationError,
    });
  };

  const validateField = (fieldName: string, value: any) => {
    if (validationSchema[fieldName]) {
      return validationSchema[fieldName](value);
    }
    return null;
  };

  const validateForm = () => {
    const newErrors = {};
    for (const field in validationSchema) {
      const validationError = validateField(field, formData[field]);
      if (validationError) {
        newErrors[field as keyof Object] = validationError;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    errors,
    handleInputChange,
    validateForm,
  };
}

export default useForm;
