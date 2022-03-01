import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import Moment from 'moment';
import 'moment/locale/ru';

function Appointments(props) {
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        axios.get("/api/v1/appointments")
            .then(resp => {
                console.log(resp)
                setAppointments(resp.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список записей к врачу</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/tables">
                            <Button variant="outline-danger" size="lg">Назад</Button>
                        </Link>
                    </div>
                    <Table striped bordered hover style={{textAlign: "center"}}>
                        <thead>
                        <tr>
                            <th>Номер</th>
                            <th>ID врача</th>
                            <th>ID пользователя</th>
                            <th>Начало</th>
                            <th>Конец</th>
                            <th>Описание</th>
                        </tr>
                        </thead>
                        {
                            appointments.length === 0 ?
                                <div style={{textAlign: "center"}}>
                                    <span style={{paddingTop: "0.3%", paddingLeft: "35%", position: "absolute"}}>
                                        <Spinner animation="border"/>
                                    </span>
                                </div>
                                :
                                <tbody>
                                {
                                    appointments.map((appointment, index) =>
                                        <tr key={index}>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{appointment.employeeId}</b></td>
                                            <td><b>{appointment.userId}</b></td>
                                            <td><b>{Moment(appointment.startDate).locale('ru').format('LLL')}</b></td>
                                            <td><b>{Moment(appointment.endDate).locale('ru').format('LLL')}</b></td>
                                            <td><b>{appointment.description}</b></td>
                                        </tr>
                                    )
                                }
                                </tbody>
                        }
                    </Table>
                </Container>
            </Container>
        </div>
    );

}

export default Appointments;