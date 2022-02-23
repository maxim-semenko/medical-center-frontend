import '../../../styles/App.css';
import NavigationBar from "../../common/NavigationBar";
import {Button, Col, Container, Row} from "react-bootstrap"
import Footer from "../../common/Footer";
import imgHome from '../../../img/home.jpg'
import imgLaboratory from '../../../img/laboratory.jpg'
import React from "react";
import {Link} from "react-router-dom";
import TopDoctorsComponent from "../../common/TopDoctorsComponent";

function HomePage() {
    return (
        <div>
            <NavigationBar/>
            <Container className="main-container">
                <Row>
                    <Container>
                        <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Главная</b></h1>
                        <hr/>
                        <Row style={{paddingBottom: "3%"}}>
                            <Col>
                                <img alt="" src={imgHome} width="100%" className="d-inline-block align-top"/>{' '}
                            </Col>
                            <Col>
                                <div style={{fontSize: "3.1vw"}}>
                                    <ul>
                                        <li><b><u>Лучшие специалисты</u></b></li>
                                        <li><b><u>Лучшие методики</u></b></li>
                                        <li><b><u>Лучшие подходы</u></b></li>
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
                                    <p style={{fontSize: "2vw", textAlign: "justify"}}>
                                        Каждый день мы следим за новыми открытиями и инновациями в области медицины
                                        и делаем все возможное, чтобы наши мединцинские центры оборудовались
                                        последними новейшими технологиями
                                    </p>
                                </div>
                                <div>
                                    <Link to="/about">
                                        <Button variant="success" size="lg">Подробнее о нас</Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                        <div style={{paddingBottom: "3%"}}>
                            <TopDoctorsComponent/>
                        </div>
                    </Container>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default HomePage;
