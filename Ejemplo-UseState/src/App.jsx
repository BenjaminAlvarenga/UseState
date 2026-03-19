import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import InputText from "./components/InputText";

function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);
  
  const [tarea, setTarea] = useState(0)
  const [listado, setListado] = useState([])

  const Sumar = () => {
    let suma = parseInt(numero1) + parseInt(numero2);
    setResultado(suma);
  };

  const Resta = () => {
    let resta = parseInt(numero1) - parseInt(numero2);
    setResultado(resta);
  };

  const Multiplicar = () => {
    let multiplo = parseInt(numero1) * parseInt(numero2);
    setResultado(multiplo);
  };

  const Dividir = () => {
    let dividir = parseInt(numero1) / parseInt(numero2);
    setResultado(dividir);
  };

  const agregarTarea = () => {
    if(tarea.trim() !== "") {
      setListado([...listado, tarea])
      setTarea("")
    }
  }


  return (
    <>
      <h1>Operaciones de dos numeros</h1>
      <InputText
        label="Ingrese el primer numero"
        value={numero1}
        onChange={(event) => setNumero1(event.target.value)}
        type="number"
      />
      <InputText
        label="Ingrese el primer numero"
        value={numero2}
        onChange={(event) => setNumero2(event.target.value)}
        type="number"
      />
      <Button label="Sumar" onClick={Sumar} />
      <Button label="Resta" onClick={Resta} />
      <Button label="Multiplicacion" onClick={Multiplicar} />
      <Button label="Divicion" onClick={Dividir} />
      <h2>Resultado: {resultado}</h2>

      <InputText
        label="Ingrese tarea"
        value={tarea}
        onChange={(event) => setTarea(event.target.value)}
        type="text"       
      />
      <Button 
      label={"Agregar"} onClick={agregarTarea}/>

      <ul>
        {listado.map((tarea, index) =>(
        <li key={index}>{tarea}</li>
      ))}
      </ul>

    </>
  );
}

export default App;
