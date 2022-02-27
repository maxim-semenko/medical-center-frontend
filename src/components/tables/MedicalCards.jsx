import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function MedicalCards(props) {


    const [medicalCards, setMedicalCards] = useState([])

    useEffect(() => {
        axios.get("/api/v1/medicalCards")
            .then(resp => {
                console.log(resp)
                setMedicalCards(resp.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список медицинских карт</b></h1>
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
                            <th>ID Пользоватя</th>
                            <th>ID Врача</th>
                            <th>Начало</th>
                            <th>Конец</th>
                            <th>Описание</th>
                            <th>Реабилитация</th>
                            <th>Подтверждение</th>
                            <th>Болезнь ID</th>
                        </tr>
                        </thead>
                        {
                            medicalCards.length === 0 ?
                                <div style={{textAlign: "center"}}>
                                    <span style={{paddingTop: "0.3%", paddingLeft: "35%", position: "absolute"}}>
                                        <Spinner animation="border"/>
                                    </span>
                                </div>
                                :
                                <tbody>
                                {
                                    medicalCards.map((medicalCard, index) =>
                                        <tr key={index}>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{medicalCard.userId}</b></td>
                                            <td><b>{medicalCard.employeeId}</b></td>
                                            <td><b>{medicalCard.startDate}</b></td>
                                            <td><b>{medicalCard.endDate}</b></td>
                                            <td><b>{medicalCard.description}</b></td>
                                            <td><b>{medicalCard.isRehabilitation ? 'да' : 'нет'}</b></td>
                                            <td><b>{medicalCard.isConfirmation ? 'да' : 'нет'}</b></td>
                                            <td><b>{medicalCard.diseaseId}</b></td>
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


export default MedicalCards;