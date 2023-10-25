interface PersonInterface {
  name: string;
  age: number;
  adress: AdressSubInterface;
}

interface AdressSubInterface {
  country: string;
  houseNo: number;
}

export const ObjetosLiterales = () => {
  const person: PersonInterface = {
    name: "Nombre",
    age: 35,
    adress: {
      country: "Peru",
      houseNo: 258,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      {/* {JSON.stringify(person, null, 3)} */}
      <code>
        <pre>{JSON.stringify(person, null, 3)}</pre>
      </code>
    </>
  );
};
