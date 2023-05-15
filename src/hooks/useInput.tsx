import { useCallback, useState } from 'react';

export const useInput = <T,>(initialForm: T) => {
  const [form, setForm] = useState<T>(initialForm);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      const { name, value } = e.currentTarget;
      setForm((form) => ({ ...form, [name]: value }));
    },
    [],
  );
  return { form, onChange, setForm };
};
