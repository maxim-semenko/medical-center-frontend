import React, {useEffect, useState} from 'react';
import NavigationBar from "../../../../common/NavigationBar";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import Footer from "../../../../common/Footer";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findEmployeeById, findEmployees} from "../../../../../redux/employee/EmployeeAction";
import AboutEmployeeModal from "./AboutEmployeeModal";

function AllEmployeesPage() {
    const [isInit, setIsInit] = useState(false)
    const dispatch = useDispatch()
    const {employees, loadingEmployees} = useSelector(state => state.employeeDate)
    const [showAboutEmployeeDialog, setShowAboutEmployeeDialog] = useState(false)

    useEffect(() => {
        if (!isInit) {
            dispatch(findEmployees())
            setIsInit(true)
        }
    }, [isInit])

    const aboutEmployee = (id) => {
        dispatch(findEmployeeById(id))
        setShowAboutEmployeeDialog(true);
    }

    const showTable = () => {
        if (loadingEmployees) {
            return <h1 className={"text-center"}><Spinner animation="border"/></h1>
        } else {
            return (
                <Table striped bordered hover style={{textAlign: "center"}}>
                    <thead>
                    <tr>
                        <th width="5%">Номер</th>
                        <th width="30%">Имя</th>
                        <th width="30%">Фамилия</th>
                        <th width="25%">Кваллификация</th>
                        <th width="10%">Действие</th>
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
                                    <td><Button variant="outline-info"
                                                onClick={() => aboutEmployee(employee.id)}>Инфо</Button></td>
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
                        <Link to="/cabinet/chief-doctor">
                            <Button variant="outline-danger" size="lg">Назад</Button></Link>
                    </div>
                    {showTable()}
                </Container>
            </Container>
        )
    }

    const showDialogs = () => {
        if (showAboutEmployeeDialog) {
            return (
                <AboutEmployeeModal
                    show={showAboutEmployeeDialog}
                    onHide={() => setShowAboutEmployeeDialog(false)}
                />
            )
        }
    }

    return (
        <div>
            {showDialogs()}
            <NavigationBar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default AllEmployeesPage;
