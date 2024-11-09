import React from "react";

const Card = ({nombre, titulo}) => {
  return (
    <div>
      <h3>Gracias, por utilizar nuestra pagina: {nombre}! </h3>
      <h3>Te enviamos a tu email el pdf del libro: {titulo} ¡Que lo disfrutes!</h3>
    </div>
  );
};

export default Card;
