import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function Roles(props) {


    const [roles, setRoles] = useState([])

    useEffect(() => {
        axios.get("/api/v1/roles")
            .then(resp => {
                console.log(resp)
                setRoles(resp.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список ролей</b></h1>
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
                            <th>ID</th>
                            <th>Название</th>
                        </tr>
                        </thead>
                        {
                            roles.length === 0 ?
                                <div style={{textAlign: "center"}}>
                                    <span style={{paddingTop: "0.3%", paddingLeft: "35%", position: "absolute"}}>
                                        <Spinner animation="border"/>
                                    </span>
                                </div>
                                :
                                <tbody>
                                {
                                    roles.map((role, index) =>
                                        <tr key={index}>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{role.id}</b></td>
                                            <td><b>{role.name}</b></td>
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


export default Roles;