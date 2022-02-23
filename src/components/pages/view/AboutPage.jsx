import React from 'react';
import NavigationBar from "../../common/NavigationBar";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "../../common/Footer";
import CarouselAboutComponents from "../../common/CarouselAboutComponents";
import imgAbout from "../../../img/center.jpg";

function AboutPage() {
    return (
        <div>
            <NavigationBar/>
            <Container className="main-container">
                <Row>
                    <Container>
                        <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>О нас</b></h1>
                        <hr/>
                        <Row style={{paddingBottom: "3%"}}>
                            <Col>
                                <img alt="" src={imgAbout} width="100%" className="d-inline-block align-top"/>{' '}
                            </Col>
                            <Col>
                                <p style={{textAlign: "justify", fontSize: "1.9vw"}}>
                                    Многопрофильный медицинский центр «Валерия» уже два десятилетия занимает
                                    лидирующие позиции на рынке частных медицинских услуг Республики Беларусь.
                                    Все виды медицинской деятельности центра соответствуют требованиям Министерства
                                    здравоохранения Республики Беларусь.
                                </p>
                            </Col>
                        </Row>
                        <div style={{paddingBottom: "3%"}}>
                            <CarouselAboutComponents/>
                        </div>
                        <div style={{paddingBottom: "3%"}}>
                            <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Наши контакты</b></h1>
                            <hr/>
                            <Container>
                                <div>
                                    <p>Телефон: +375 (33) 333-97-03</p>
                                    <p>Городскойй телефон: 	8-017-29-15-41</p>
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