import { useForm } from "../hooks/useForm";

interface formStateInterface {
  email: string;
  password: string;
}

const initialState = {
  email: "",
  password: "",
};

export const FormComponent = () => {
  const { formState, handleChangeForm } =
    useForm<formStateInterface>(initialState);

  return (
    <>
      <h3>Formulario con React Hook Form</h3>
      <span>
        Este formulario maneja de forma <strong>clásica</strong> la función
        onChange()
      </span>
      <br />
      <br />

      <input
        type="text"
        name="email"
        className="form-control"
        placeholder="example@example.com"
        onChange={(event) => handleChangeForm(event)}
        value={formState.email}
      />

      <input
        type="text"
        name="password"
        className="form-control mt-2 mb-2"
        placeholder="456456"
        onChange={(event) => handleChangeForm(event)}
        value={formState.password}
      />

      <code>
        <pre>{JSON.stringify(formState, null, 2)}</pre>
      </code>
    </>
  );
};
