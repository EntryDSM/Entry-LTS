import { useCallback, useState } from 'react';
import { TextAreaProps } from '@team-entry/design_system';

export const useTextArea = <T,>(initialForm: T) => {
  const [form, setForm] = useState<T>(initialForm);
  const onChange = useCallback((e: React.ChangeEvent<TextAreaProps>) => {
    const { name, value, limit } = e.currentTarget;
    if (value.length >= limit) {
      return { ...form, [name]: value.slice(0, limit) };
    }
    return setForm({ ...form, [name]: value });
  }, []);
  return { form, onChange, setForm };
};
