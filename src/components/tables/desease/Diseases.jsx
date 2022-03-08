import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function Diseases(props) {

    const [diseases, setDiseases] = useState([])

    useEffect(() => {
        axios.get("/api/v1/diseases")
            .then(resp => {
                console.log(resp)
                setDiseases(resp.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список болезней</b></h1>
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
                            <th>Название</th>
                            <th>Описание</th>
                        </tr>
                        </thead>
                        {
                            diseases.length === 0 ?
                                <span style={{paddingTop: "0.3%", paddingLeft: "35%", position: "absolute"}}>
                                        <Spinner animation="border"/>
                                </span>
                                :
                                <tbody>
                                {
                                    diseases.map((disease, index) =>
                                        <tr key={index}>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{disease.name}</b></td>
                                            <td><b>{disease.description}</b></td>
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


export default Diseases;