export const Funciones = () => {
  const firstValue: number = 5;
  const secondValue: number = 2;

  const sumFunction = (a: number = 1, b: number = 1): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>

      <span>
        El primer resultado de {firstValue} + {secondValue} es:
        {sumFunction(firstValue, secondValue)}
      </span>

      <br />

      <span>
        El segundo resultado es:
        {sumFunction()}
      </span>
    </>
  );
};
