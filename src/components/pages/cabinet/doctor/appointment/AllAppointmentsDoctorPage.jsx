import React, {useEffect, useState} from 'react';
import NavigationBar from "../../../../common/NavigationBar";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import Footer from "../../../../common/Footer";
import {Link} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {findAppointmentById, findAppointmentsByEmployeeId} from "../../../../../redux/appointment/AppointmentAction";
import Moment from "moment";
import AboutAppointmentModal from "../../patient/appointment/AboutAppointmentModal";

function AllAppointmentsPatientPage() {
    const [isInit, setIsInit] = useState(false)
    const dispatch = useDispatch()
    const {appointments, loadingAppointments} = useSelector(state => state.appointmentDate)

    const [showAboutAppointmentDialog, setShowAboutAppointmentDialog] = useState(false)

    // Пусть в системе достор с id = 1
    const employeeId = 1

    useEffect(() => {
        if (!isInit) {
            dispatch(findAppointmentsByEmployeeId(0, 0, employeeId))
            setIsInit(true)
        }
    }, [isInit])


    const aboutAppointment = (id) => {
        dispatch(findAppointmentById(id))
        setShowAboutAppointmentDialog(true);
    }


    const showDialogs = () => {
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
                <Button variant="outline-info" onClick={() => aboutAppointment(props.id)}>
                    <b>Инфо</b>
                </Button>
            </div>
        )
    }

    const getFullPatientName = (user) => {
        return user.firstname + " " + user.lastname
    }

    const Content = () => {
        return (
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список записей к вам на прием</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet/doctor"><Button variant="outline-danger" size="lg">Назад</Button></Link>{' '}
                    </div>
                    {
                        loadingAppointments ?
                            <h1 className={"text-center"}><Spinner animation="border"/></h1>
                            :
                            <Table striped bordered hover style={{textAlign: "center"}}>
                                <thead>
                                <tr>
                                    <th width="5%">Номер</th>
                                    <th width="25%">Пациент</th>
                                    <th width="35%">Описание</th>
                                    <th width="15%">Начало</th>
                                    <th width="15%">Конец</th>
                                    <th>Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    appointments.map((appointment, index) =>
                                        <tr key={index}>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{getFullPatientName(appointment.userEntity)}</b></td>
                                            <td><b>{appointment.description}</b></td>
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
