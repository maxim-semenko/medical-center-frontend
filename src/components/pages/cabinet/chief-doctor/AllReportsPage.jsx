import React from 'react';
import NavigationBar from "../../../common/NavigationBar";
import {Accordion, Button, Container} from "react-bootstrap";
import Footer from "../../../common/Footer";
import {Link} from "react-router-dom";

function AllReportsPage() {

    const Content = () => {
        return (
            <Container className="main-container" style={{marginBottom: "11%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список отчетов</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet/chief-doctor">
                            <Button variant="outline-danger" size="lg">Назад</Button>
                        </Link>
                    </div>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><b>Отчет о наиболее частых болезнях</b></Accordion.Header>
                            <Accordion.Body>
                                Описание: Представляет список болезней, которыми пациенты болели наибольшее количество
                                раз.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><b>Отчет о вакцинации пациентов</b></Accordion.Header>
                            <Accordion.Body>
                                Описание: Представляет список привитых пациентов и чем они привились.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><b>Отчет о самой рисковой группе населения по
                                возрасту</b></Accordion.Header>
                            <Accordion.Body>
                                Описание: Представляет список возрастных групп пациентов, которые больше всех
                                подвержаны заболеваниям.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><b>Отчет о истории болезни пациента</b></Accordion.Header>
                            <Accordion.Body>
                                Описание: Представляет список всех историй болезни выбранного пациента.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><b>Отчет о всех сотрудниках</b></Accordion.Header>
                            <Accordion.Body>
                                Описание: Представляет список с информацией о всех сотрудниках.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </Container>

        )
    }

    return (
        <div>
            <NavigationBar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default AllReportsPage;