import React from 'react';
import NavigationBar from "../NavigationBar";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import Footer from "../Footer";
import imgAbout from "../../img/center.jpg";
import imgSlide1 from "../../img/slide1.jpg";
import imgSlide2 from "../../img/slide2.jpg";
import imgSlide3 from "../../img/slide3.jpg";

function AboutPage(props) {
    return (
        <div>
            <NavigationBar/>
            <Container style={{marginTop: "3%", marginBottom: "3%", paddingTop: "10px", background: "#F8F9FA"}}>
                <Row>
                    <Container>
                        <h1 style={{textAlign: "center", marginLeft: "12px", marginBottom: "15px"}}><b>О нас</b></h1>
                        <hr/>
                        <Row style={{paddingBottom: "3%"}}>
                            <Col>
                                <img alt="" src={imgAbout} width="100%" className="d-inline-block align-top"/>{' '}
                            </Col>
                            <Col>
                                <p style={{textAlign: "justify", fontSize: "30px"}}>
                                    Многопрофильный медицинский центр «Валерия» уже два десятилетия занимает
                                    лидирующие позиции на рынке частных медицинских услуг Республики Беларусь.
                                    Все виды медицинской деятельности центра соответствуют требованиям Министерства
                                    здравоохранения Республики Беларусь.

                                </p>
                            </Col>
                        </Row>
                        <div style={{paddingBottom: "3%"}}>
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
                                <Carousel.Item>
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
                        <div style={{paddingBottom: "3%"}}>
                            <h1><b>Наши контакты</b></h1>
                            <hr/>
                            <Container>
                                <div style={{textAlign: "left"}}>
                                    <p>Телефон: +375 (33) 333-97-03</p>
                                    <p>Городсокй телефон: 	8-017-29-15-41</p>
                                    <p>Email: med.valeria@gmail.com</p>
                                </div>
                            </Container>
                        </div>
                    </Container>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default AboutPage;