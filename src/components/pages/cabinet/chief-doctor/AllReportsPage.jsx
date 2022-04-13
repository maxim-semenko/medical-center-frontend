import React, {useState} from 'react';
import NavigationBar from "../../../common/NavigationBar";
import {Accordion, Button, Container, Form} from "react-bootstrap";
import Footer from "../../../common/Footer";
import {Link} from "react-router-dom";
import axios from "axios";
import {saveAs} from 'file-saver';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {Cookies} from "react-cookie"

function AllReportsPage() {
    const cookies = new Cookies()
    const [patientPassport, setPatientPassport] = useState('')

    const dataReports = [{
        name: "Отчет о наиболее частых болезнях",
        description: "Представляет список болезней, которыми пациенты болели наибольшее количество раз.",
        url: "/api/v1/reports/diseases-top",
        filename: "частые_болезни"
    }, {
        name: "Отчет о вакцинации пациентов",
        description: "Представляет список привитых пациентов и чем они привились.",
        url: "/api/v1/reports/vaccines-patients",
        filename: "вакцинация_пациентов"
    }, {
        name: "Отчет о самой рисковой группе населения по возрасту",
        description: "Представляет список возрастных групп пациентов, которые больше всех подвержаны заболеваниям.",
        url: "/api/v1/reports/sensitive-population-group",
        filename: "рисковая_группа_населения_по_возрасту"
    }, {
        name: "Отчет о сотрудниках",
        description: "Представляет список с информацией о сотрудниках.",
        url: "/api/v1/reports/about-employees",
        filename: "Сотрудники"
    }, {
        name: "Отчет о истории болезни пациента",
        description: "Представляет список всех историй болезни выбранного пациента.",
        url: "/api/v1/reports/about-patient/",
        showInput: true,
        filename: "история_болезни_пациента"
    },
    ];

    const changePassportHandler = (event) => {
        setPatientPassport(event.target.value)
    }

    const getReport = (report, type) => {
        let url;
        report.showInput ? url = report.url + patientPassport : url = report.url

        axios.get(url, {
            responseType: type === "csv" ? '' : 'blob',
            params: {type: type},
            headers: {'Authorization': `Bearer ${cookies.get("token")}`},
        })
            .then(resp => {
                switch (type) {
                    case "csv":
                        saveAs(new Blob(["\uFEFF" + resp.data]), report.filename + '.csv');
                        break;
                    case "excel":
                        saveAs(new Blob([resp.data]), report.filename + '.xlsx');
                        break;
                    case "pdf":
                        saveAs(new Blob([resp.data]), report.filename + '.pdf');
                        break
                    default:
                        console.log("ERROR")
                }
            })
            .catch(() => {
                notifyError('Произошла ошибка, попробуйте еще раз!')
            });

    }

    const notifyError = (text) => toast.error(text, {
        autoClose: 2000,
        position: "top-right",
    });


    // const Content = () => {
    //     return (
    //
    //
    //     )
    // }

    toast.configure()
    return (
        <div>
            <NavigationBar/>
            <Container className="main-container" style={{marginBottom: "8%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список отчетов</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet/chief-doctor">
                            <Button variant="outline-danger" size="lg">Назад</Button>
                        </Link>{' '}
                    </div>
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
                                                        <Form.Control placeholder="Введите паспорт пациента"
                                                                      onChange={changePassportHandler}/>
                                                    </Form.Group>
                                                </Form>
                                                :
                                                null
                                        }
                                        <Button variant="outline-primary" size="sm"
                                                onClick={() => getReport(report, "pdf")}>Печать (pdf)
                                        </Button>{' '}
                                        <Button variant="outline-primary" size="sm"
                                                onClick={() => getReport(report, "excel")}>Печать (excel)
                                        </Button>{' '}
                                        <Button variant="outline-primary" size="sm"
                                                onClick={() => getReport(report, "csv")}>Печать (csv)
                                        </Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        }
                    </Accordion>
                </Container>
            </Container>
            <Footer/>
        </div>
    );
}

export default AllReportsPage;
