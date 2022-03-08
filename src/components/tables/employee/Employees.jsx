import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function Employees(props) {


    const [employees, setEmployees] = useState([])

    useEffect(() => {
        axios.get("/api/v1/employees")
            .then(resp => {
                console.log(resp)
                setEmployees(resp.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список сотрудников</b></h1>
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
                            <th>Квалиффикация</th>
                            <th>Роль ID</th>
                        </tr>
                        </thead>
                        {
                            employees.length === 0 ?
                                <div style={{textAlign: "center"}}>
                                    <span style={{paddingTop: "0.3%", paddingLeft: "35%", position: "absolute"}}>
                                        <Spinner animation="border"/>
                                    </span>
                                </div>
                                :
                                <tbody>
                                {
                                    employees.map((employee, index) =>
                                        <tr key={index}>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{employee.firstname}</b></td>
                                            <td><b>{employee.lastname}</b></td>
                                            <td><b>{employee.speciality}</b></td>
                                            <td><b>{employee.roleId}</b></td>
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


export default Employees;