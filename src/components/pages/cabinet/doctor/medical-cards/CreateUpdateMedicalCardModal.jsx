import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {findAppointmentsByEmployeeId} from "../../../../../redux/appointment/AppointmentAction";
import Moment from "moment";
import DatePicker from "react-datepicker";
import {findDiseases} from "../../../../../redux/disease/DiseaseAction";
import {createMedicalCard, updateMedicalCard} from "../../../../../redux/medical-card/MedicalCardAction";
import {toast} from "react-toastify";

function CreateUpdateMedicalCardModal(props) {

    const dispatch = useDispatch()
    const {medicalCard, loadingMedicalCard,} = useSelector(state => state.medicalCardDate)
    const {diseases, loadingDiseases,} = useSelector(state => state.diseaseDate)
    const {appointments, loadingAppointments,} = useSelector(state => state.appointmentDate)

    const employeeId = JSON.parse(localStorage.getItem("current_user")).id;

    const [id, setId] = useState(0)
    const [appointment, setAppointment] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [disease, setDisease] = useState(null)
    const [description, setDescription] = useState('')
    const [isRehabilitation, setIsRehabilitation] = useState(false)
    const [isConfirmation, setIsConfirmation] = useState(false)

    // Errors
    const [appointmentError, setAppointmentError] = useState('')
    const [startDateError, setStartDateError] = useState('')
    const [endDateError, setEndDateError] = useState('')
    const [diseaseError, setDiseaseError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')


    useEffect(() => {
        dispatch(findAppointmentsByEmployeeId(employeeId))
        dispatch(findDiseases())
        if (props.mode === "update" && !loadingMedicalCard) {
            setId(medicalCard.id)
            setAppointment(medicalCard.appointment)
            setDisease(medicalCard.disease)
            setIsConfirmation(medicalCard.isConfirmation)
            setIsRehabilitation(medicalCard.isRehabilitation)
            setStartDate(new Date(medicalCard.startDate))
            setEndDate(new Date(medicalCard.endDate))
            setDescription(medicalCard.description)
        }
    }, [loadingMedicalCard])

    const changeAppointmentHandler = (event) => {
        setAppointment(JSON.parse(event.target.value))
        setAppointmentError('')
    }

    const changeStartDateHandler = (date) => {
        setStartDate(date)
        setStartDateError('')
    }

    const changeEndDateHandler = (date) => {
        setEndDate(date)
        setEndDateError('')
    }

    const changeDiseaseHandler = (event) => {
        setDisease(JSON.parse(event.target.value))
        setDiseaseError('')
    }

    const changeDescriptionHandler = (event) => {
        setDescription(event.target.value)
        setDescriptionError('')
    }

    const changeIsRehabilitationHandler = () => {
        setIsRehabilitation(!isRehabilitation)
    }

    const changeIsConfirmationHandler = () => {
        setIsConfirmation(!isConfirmation)
    }

    const handleSubmit = () => {
        if (!findErrors()) {
            let request = {
                appointment: appointment,
                user: appointment.userEntity,
                employee: appointment.employee,
                startDate: startDate,
                endDate: endDate,
                disease: disease,
                description: description,
                isRehabilitation: isRehabilitation,
                isConfirmation: isConfirmation,
            }
            if (props.mode === "create") {
                dispatch(createMedicalCard(request))
                    .then(() => {
                        notifySuccess('Мед-карта была успешно добавлена!')
                    })
                    .catch(() => {
                        notifyError('Произошла ошибка при добавлении новой мед-карты!')
                    });
            } else {
                dispatch(updateMedicalCard(request, id))
                    .then(() => {
                        notifySuccess('Мед-карта была успешно обновлена!')
                    })
                    .catch(() => {
                        notifyError('Произошла ошибка при обновлении мед-карты!')
                    });
            }
        }
    }

    const findErrors = () => {
        let errors = false;

        console.log(appointment)
        if (appointment === null) {
            errors = true;
            setAppointmentError("Пациент не может быть пустым!")
        }
        if (startDate === null) {
            errors = true;
            setStartDateError("Начальная дата не может быть пустой!")
        }
        if (endDate === null) {
            errors = true;
            setEndDateError("Конечная дата не может быть пустой!")
        }
        if (disease === null) {
            errors = true;
            setDiseaseError("Болезнь не может быть пустой!")
        }
        if (description.length === 0) {
            errors = true;
            setDescriptionError("Описание не может быть пустой!")
        }

        return errors
    }


    const notifyError = (text) => toast.error(text, {
        autoClose: 2000,
        position: "top-right",
    });

    const notifySuccess = (text) => toast.success(text, {
        autoClose: 2000,
        position: "top-right",
    });

    toast.configure()
    return (
        <div>
            <Modal{...props} size="lg"
                  dialogClassName="modal-90w public-profile-modal-class"
                  aria-labelledby="example-custom-modal-styling-title"
                  className="special_modal">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <b>{props.mode === "create" ? "Добавить мед-карту" : "Изменить мед-карту"}</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        loadingMedicalCard && props.mode === "update" ?
                            <div>
                                loading..
                            </div>
                            :
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label><b>Выберите пациента</b></Form.Label>
                                    <Form.Select
                                        value={JSON.stringify(appointment)}
                                        aria-label="Default select example"
                                        onChange={changeAppointmentHandler}
                                        isInvalid={appointmentError}
                                    >
                                        <option key={0} value={"null"}>Выберите...</option>
                                        {appointments.map((item, index) =>
                                            <option key={index} value={JSON.stringify(item)}>
                                                {item.userEntity.firstname} {item.userEntity.lastname}{' '}
                                                (прием: {Moment(item.startDate).locale('ru').format('LLL')})
                                            </option>
                                        )}
                                    </Form.Select>
                                    <Form.Control.Feedback type='invalid'>{appointmentError}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label><b>Выберите дату начало болезни</b></Form.Label>
                                    <br/>
                                    <DatePicker
                                        className={!startDateError ? "my-date-picker" : "my-date-picker-invalid"}
                                        selected={startDate}
                                        placeholderText="Выберите..."
                                        onChange={changeStartDateHandler}
                                        showTimeSelect
                                        locale="ru"
                                        dateFormat="dd/MM/yyyy HH:mm"
                                    />
                                    <p className="text-error"
                                       style={{visibility: startDateError ? 'visible' : 'hidden'}}>{startDateError}</p>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label><b>Выберите дату окончания болезни</b></Form.Label>
                                    <br/>
                                    <DatePicker
                                        className={!endDateError ? "my-date-picker" : "my-date-picker-invalid"}
                                        selected={endDate}
                                        placeholderText="Выберите..."
                                        onChange={changeEndDateHandler}
                                        showTimeSelect
                                        locale="ru"
                                        dateFormat="dd/MM/yyyy HH:mm"
                                    />
                                    <p className="text-error"
                                       style={{visibility: endDateError ? 'visible' : 'hidden'}}>{endDateError}</p>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label><b>Выберите болезнь</b></Form.Label>
                                    <Form.Select
                                        value={JSON.stringify(disease)}
                                        aria-label="Default select example"
                                        onChange={changeDiseaseHandler}
                                        isInvalid={diseaseError}
                                    >
                                        <option key={0} value={"null"}>Выберите...</option>
                                        {diseases.map((item, index) =>
                                            <option key={index} value={JSON.stringify(item)}>
                                                {item.name} ({item.description})
                                            </option>
                                        )}
                                    </Form.Select>
                                    <Form.Control.Feedback type='invalid'>{diseaseError}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><b>Описание</b></Form.Label>
                                    <Form.Control as="textarea" type="text" className="my-input" rows={2}
                                                  style={{minHeight: "90px", maxHeight: "90px", resize: "none"}}
                                                  placeholder="Опишите болезнь"
                                                  value={description}
                                                  isInvalid={descriptionError}
                                                  onChange={changeDescriptionHandler}
                                    />
                                    <Form.Control.Feedback type='invalid'>{descriptionError}</Form.Control.Feedback>
                                </Form.Group>
                                <br/>
                                <Form.Check type="switch"
                                            label="Реабилитация"
                                            checked={isRehabilitation}
                                            onChange={changeIsRehabilitationHandler}
                                />
                                <Form.Check type="switch"
                                            label="Подвтерждение"
                                            checked={isConfirmation}
                                            onChange={changeIsConfirmationHandler}
                                />
                            </Form>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={() => props.onHide()}>Закрыть</Button>
                    <Button variant={props.mode === "create" ? "outline-primary" : "outline-success"}
                            type="submit"
                            onClick={handleSubmit}>
                        {props.mode === "create" ? "Добавить" : "Изменить"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CreateUpdateMedicalCardModal;
