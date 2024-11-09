import React from "react";

const Libro = ({ biblioteca, setisSelected }) => {
  return (
    <div className="libro-card">
        <h1 className="libro-titulo">{biblioteca.titulo}</h1>
        <h3 className="libro-autor">Autor: {biblioteca.autor}</h3>
        <p className="libro-fecha">Fecha de publicación: {biblioteca.fecha_publicacion}</p>
        <p className="libro-precio">Precio: {`$${biblioteca.precio}`}</p>
        <button className="libro-button" onClick={() => setisSelected({ titulo: biblioteca.titulo, status: true })}>
          Me Interesa
        </button>
      </div>
  );
};

export default Libro;

