import React from 'react'
import Slider from 'react-slick';
import { Card,  Image } from "semantic-ui-react";
import { map } from 'lodash'



import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './CarouselHobies.scss'

export function CarouselHobies(props) {

  const { hobby } = props

  const settings = {
    dots: true, // Muestra los indicadores de puntos
    infinite: true, // Carrusel infinito
    speed: 2500, // Velocidad de transición en milisegundos
    slidesToShow: 1, // Cantidad de elementos a mostrar en cada slide
    slidesToScroll: 1, // Cantidad de elementos a desplazar al hacer clic en los botones de navegación
    autoplay: true, // Reproducción automática
    autoplaySpeed: 20000, // Velocidad de reproducción automática en milisegundos
    centerMode: true, // Centra el slide activo
    centerPadding: '0px', // Espacio de padding en los slides laterales
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
    <div className='hobies'>
      <Slider {...settings}>
        {map(hobby, (hobby, index) => (
              <Card key={index}>
                <Image src={hobby.image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{hobby.title}</Card.Header>

                  <Card.Description>
                    {hobby.description}
                  </Card.Description>
                </Card.Content>   
              </Card>
            ))}
      </Slider>
    
    </div>
  )
}
