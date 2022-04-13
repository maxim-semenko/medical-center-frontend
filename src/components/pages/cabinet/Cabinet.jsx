import React, {useEffect, useState} from 'react';
import NavigationBar from "../../common/NavigationBar";
import {Button, Col, Container, Row} from "react-bootstrap";
import Footer from "../../common/Footer";
import {Link} from "react-router-dom";
import '../../../styles/App.css'
import jwt_decode from "jwt-decode";
import {Cookies} from "react-cookie";

function Cabinet() {
    const [user, setUser] = useState(null)
    const [role, setRole] = useState('')

    useEffect(() => {
        const cookies = new Cookies()
        setUser(JSON.parse(localStorage.getItem("current_user")));
        const decoded = jwt_decode(cookies.get("token"));
        setRole(decoded.role)
    }, [])


    const AdditionCabinet = () => {
        switch (role) {
            case "USER":
                return (
                    <Row>
                        <Col>
                            <p><b>Имя: </b>{user.firstname}</p>
                            <p><b>Фамилия: </b>{user.lastname}</p>
                            <p><b>Паспорт: </b>{user.passport}</p>
                            <p><b>Возраст: </b>{user.age}</p>
                            <p><b>Группа крови: </b>{user.bloodType}</p>
                            <p><b>Ваши вакцинации: </b>{
                                user.vaccine.map((item) =>
                                    <span>{item.name}, </span>
                                )
                            }</p>
                            <Link to="/cabinet/edit">
                                <Button variant="outline-primary" size="lg"><b>Редактировать</b></Button>
                            </Link>
                        </Col>
                        <div className="d-grid gap-2" style={{paddingTop: "3%"}}>
                            <Link to="/cabinet/appointment-doctor">
                                <Button variant="success" size="lg" style={{width: "100%"}}>Записи на прием</Button>
                            </Link>
                            <Link to="/cabinet/history">
                                <Button variant="secondary" size="lg" style={{width: "100%"}}>История
                                    болезней</Button>
                            </Link>
                        </div>
                    </Row>
                )
            case "DOCTOR":
            case "HEAD_DOCTOR":
                return (
                    <Row>
                        <Col>
                            <p><b>Имя: </b>{user.firstname}</p>
                            <p><b>Фамилия: </b>{user.lastname}</p>
                            <p><b>Кваллификация: </b>{user.speciality}</p>
                            <Link to="/cabinet/edit">
                                <Button variant="outline-primary" size="lg"><b>Редактировать</b></Button>
                            </Link>
                        </Col>
                        <div className="d-grid gap-2" style={{paddingTop: "3%"}}>
                            {
                                role === "DOCTOR" ?
                                    <Link to="/cabinet/doctor">
                                        <Button variant={"success"} size="lg" style={{width: "100%"}}>Управление
                                            врача</Button>
                                    </Link>
                                    :
                                    <Link to="/cabinet/chief-doctor">
                                        <Button variant={"success"} size="lg" style={{width: "100%"}}>Управление
                                            глав-врача</Button>
                                    </Link>
                            }
                        </div>
                    </Row>
                )
            default:
                console.log("ERROR")
        }
    }

    const Content = () => {
        if (user !== null) {
            return (
                <Container className="main-container" style={{marginBottom: "4%"}}>
                    <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Ваш кабинет</b></h1>
                    <hr/>
                    <Container>
                        {AdditionCabinet()}
                    </Container>
                </Container>
            )
        } else {
            return (<div>loading...</div>)
        }
    }

    return (
        <div>
            <NavigationBar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default Cabinet;
