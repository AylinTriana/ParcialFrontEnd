import { useState } from "react";
import Libro from "./Components/Libro";
import { libros } from "./Libros";
import Form from "./Components/Form";

const App = () => {
  const [isSelected, setisSelected] = useState({
    autor: null,
    status: false,
  });

  return (
    <div className="cont">
    {isSelected.status ? <Form titulo={isSelected.titulo} /> : null}
    {libros.map((biblioteca) => (
      <Libro
      setisSelected={setisSelected}
      biblioteca={biblioteca}
      key={biblioteca.id}
      />
    ))}
    </div>
  );
}

export default App

