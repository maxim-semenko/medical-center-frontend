import React from 'react'
import {Col, Container, Navbar, Row} from "react-bootstrap"
import RoundedImageComponent from "./RoundedImageComponent";
import img1 from "../../img/programmer1.png";
import img2 from "../../img/programmer2.png";
import img3 from "../../img/programmer3.png";

function Footer() {
    return (
        <Navbar bg="dark" variant="dark" style={{color: "white", paddingTop: "30px", paddingBottom: "30px"}}>
            <Container>
                <div className="text-center">
                    <h1><b>Команда разработчиков</b></h1>
                    <br/>
                    <Row>
                        <Col sm={12} lg={4}>
                            <RoundedImageComponent name="Горегляд Валерий " img={img1}
                                                   profession="Backend-Developer"/>
                        </Col>
                        <Col sm={12} lg={4}>
                            <RoundedImageComponent name="Дубяго Андрей " img={img2}
                                                   profession="QA-Engineer"/>
                        </Col>
                        <Col sm={12} lg={4}>
                            <RoundedImageComponent name="Семенько Максим " img={img3}
                                                   profession="Frontend-Developer"/>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Navbar>
    );
}

export default Footer