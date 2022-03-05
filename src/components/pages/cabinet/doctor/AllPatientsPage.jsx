import React from 'react';
import NavigationBar from "../../../common/NavigationBar";
import {Button, Container, Table} from "react-bootstrap";
import Footer from "../../../common/Footer";
import {Link} from "react-router-dom";

function AllPatientsPage() {

    const Content = () => {
        return (
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список пациентов</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet/doctor">
                            <Button variant="outline-danger" size="lg">Назад</Button>
                        </Link>
                    </div>
                    <Table striped bordered hover style={{textAlign: "center"}}>
                        <thead>
                        <tr>
                            <th>Номер</th>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Действие</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td width="30%">Иван</td>
                            <td width="30%">Иванов</td>
                            <td>
                                <Button variant="outline-success"><b>Изменить историю болезней</b></Button>{' '}
                                <Button variant="outline-warning"><b>Подробнее</b></Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Container>
            </Container>
        )
    }

    return (
        <div>
            <NavigationBar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default AllPatientsPage;