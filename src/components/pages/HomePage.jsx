import '../../styles/App.css';
import NavigationBar from "../NavigationBar";
import {Button, Col, Container, Row} from "react-bootstrap"
import Footer from "../Footer";
import imgHome from '../../img/home.jpg'
import imgDoctor1 from '../../img/doctor1.jpg'
import imgDoctor2 from '../../img/doctor2.jpg'
import imgDoctor3 from '../../img/doctor3.jpg'
import imgLaboratory from '../../img/laboratory.jpg'
import React from "react";
import {Link} from "react-router-dom";


function HomePage() {
    return (
        <div>
            <NavigationBar/>
            <Container style={{marginTop: "3%", marginBottom: "3%", paddingTop: "10px", background: "#F8F9FA"}}>
                <Row>
                    <Container>
                        <h1 style={{textAlign: "center", marginLeft: "12px", marginBottom: "15px"}}><b>Главная</b></h1>
                        <hr/>
                        <Row style={{paddingBottom: "3%"}}>
                            <Col>
                                <img alt="" src={imgHome} width="100%" className="d-inline-block align-top"/>{' '}
                            </Col>
                            <Col>
                                <div>
                                    <ul>
                                        <span style={{textAlign: "left", fontSize: "46px"}}>
                                            <li><b><u>Лучшие специалисты</u></b></li>
                                        </span>
                                        <span style={{textAlign: "left", fontSize: "46px"}}>
                                            <li><b><u>Лучшие методики</u></b></li>
                                        </span>
                                        <span style={{textAlign: "left", fontSize: "46px"}}>
                                            <li><b><u>Лучшие подходы</u></b></li>
                                        </span>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{paddingBottom: "3%"}}>
                            <Col>
                                <img alt="" src={imgLaboratory} width="100%" className="d-inline-block align-top"/>{' '}
                            </Col>
                            <Col>
                                <div>
                                    <p style={{textAlign: "left", fontSize: "36px"}}>
                                        Каждый день мы следим за новыми открытиями и инновациями в области медицины
                                            и делаем все возможное, чтобы наши мединцинские центры оборудовались
                                            последними новейшими технологиями
                                    </p>
                                </div>
                                <div style={{textAlign: "left"}}>
                                    <Link to="/about">
                                        <Button variant="success" size="lg">Подробнее о нас</Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                        <div style={{paddingBottom: "3%"}}>
                            <h1><b>Наши лучшие специалисты</b></h1>
                            <hr/>
                            <Row>
                                <Col>
                                    <h2>Татьяна Навицкая</h2>
                                    <img src={imgDoctor1}
                                         class="rounded-circle"
                                         id="img-develop"
                                         alt="photo"
                                         width="50%"/>
                                    <br/>
                                    <b>Врач-терапевт</b>
                                </Col>
                                <Col>
                                    <h2>Петр Иванов</h2>
                                    <img src={imgDoctor2}
                                         class="rounded-circle"
                                         id="img-develop"
                                         width="50%"
                                         alt="photo"/>
                                    <br/>
                                    <b>Врач-офтальмолог</b>
                                </Col>
                                <Col>
                                    <h2>Дмитрий Мелих</h2>
                                    <img src={imgDoctor3}
                                         class="rounded-circle"
                                         id="img-develop"
                                         width="50%"
                                         alt="photo"/>
                                    <br/>
                                    <b>Врач-хирург</b>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default HomePage;
