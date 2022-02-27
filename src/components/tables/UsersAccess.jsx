import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function UsersAccess(props) {


    const [userAccesses, setUserAccesses] = useState([])

    useEffect(() => {
        axios.get("/api/v1/userAccesses")
            .then(resp => {
                console.log(resp)
                setUserAccesses(resp.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список доступа пользователей</b></h1>
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
                            <th>Почта</th>
                            <th>Пароль</th>
                        </tr>
                        </thead>
                        {
                            userAccesses.length === 0 ?
                                <div style={{textAlign: "center"}}>
                                    <span style={{paddingTop: "0.3%", paddingLeft: "35%", position: "absolute"}}>
                                        <Spinner animation="border"/>
                                    </span>
                                </div>
                                :
                                <tbody>
                                {
                                    userAccesses.map((userAccess, index) =>
                                        <tr key={index}>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{userAccess.email}</b></td>
                                            <td><b>{userAccess.hashPassword}</b></td>
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


export default UsersAccess;