import React, {useState} from 'react';
import NavigationBar from "../../../common/NavigationBar";
import {Accordion, Button, Col, Container, Form, Row} from "react-bootstrap";
import Footer from "../../../common/Footer";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import {saveAs} from 'file-saver';

function AllReportsPage() {

    const dataReports = [
        {
            name: "Отчет о наиболее частых болезнях",
            description: "Представляет список болезней, которыми пациенты болели наибольшее количество раз.",
            url: "",
            filename: "частые_болези"
        },
        {
            name: "Отчет о вакцинации пациентов",
            description: "Представляет список привитых пациентов и чем они привились.",
            url: "",
            filename: "вакцинация_пациентов"
        },
        {
            name: "Отчет о самой рисковой группе населения по возрасту",
            description: "Представляет список возрастных групп пациентов, которые больше всех подвержаны заболеваниям.",
            url: "",
            filename: "рисковая_группа_населения_по_возрасту"
        },
        {
            name: "Отчет о всех сотрудниках",
            description: "Представляет список с информацией о всех сотрудниках.",
            url: "",
            filename: "Сотрудники"
        },
        {
            name: "Отчет о истории болезни пациента",
            description: "Представляет список всех историй болезни выбранного пациента.",
            url: "",
            showInput: true,
            filename: "история_болезни_пациента"
        },
    ];

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)


    const [startDateError, setStartDateError] = useState('');
    const [endDateError, setEndDateError] = useState('');


    const changeStartDateHandler = (date) => {
        setStartDate(date)
        setStartDateError('')
    }

    const getReport = (url, type) => {
        axios.get("/api/v1/reports/report-employee", {
            responseType: type === "csv" ? '' : 'blob',
            params: {type: type},
        })
            .then(resp => {
                switch (type) {
                    case "csv":
                        saveAs(new Blob(["\uFEFF" + resp.data]), 'Сотрудники.csv');
                        break;
                    case "excel":
                        saveAs(new Blob([resp.data]), 'Сотрудники.xlsx');
                        break;
                    case "pdf":
                        saveAs(new Blob([resp.data]), 'Сотрудники.pdf');
                        break
                    default:
                        console.log("ERROR")
                }
            });
    }

    const Content = () => {
        return (
            <Container className="main-container" style={{marginBottom: "8%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список отчетов</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet/chief-doctor">
                            <Button variant="outline-danger" size="lg">Назад</Button>
                        </Link>{' '}
                        <Button variant="outline-info" size="lg" onClick={() => getReport(1, "csv")}>CSV</Button>
                        <Button variant="outline-info" size="lg" onClick={() => getReport(2, "excel")}>EXCEL</Button>
                        <Button variant="outline-info" size="lg" onClick={() => getReport(3, "pdf")}>PDF</Button>
                    </div>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label><b>Начальная дата</b></Form.Label>
                                    <br/>
                                    <DatePicker
                                        className={!startDateError ? "my-date-picker" : "my-date-picker-invalid"}
                                        selected={startDate}
                                        placeholderText="Выберите начальную дату"
                                        onChange={changeStartDateHandler}
                                        locale="ru"
                                        dateFormat="dd/MM/yyyy"
                                    />
                                    <p className="text-error"
                                       style={{visibility: startDateError ? 'visible' : 'hidden'}}>{startDateError}</p>
                                    <Form.Control.Feedback type='invalid'>{startDateError}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label><b>Конечная дата</b></Form.Label>
                                    <br/>
                                    <DatePicker
                                        className={!startDateError ? "my-date-picker" : "my-date-picker-invalid"}
                                        selected={startDate}
                                        placeholderText="Выберите конечную дату"
                                        onChange={changeStartDateHandler}
                                        locale="ru"
                                        dateFormat="dd/MM/yyyy"
                                    />
                                    <p className="text-error"
                                       style={{visibility: startDateError ? 'visible' : 'hidden'}}>{startDateError}</p>
                                    <Form.Control.Feedback type='invalid'>{startDateError}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                    <Accordion>
                        {
                            dataReports.map((report, index) =>
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header><b>{report.name}</b></Accordion.Header>
                                    <Accordion.Body>
                                        <div>Описание: {report.description}</div>
                                        {
                                            report.showInput ?
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Control placeholder="Введите паспорт пациента"/>
                                                    </Form.Group>
                                                </Form>
                                                :
                                                null
                                        }
                                        <Button variant="outline-primary" size="sm">Печать (pdf)</Button>{' '}
                                        <Button variant="outline-primary" size="sm">Печать (excel)</Button>{' '}
                                        <Button variant="outline-primary" size="sm">Печать (csv)</Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        }
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
