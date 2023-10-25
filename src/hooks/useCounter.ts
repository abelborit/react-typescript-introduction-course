import { useState } from "react";

/* así como en algunos casos no se necesita tipar porque typescript ya infiere el valor como por ejemplo en el useState o en las funciones que no retornan nada, es buena práctica tiparlo, ya que así cuando leamos el código nos dará más información */
export const useCounter = (initialCounter: number = 0) => {
  const [counterState, setCounterState] = useState<number>(initialCounter);

  /* se coloca :void ya que no regresará nada, solo cambiará el valor del counterState */
  const handleIncreaseBy = (valueArgs: number = 1): void => {
    setCounterState((prevCounter) => prevCounter + valueArgs);
  };

  /* se coloca :void ya que no regresará nada, solo cambiará el valor del counterState */
  const handleResetCounter = (): void => {
    setCounterState(0);
  };

  return { counterState, handleIncreaseBy, handleResetCounter };
};
