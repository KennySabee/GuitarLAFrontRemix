import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'
import {useOutletContext} from '@remix-run/react'

export function meta(){
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: 'Venta de guitarras, blog de música'
  }
}

export function links(){
  return [
    {
      rel: 'styleSheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'

    }
  ]
}

function Nosotros() {
  
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ligula commodo nisl suscipit volutpat non ac tellus. Vivamus lacinia dui mauris, id consequat mi volutpat eget. Donec vel lorem elit. Fusce eleifend cursus auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vel porta sapien. Fusce convallis ultricies massa quis gravida. Quisque finibus magna lectus, sit amet dictum ipsum porttitor vitae.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ligula commodo nisl suscipit volutpat non ac tellus. Vivamus lacinia dui mauris, id consequat mi volutpat eget. Donec vel lorem elit. Fusce eleifend cursus auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vel porta sapien. Fusce convallis ultricies massa quis gravida. Quisque finibus magna lectus, sit amet dictum ipsum porttitor vitae.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
