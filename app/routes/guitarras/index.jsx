import { useLoaderData, Outlet } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "~/components/listado-guitarras";

export function meta() {
  return {
    title: "GuitarLa - Tienda de Guitarras",
    description: "GuitarLa - Nuestra colección de guitarras",
  };
}

export async function loader() {
  const guitarras = await getGuitarras();

  return guitarras.data;
}

const Tienda = () => {
  const guitarras = useLoaderData();

  return <ListadoGuitarras guitarras={guitarras} />;
};

export default Tienda;
