import React, {useEffect, useState} from 'react';
import NavigationBar from "../../common/NavigationBar";
import {Button, Col, Container, Row} from "react-bootstrap";
import Footer from "../../common/Footer";
import {Link} from "react-router-dom";
import '../../../styles/App.css'
import axios from "axios";

function Cabinet() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        // ЗАГЛУШКА!!!!
        axios.get("/api/v1/users/1")
            .then(resp => {
                console.log(resp)
                setUser(resp.data)
                localStorage.setItem("currentUser", JSON.stringify(resp.data))
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const Content = () => {
        if (user !== null) {
            return (
                <Container className="main-container" style={{marginBottom: "4%"}}>
                    <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Ваш кабинет</b></h1>
                    <hr/>
                    <Container>
                        <Row>
                            <Col>
                                <p><b>Имя: </b>{user.firstname}</p>
                                <p><b>Фамилия: </b>{user.lastname}</p>
                                <p><b>Почта: </b></p>
                                <p><b>Паспорт: </b></p>
                                <p><b>Возраст: </b></p>
                                <p><b>Группа крови: </b></p>
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