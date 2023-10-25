import { useFormOtherExample } from "../hooks/useFormOtherExample";

const initialState = {
  email: "",
  password: "",
};

export const FormComponentOtherExample = () => {
  const { formState, handleChangeForm } = useFormOtherExample(initialState);

  return (
    <>
      <h3>Formulario con React Hook Form (Otro Ejemplo)</h3>
      <span>
        Este formulario maneja de forma <strong>distinta</strong> la función
        onChange()
      </span>
      <br />
      <br />

      <input
        type="text"
        name="email"
        className="form-control"
        placeholder="example@example.com"
        onChange={(event) => handleChangeForm(event.target.value, "email")}
        value={formState.email}
      />

      <input
        type="text"
        name="password"
        className="form-control mt-2 mb-2"
        placeholder="456456"
        onChange={(event) => handleChangeForm(event.target.value, "password")}
        value={formState.password}
      />

      <code>
        <pre>{JSON.stringify(formState, null, 2)}</pre>
      </code>
    </>
  );
};
