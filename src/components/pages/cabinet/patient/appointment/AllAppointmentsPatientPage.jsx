import React, {useEffect, useState} from 'react';
import NavigationBar from "../../../../common/NavigationBar";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import Footer from "../../../../common/Footer";
import {Link} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import CreateUpdateAppointmentModal from "./CreateUpdateAppointmentModal";
import DeleteAppointmentModal from "./DeleteAppointmentModal";
import AboutAppointmentModal from "./AboutAppointmentModal";
import {findAppointmentById, findAppointmentsByUserId} from "../../../../../redux/appointment/AppointmentAction";
import Moment from "moment";

function AllAppointmentsPatientPage() {
    const [isInit, setIsInit] = useState(false)
    const dispatch = useDispatch()
    const {appointments, loadingAppointments} = useSelector(state => state.appointmentDate)

    const [showCreateUpdateAppointmentDialog, setShowCreateUpdateAppointmentDialog] = useState(false)
    const [showDeleteAppointmentDialog, setShowDeleteAppointmentDialog] = useState(false)
    const [showAboutAppointmentDialog, setShowAboutAppointmentDialog] = useState(false)
    const [modeDialog, setModeDialog] = useState('')


    // Пусть в системе пользователь с id = 1
    const userId = JSON.parse(localStorage.getItem("currentUser")).id;

    useEffect(() => {
        if (!isInit) {
            dispatch(findAppointmentsByUserId(0, 0, userId))
            setIsInit(true)
        }
    }, [isInit])


    const createAppointment = () => {
        setShowCreateUpdateAppointmentDialog(true);
        setModeDialog("create")
    }

    const aboutAppointment = (id) => {
        dispatch(findAppointmentById(id))
        setShowAboutAppointmentDialog(true);
    }

    const updateAppointment = (id) => {
        dispatch(findAppointmentById(id))
        setShowCreateUpdateAppointmentDialog(true);
        setModeDialog("update")
    }

    const deleteAppointment = (id) => {
        dispatch(findAppointmentById(id))
        setShowDeleteAppointmentDialog(true)
    }

    const showDialogs = () => {
        if (showCreateUpdateAppointmentDialog) {
            return (
                <CreateUpdateAppointmentModal
                    show={showCreateUpdateAppointmentDialog}
                    onHide={() => setShowCreateUpdateAppointmentDialog(false)}
                    mode={modeDialog}
                />
            )
        }
        if (showDeleteAppointmentDialog) {
            return (
                <DeleteAppointmentModal
                    show={showDeleteAppointmentDialog}
                    onHide={() => setShowDeleteAppointmentDialog(false)}
                />
            )
        }
        if (showAboutAppointmentDialog) {
            return (
                <AboutAppointmentModal
                    show={showAboutAppointmentDialog}
                    onHide={() => setShowAboutAppointmentDialog(false)}
                />
            )
        }
    }

    const ActionButtons = (props) => {
        return (
            <div>
                <Button variant="outline-success" onClick={() => updateAppointment(props.id)}>
                    <b>Изменить</b>
                </Button>{' '}
                <Button variant="outline-danger" onClick={() => deleteAppointment(props.id)}>
                    <b>Удалить</b>
                </Button>{' '}
                <Button variant="outline-info" onClick={() => aboutAppointment(props.id)}>
                    <b>Инфо</b>
                </Button>
            </div>
        )
    }

    const getFullEmployeeName = (employee) => {
        return employee.firstname + " " + employee.lastname + " (" + employee.speciality + ")"
    }

    const Content = () => {
        return (
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список ваших записей на прием</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet"><Button variant="outline-danger" size="lg">Назад</Button></Link>{' '}
                        <Button variant="outline-primary" size="lg"
                                onClick={() => createAppointment()}>Добавить</Button>
                    </div>
                    {
                        loadingAppointments ?
                            <h1 className={"text-center"}><Spinner animation="border"/></h1>
                            :
                            <Table striped bordered hover style={{textAlign: "center"}}>
                                <thead>
                                <tr>
                                    <th width="5%">Номер</th>
                                    <th width="25%">Врач</th>
                                    <th width="20%">Начало</th>
                                    <th width="20%">Конец</th>
                                    <th>Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    appointments.map((appointment, index) =>
                                        <tr key={index}>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{getFullEmployeeName(appointment.employee)}</b></td>
                                            <td><b>{Moment(appointment.startDate).locale('ru').format('LLL')}</b></td>
                                            <td><b>{Moment(appointment.endDate).locale('ru').format('LLL')}</b></td>
                                            <td><ActionButtons id={appointment.id}/></td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </Table>
                    }
                </Container>
            </Container>
        )
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

export default AllAppointmentsPatientPage;
