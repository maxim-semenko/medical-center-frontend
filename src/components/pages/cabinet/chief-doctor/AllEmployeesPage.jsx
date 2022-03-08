import React, {useEffect, useState} from 'react';
import NavigationBar from "../../../common/NavigationBar";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import Footer from "../../../common/Footer";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findEmployees} from "../../../../redux/employee/EmployeeAction";

function AllEmployeesPage() {
    const [isInit, setIsInit] = useState(false)
    const dispatch = useDispatch()
    const {employees, loadingEmployees, currentPage, sizePage, totalElements} = useSelector(state => state.employeeDate)


    useEffect(() => {
        if (!isInit) {
            dispatch(findEmployees())
            setIsInit(true)
        }
    }, [isInit])

    const showTable = () => {
        if (loadingEmployees) {
            return <h1 className={"text-center"}><Spinner animation="border"/></h1>
        } else {
            return (
                <Table striped bordered hover style={{textAlign: "center"}}>
                    <thead>
                    <tr>
                        <th width="5%">Номер</th>
                        <th width="35%">Имя</th>
                        <th width="35%">Фамилия</th>
                        <th width="25%">Кваллификация</th>
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
                                </tr>
                            )
                        }
                        </tbody>
                    }
                </Table>
            )
        }
    }

    const Content = () => {
        return (
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список сотрудников</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet/chief-doctor"><Button variant="outline-danger" size="lg">Назад</Button></Link>
                    </div>
                    {showTable()}
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

export default AllEmployeesPage;