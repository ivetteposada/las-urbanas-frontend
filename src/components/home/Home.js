import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

function Home() {  
  return (    
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={'https://i.postimg.cc/J0yjnFhN/IMG-0048-copia.jpg'}          
          alt="First slide"          
        />
        <Carousel.Caption>
          <h1 className='carousel-title'>Taco de camarón</h1>
          <p className='corusel-p'>Camarón guisado al ajillo montado en una costra de queso y tortilla de maíz, acompañado de aguacate, repollo y chipotle.</p>
          <Link to="/menu">
            <button className='order-btn'>Menú</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  carousel-image"
          src={'https://i.postimg.cc/Vv3nbFS3/IMG-1035.jpg'}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 className='carousel-title'>Empire State Burguer</h1>
          <p className='corusel-p'>Carne de sirloin, queso, tocino, aguacate, vegetales y aderezos.</p>
          <Link to="/menu">
            <button className='order-btn'>Menú</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  carousel-image"
          src={'https://i.postimg.cc/gj42wq9g/IMG-1906.jpg'}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className='carousel-title'>Bryant Chips</h1>
          <p className='corusel-p'>Papas caseras con cacahuate, limón, pepino, salsa picante y nuestra salsa secreta</p>
          <Link to="/menu">
            <button className='order-btn'>Menú</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export {Home};