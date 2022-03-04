import React, {useEffect, useState} from 'react';
import NavigationBar from "../../../common/NavigationBar";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import Footer from "../../../common/Footer";
import {Link} from "react-router-dom";
import axios from "axios";

function AllEmployeesPage() {

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
            <NavigationBar/>
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список сотрудников</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet/chief-doctor">
                            <Button variant="outline-danger" size="lg">Назад</Button>
                        </Link>
                    </div>
                    {
                        employees.length === 0 ?
                            <h1 className={"text-center"}><Spinner animation="border"/></h1>
                            :
                            <Table striped bordered hover style={{textAlign: "center"}}>
                                <thead>
                                <tr>
                                    <th>Номер</th>
                                    <th>Имя</th>
                                    <th>Фамилия</th>
                                    <th>Почта</th>
                                    <th>Кваллификация</th>
                                </tr>
                                </thead>
                                {
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
                    }

                </Container>
            </Container>
            <Footer/>
        </div>
    );
}

export default AllEmployeesPage;