import { useState } from "react";

/* T se extenderá de cualquier objeto */
/* No uses Object como tipo <T extends Object>. El tipo Object en realidad significa "cualquier valor no null", por lo que es ligeramente mejor que "unkdown". */
/* Si desea un tipo que signifique "cualquier objeto", probablemente desee Record <string, unknown> en su lugar. Esto le dice a typescript como sera el tipo del objeto key, value, es decir accedemos con una key de tipo string y el value puede ser cualquier cosa. */
export const useFormOtherExample = <T extends Record<string, unknown>>(
  initialState: T
) => {
  const [formState, setFormState] = useState(initialState);

  const handleChangeForm = (value: string, inputField: keyof T) => {
    setFormState({
      ...formState,
      [inputField]: value,
    });
  };

  return {
    ...formState,
    formState,
    handleChangeForm,
  };
};
