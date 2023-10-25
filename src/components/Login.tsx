import { useEffect, useReducer } from "react";

interface AuthStateInterface {
  validing: boolean;
  token: string | null;
  username: string;
  name: string;
}

/* El código estático que no cambia nunca es preferible colocarlo afuera, ya que así evitamos que en un posible rerenderizado de Login, se vuelva a ejecutar ese código, ya que con la primera vez es suficiente */
const initialState: AuthStateInterface = {
  validing: true,
  token: null,
  username: "",
  name: "",
};

/* para las acciones se puede usar type o interface, por preferencia se usará type ya que en estos casos no se extenderá de nada como en el caso de las interface */
type AuthActions =
  | { type: "[Auth] Logout" }
  | { type: "[Auth] Login"; payload: LoginActionPayload };

/* se crea este type para hacer más facil la lectura del código */
type LoginActionPayload = {
  username: string;
  name: string;
};

/* el reducer tiene que retornar el mismo tipo que mi initialState */
const authReducer = (
  state: AuthStateInterface,
  action: AuthActions
): AuthStateInterface => {
  switch (action.type) {
    case "[Auth] Logout":
      return {
        ...state,
        validing: false,
        token: null,
        username: "",
        name: "",
      };

    case "[Auth] Login":
      return {
        ...state,
        validing: false,
        token: "tokenAccess123",
        username: action.payload.username,
        name: action.payload.name,
      };

    default:
      return state;
  }
};

export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "[Auth] Logout" });
    }, 1500);
  }, []);

  if (state.validing) {
    return (
      <>
        <div className="alert alert-info">⌛ Validando...</div>
      </>
    );
  }

  const handleLogin = () => {
    dispatch({
      type: "[Auth] Login",
      payload: { name: "Name", username: "UserName" },
    });
  };

  const handleLogout = () => {
    dispatch({ type: "[Auth] Logout" });
  };

  return (
    <>
      <h3>Login</h3>

      {state.token ? (
        <div className="alert alert-success">✅ Autenticado: {state.name}</div>
      ) : (
        <div className="alert alert-danger">❌ No autenticado</div>
      )}

      {state.token ? (
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      )}
    </>
  );
};
