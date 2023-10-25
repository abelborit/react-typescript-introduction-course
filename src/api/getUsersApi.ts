import axios from "axios";

/* Puede especificar valores de configuración predeterminados que se aplicarán a cada solicitud. */
export const getUsersApi = axios.create({
  baseURL: "https://reqres.in/api",
});
