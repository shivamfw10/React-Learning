import { useState } from 'react';

// Simple useForm hook
export function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function resetForm() {
    setValues(initialValues);
  }

  return { values, handleChange, resetForm };
}
