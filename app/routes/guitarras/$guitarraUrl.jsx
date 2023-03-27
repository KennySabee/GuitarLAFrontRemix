/* El signo de $ en el nombre es para hacer rutas dinamicas */
import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);

  /* para manejar los errores, en caso de que no haya nada tira el error, pero como no retorna nada el loader saldria data undefined por ello en meta toca poner un condicional, el Response es de react router dom */
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }

  return guitarra;
}

export function meta({ data }) {
  /* ese data de atributo ya viene en remix cuando usamos loader y retorna algo por default, el data es de strapi por eso ponemos data.data */
  if (!data) {
    return {
      title: "GuitarLA - Guitarra no encontrada",
      descripcion: `Guitarras, venta de guitarras, guitarra no encontrada`,
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`,
  };
}

const Guitarra = () => {
  const { agregarCarrito } = useOutletContext();
  const [cantidad, setCantidad] = useState(0);
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Debes seleccionar una cantidad");
      return;
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    };
    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <div className="guitarra">
      <img
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="cantidad">Cantidad</label>
          <select
            id="cantidad"
            onChange={(e) =>
              setCantidad(+e.target.value)
            } /* el + es como poner parseInt pa convertir a num el string */
          >
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </div>
  );
};

export default Guitarra;
