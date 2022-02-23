import React from 'react';
import {Carousel} from "react-bootstrap";
import imgSlide1 from "../../img/slide1.jpg";
import imgSlide2 from "../../img/slide2.jpg";
import imgSlide3 from "../../img/slide3.jpg";

function CarouselAboutComponents() {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={imgSlide1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{top: "50%", transform: "translateY(-50%)"}}>
                        <h1><b>Посещение врача на дом</b></h1>
                        <p>В любое время суток Вы можете вызвать врача на дом</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={imgSlide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{top: "50%", transform: "translateY(-50%)"}}>
                        <h1><b>Новейшие технологии</b></h1>
                        <p>Наши клиенты получают самое лучшее обследование</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={imgSlide3}
                        alt="Third slide"
                    />
                    <Carousel.Caption style={{top: "50%", transform: "translateY(-50%)"}}>
                        <h1><b>Удобные помещения</b></h1>
                        <p>Вы получаете комфорт и уют</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselAboutComponents;