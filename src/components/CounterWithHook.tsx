import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const { counterState, handleIncreaseBy, handleResetCounter } = useCounter(10);

  return (
    <>
      <h3>Counter With Hook: {counterState}</h3>
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
