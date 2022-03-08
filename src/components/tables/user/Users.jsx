import React, {useEffect, useState} from 'react';
import {Button, Container, Spinner, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("/api/v1/users")
            .then(resp => {
                console.log(resp)
                setUsers(resp.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список пользователей</b></h1>
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
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Паспорт</th>
                            <th>Возраст</th>
                            <th>Группа крови</th>
                            <th>Роль ID</th>
                        </tr>
                        </thead>
                        {
                            users.length === 0 ?
                                <div style={{textAlign: "center"}}>
                                    <span style={{paddingTop: "0.3%", paddingLeft: "35%", position: "absolute"}}>
                                        <Spinner animation="border"/>
                                    </span>
                                </div>
                                :
                                <tbody>
                                {
                                    users.map((user, index) =>
                                        <tr key={index}>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{user.firstname}</b></td>
                                            <td><b>{user.lastname}</b></td>
                                            <td><b>{user.passport}</b></td>
                                            <td><b>{user.age}</b></td>
                                            <td><b>{user.bloodType}</b></td>
                                            <td><b>{user.roleId}</b></td>
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

export default Users;