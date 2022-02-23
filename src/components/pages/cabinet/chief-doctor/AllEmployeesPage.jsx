import React from 'react';
import NavigationBar from "../../../common/NavigationBar";
import {Button, Container, Table} from "react-bootstrap";
import Footer from "../../../common/Footer";
import {Link} from "react-router-dom";

function AllEmployeesPage() {
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
                        <tbody>
                        <tr>
                            <td width="5%">1</td>
                            <td width="25%">Иван</td>
                            <td width="25%">Иваонов</td>
                            <td width="25%">ivan@gmail.com</td>
                            <td width="20%">Хирург</td>
                        </tr>
                        </tbody>
                    </Table>
                </Container>
            </Container>
            <Footer/>
        </div>
    );
}

export default AllEmployeesPage;