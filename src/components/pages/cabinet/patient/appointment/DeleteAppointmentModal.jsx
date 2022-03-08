import {useDispatch, useSelector} from "react-redux";
import {Button, Modal} from "react-bootstrap";
import React from "react";
import {toast} from "react-toastify";
import Moment from "moment";
import {deleteAppointmentById} from "../../../../../redux/appointment/AppointmentAction";
import 'react-toastify/dist/ReactToastify.css'

function DeleteAppointmentModal(props) {

    const dispatch = useDispatch()
    const {appointment, loadingAppointment,} = useSelector(state => state.appointmentDate)

    const handleSubmit = () => {
        dispatch(deleteAppointmentById(appointment.id))
            .then(() => {
                notifySuccess('Вакцина была успешно удалена!')
                props.onHide()
            })
            .catch(() => {
                notifyError('Произошла ошибка при удалении вакцины!')
            });
    }

    const notifyError = (text) => toast.error(text, {
        autoClose: 2000,
        position: "top-right",
    });

    const notifySuccess = (text) => toast.success(text, {
        autoClose: 2000,
        position: "top-right",
    });

    const getFullEmployeeName = (employee) => {
        return employee.firstname + " " + employee.lastname + " (" + employee.speciality + ")"
    }

    toast.configure()
    return (
        <div>
            <Modal{...props} size="lg"
                  dialogClassName="modal-90w public-profile-modal-class"
                  aria-labelledby="example-custom-modal-styling-title"
                  className="special_modal">
                <Modal.Header closeButton>
                    <Modal.Title><b>Удаление записи к врачу</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        loadingAppointment ?
                            <div>loading...</div>
                            :
                            <div>
                                <p>Вы уверены, что хотите удалить эту запись к врачу?</p>
                                <p>Доктор: {getFullEmployeeName(appointment.employee)}</p>
                                <p>Время: {Moment(appointment.startDate).locale('ru').format('LLL')}</p>
                            </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => props.onHide()}>Закрыть</Button>
                    <Button variant={"outline-danger"} type="submit" onClick={handleSubmit}>Удалить</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DeleteAppointmentModal
