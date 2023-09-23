import React, { useState } from 'react';

function Carrito() {
  // Definir un estado para el carrito
  const [carrito, setCarrito] = useState([]);
  
  // Función para agregar un producto al carrito
  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };

  // Función para quitar un producto del carrito
  const quitarProducto = (indice) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(indice, 1);
    setCarrito(nuevoCarrito);
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <ul>
        {carrito.map((producto, indice) => (
          <li key={indice}>
            {producto} 
            <button onClick={() => quitarProducto(indice)}>Quitar</button>
          </li>
        ))}
      </ul>
      <button onClick={() => agregarProducto("Producto nuevo")}>Agregar Producto</button>
    </div>
  );
}

export default Carrito;
