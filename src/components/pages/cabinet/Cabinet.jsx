import React from 'react';
import NavigationBar from "../../common/NavigationBar";
import {Button, Col, Container, Row} from "react-bootstrap";
import Footer from "../../common/Footer";
import {Link} from "react-router-dom";
import '../../../styles/App.css'

function Cabinet() {
    return (
        <div>
            <NavigationBar/>
            <Container className="main-container">
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Ваш кабинет</b></h1>
                <hr/>
                <Container>
                    <Row>
                        <Col>
                            <p><b>Имя: </b></p>
                            <p><b>Фамилия: </b></p>
                            <p><b>Почта: </b></p>
                            <p><b>Возраст: </b></p>
                            <p><b>Группа крови: </b></p>
                            <Link to="/cabinet/edit">
                                <Button variant="outline-primary" size="lg">Редактировать</Button>
                            </Link>
                        </Col>
                        <div className="d-grid gap-2" style={{paddingTop: "3%"}}>
                            <Link to="/cabinet/appointment-doctor">
                                <Button variant="success" size="lg" style={{width: "100%"}}>Запись на прием</Button>
                            </Link>
                            <Link to="/cabinet/history">
                                <Button variant="secondary" size="lg" style={{width: "100%"}}>История болезней</Button>
                            </Link>
                        </div>
                    </Row>
                </Container>
            </Container>
            <br/>
            <Footer/>
        </div>
    );
}

export default Cabinet;