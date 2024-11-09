import React, { useState } from "react";
import Card from "./Card";

const Form = ({titulo}) => {

  const [lector, setLector] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit =(e) => {
    e.preventDefault();

    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(
      lector.nombre.trim().length >= 3 &&
      regexEmail.test(lector.email) &&
      lector.password.length >= 6
    ) {
      setMostrar(true);
    } else {
      setMostrar(false);
    }
  };

  return (
    <div>
      {mostrar ? ( 
        <Card nombre ={lector.nombre} titulo={titulo} />
      ) : (
        <form onSubmit={handleSubmit}>

          <label>Nombre Completo:</label>
          <input 
          type="text" 
          placeholder="Ingresa tu nombre"
          value={lector.nombre}
          onChange={(e) => setLector({...lector, nombre: e.target.value})}/>

          <label>Email:</label>
          <input 
          type="email" 
          placeholder="Ingresa tu email"
          value={lector.email}
          onChange={(e) => setLector({...lector, email: e.target.value})}/>

          <label>Contraseña:</label>
          <input 
          type="text" 
          placeholder="Ingresa una contraseña"
          value={lector.password}
          onChange={(e) => setLector({...lector, password: e.target.value})}/>
          
          <button>Obtener Libro</button>
          {error ? ( <p> Por favor chequea que la información sea correcta </p> ) : null}
        
        </form>
      )}
    </div>
  );
};

export default Form
