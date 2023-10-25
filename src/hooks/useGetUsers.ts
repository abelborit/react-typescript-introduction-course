import { useCallback, useEffect, useRef, useState } from "react";
import {
  GetUsersApiInterface,
  UserInterface,
} from "../interfaces/getUsersApiInterface";
import { getUsersApi } from "../api/getUsersApi";

export const useGetUsers = () => {
  const [usersData, setUsersData] = useState<UserInterface[]>([]);
  /* manejar la referencia del número de página actual y la página siguiente. Se podría hacer con un useState pero cuando la página cambie no necesito que se renderice nada en el html */
  const currentPageRef = useRef(1);
  const totalPageRef = useRef(0);
  // console.log("Página Actual:", currentPageRef.current);
  // console.log("Total Páginas:", totalPageRef.current);

  /* cuando se crean custom hooks es una buena práctica que las funciones que vamos a devolver las devolvamos memorizadas ya que no sabemos dónde se van a utilizar estas funciones en códigos futuros y por ejemplo si se quieren usar como dependencia en useEffect() en cada render estas funciones van a ir cambiando su referencia y por ende serán una nueva instancia en memoria de modo que React pensará que la dependencia ha cambiado y ejecutará el useEffect() */
  const fetchDataUsers = useCallback(async () => {
    try {
      /* llamar a la api usando "/users" */
      const response = await getUsersApi.get<GetUsersApiInterface>("/users", {
        params: {
          page: currentPageRef.current,
        },
      });

      if (response?.data?.data?.length) {
        totalPageRef.current = response.data.total_pages;

        setUsersData(response.data.data);
      } else {
        /* se llegó al máximo de páginas entonces por eso se le resta uno */
        currentPageRef.current--;
        alert("❌ There aren't more users...");
      }
    } catch (error) {
      console.log("error", error);

      return error;
    }
  }, []);

  const nextPage = () => {
    if (currentPageRef.current <= totalPageRef.current) {
      currentPageRef.current++;
      fetchDataUsers();
    } else {
      alert("❌ There aren't more users...");
    }
  };

  const previousPage = () => {
    if (currentPageRef.current > 1) {
      currentPageRef.current--;
      fetchDataUsers();
    } else {
      alert("❌ There aren't more users...");
    }
  };

  useEffect(() => {
    fetchDataUsers();
  }, [fetchDataUsers]);

  return { usersData, nextPage, previousPage };
};
