export const TiposBasicos = () => {
  let randomValue: string | number | boolean = "string";
  randomValue = 123;
  randomValue = true;

  /* es diferente colocar const age = 25; que const age: number = 25; porque como son constantes entonces en el primero dice que sería de tipo 25 (un poco raro decirlo así), pero en el segundo se le dice que es de tipo number. Sería mejor colocar el tipado de forma explícita */
  // const age = 25;
  const age: number = 25;
  const isActive: boolean = true;

  /* dos formas de colocar */
  const powers: string[] = ["Velocity", "Fly", "Fire"];
  const powers2: Array<string> = ["Super Strength", "Swim"];

  /* colocar dos tipos */
  const randomArray: (string | number)[] = [1, "uno"];

  return (
    <>
      <h3>Tipos Basicos</h3>
      <p>{randomValue === true ? "true" : randomValue}</p>
      <p>{age}</p>
      <p>{isActive ? "active" : "no active"}</p>

      <ul>
        {powers.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>

      <ul>
        {powers2.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>

      {randomArray.join(", ")}
    </>
  );
};
