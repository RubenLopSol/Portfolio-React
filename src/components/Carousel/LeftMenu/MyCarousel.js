import React  from 'react';
import Slider from 'react-slick';
import { map } from 'lodash';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss';

export function MyCarousel(props) {
  
  const {logos} = props;

  const settings = {
    dots: false, // Muestra los indicadores de puntos
    infinite: true, // Carrusel infinito
    speed: 500, // Velocidad de transición en milisegundos
    slidesToShow: 2, // Cantidad de elementos a mostrar en cada slide
    slidesToScroll: 1, // Cantidad de elementos a desplazar al hacer clic en los botones de navegación
    autoplay: true, // Reproducción automática
    autoplaySpeed: 3000, // Velocidad de reproducción automática en milisegundos
    centerMode: true, // Centra el slide activo
    centerPadding: '10px', // Espacio de padding en los slides laterales
    responsive: [
      {
        breakpoint: 768, // Ancho de pantalla en el que se aplicará el cambio
        settings: {
          slidesToShow: 1, // Cantidad de elementos a mostrar en cada slide en pantallas pequeñas
        }
      }
    ]
  };

  return (
<div className="carousel-container">
      <Slider {...settings}>

        {map(logos, (logos, index) => (

        <div className="carousel-slide" key={index}>
          <img src={logos.image} alt={logos.name} />
        </div>

        ))}

      </Slider>
    </div>
  );
}
