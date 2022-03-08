import {useSelector} from "react-redux";
import {Button, Modal} from "react-bootstrap";
import React from "react";
import Moment from "moment";

function AboutAppointmentModal(props) {
    const {appointment, loadingAppointment,} = useSelector(state => state.appointmentDate)

    const getFullEmployeeName = (employee) => {
        return employee.firstname + " " + employee.lastname + " (" + employee.speciality + ")"
    }

    return (
        <div>
            <Modal{...props} size="lg"
                  dialogClassName="modal-90w public-profile-modal-class"
                  aria-labelledby="example-custom-modal-styling-title"
                  className="special_modal">
                <Modal.Header closeButton>
                    <Modal.Title><b>Информация о записи к врачу</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        loadingAppointment ?
                            <div>loading...</div>
                            :
                            <div>
                                <p><b>Пациент: </b>{appointment.user.firstname} {appointment.user.lastname}</p>
                                <p><b>Врач: </b>{getFullEmployeeName(appointment.employee)}</p>
                                <p><b>Начало приема: </b>{Moment(appointment.startDate).locale('ru').format('LLL')}</p>
                                <p><b>Конец приема: </b>{Moment(appointment.endDate).locale('ru').format('LLL')}</p>
                                <p><b>Описание: </b>{appointment.description}</p>
                            </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => props.onHide()}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AboutAppointmentModal
