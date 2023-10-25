// import "./App.css";
import { Counter } from "./components/Counter";
import { CounterWithHook } from "./components/CounterWithHook";
import { FormComponent } from "./components/FormComponent";
import { FormComponentOtherExample } from "./components/FormComponentOtherExample";
import { Login } from "./components/Login";
import { UsersComponent } from "./components/UsersComponent";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";

function App() {
  return (
    <div className="mt-2">
      <h1>Introducción a TypeScript con React</h1>
      <hr />

      <TiposBasicos />
      <hr />
      <ObjetosLiterales />
      <hr />
      <Funciones />
      <hr />
      <Counter />
      <hr />
      <CounterWithHook />
      <hr />
      <Login />
      <hr />
      <UsersComponent />
      <hr />
      <FormComponent />
      <hr />
      <FormComponentOtherExample />
    </div>
  );
}

export default App;
