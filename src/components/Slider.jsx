import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          width={420}
          height={800}
          className="d-block w-100"
          src="./img/first.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Форма заявки</h3>
          <p>Здесь никогда не будет вашей рекламы</p>
          <Link exact to={'/form'}>
            <Button variant="primary">Обратная связь</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          width={420}
          height={800}
          className="d-block w-100"
          src="./img/second.jpg"
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={420}
          height={800}
          className="d-block w-100"
          src="./img/three.jpg"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
