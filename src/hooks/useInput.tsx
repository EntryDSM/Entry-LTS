import { ChangeEvent, useCallback, useState } from 'react';

export const useInput = <T,>(initialForm: T) => {
  const [form, setForm] = useState<T>(initialForm);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  return { form, onChange, setForm };
};
