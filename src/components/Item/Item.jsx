import React from "react";
import StyleItem from './Item.css'


const Item = ({ producto }) => {
  console.log(producto.nombre);

  return (
    <>
    <div className="Card">
    <h1 className="Titulo">{producto.nombre}</h1>
    <h3 className="Precio">{producto.precio}</h3>
    <p className="Detalle">{producto.detail}</p>
    <img className="Imagen" src={producto.img} alt="torta" width={400}/>
    </div>
   
    </>
  );
};

export default Item;
