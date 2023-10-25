import { useState } from "react";

/* así como en algunos casos no se necesita tipar porque typescript ya infiere el valor como por ejemplo en el useState o en las funciones que no retornan nada, es buena práctica tiparlo, ya que así cuando leamos el código nos dará más información */
export const Counter = () => {
  const [counterState, setCounterState] = useState<number>(0);

  /* se coloca :void ya que no regresará nada, solo cambiará el valor del counterState */
  const handleIncreaseBy = (valueArgs: number = 1): void => {
    setCounterState((prevCounter) => prevCounter + valueArgs);
  };

  /* se coloca :void ya que no regresará nada, solo cambiará el valor del counterState */
  const handleResetCounter = (): void => {
    setCounterState(0);
  };

  return (
    <>
      <h3>Counter: {counterState}</h3>
      <button onClick={() => handleIncreaseBy(+2)} className="btn btn-primary">
        +2
      </button>
      {/* para colocar espacio: &nbsp; */}
      &nbsp;
      <button onClick={() => handleIncreaseBy()} className="btn btn-primary">
        +1
      </button>
      &nbsp;
      <button onClick={handleResetCounter} className="btn btn-primary">
        Reset
      </button>
      &nbsp;
      <button onClick={() => handleIncreaseBy(-1)} className="btn btn-primary">
        -1
      </button>
      &nbsp;
      <button onClick={() => handleIncreaseBy(-2)} className="btn btn-primary">
        -2
      </button>
    </>
  );
};
