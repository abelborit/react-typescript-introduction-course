import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialState: T) => {
  const [formState, setFormState] = useState(initialState);

  const handleChangeForm = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return {
    ...formState,
    formState,
    handleChangeForm,
  };
};
