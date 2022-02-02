import React from 'react';
import NavigationBar from "../NavigationBar";
import {Button, Col, Container, Row} from "react-bootstrap";
import Footer from "../Footer";

function Cabinet(props) {
    return (
        <div>
            <NavigationBar/>
            <Container style={{
                marginTop: "3%",
                marginBottom: "3%",
                paddingTop: "10px",
                paddingBottom: "25px",
                background: "#F8F9FA"
            }}>
                <h1><b>Ваш кабинет</b></h1>
                <hr/>
                <Container>
                    <Row>
                        <Col style={{textAlign: "left", paddingBottom: "3%"}}>
                            <p><b>Имя: </b> </p>
                            <p><b>Фамилия: </b> </p>
                            <p><b>Логин: </b> </p>
                            <p><b>Почта: </b> </p>
                            <Button variant="outline-info" size="lg">Редактировать</Button>
                        </Col>
                        <div className="d-grid gap-2">
                            <Button variant="success" size="lg">
                                Запись на прием
                            </Button>
                            <Button variant="secondary" size="lg">
                                История болезней
                            </Button>
                        </div>
                    </Row>
                </Container>
            </Container>
            <Footer/>
        </div>
    );
}

export default Cabinet;