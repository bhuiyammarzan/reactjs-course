import { useState } from "react";

type FormValues = Record<string, unknown>;
type SubmitCallback<T extends FormValues> = (values: T) => void;

export default function useForm<T extends FormValues>(
  initialValues: T = {} as T,
  callback?: SubmitCallback<T>
) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...(prev ?? initialValues), [name]: value } as T));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (callback) callback(values);
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChange, handleSubmit, resetForm };
}