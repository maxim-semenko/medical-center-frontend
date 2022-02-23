import React from 'react';
import NavigationBar from "../../../../common/NavigationBar";
import {Button, Container, Table} from "react-bootstrap";
import Footer from "../../../../common/Footer";
import {Link} from "react-router-dom";

function AllVaccinesPage(props) {
    return (
        <div>
            <NavigationBar/>
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список вакцин</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet/chief-doctor">
                            <Button variant="outline-danger" size="lg">Назад</Button>
                        </Link>
                        {' '}
                        <Button variant="outline-primary" size="lg">Добавить</Button>

                    </div>
                    <Table striped bordered hover style={{textAlign: "center"}}>
                        <thead>
                        <tr>
                            <th width="5%">Номер</th>
                            <th width="30%">Название</th>
                            <th width="45%">Описание</th>
                            <th>Действие</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Спутник</td>
                            <td>Российская вакцина</td>
                            <td><Button variant="outline-success"><b>Изменить</b></Button>{' '}
                                <Button variant="outline-danger"><b>Удалить</b></Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Container>
            </Container>
            <Footer/>
        </div>
    );
}

export default AllVaccinesPage;