import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Modal} from "react-bootstrap";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import {format, setHours, setMinutes} from "date-fns";
import {useDispatch, useSelector} from "react-redux";
import {findEmployees} from "../../../../../redux/employee/EmployeeAction";
import {toast} from "react-toastify";
import {createAppointment, updateAppointment} from "../../../../../redux/appointment/AppointmentAction";
import 'react-toastify/dist/ReactToastify.css'
import "../../../../../styles/DatePicker.css"
import "../../../../../styles/TextError.css"
import Moment from 'moment';
import 'moment/locale/ru';

registerLocale('ru', ru)

function CreateUpdateAppointmentModal(props) {
    const [isInit, setIsInit] = useState(false)
    const dispatch = useDispatch()
    const {employees, loadingEmployees} = useSelector(state => state.employeeDate)
    const {appointment, loadingAppointment} = useSelector(state => state.appointmentDate)

    const [id, setId] = useState(0)
    const [employee, setEmployee] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [description, setDescription] = useState('');

    const [startDateError, setStartDateError] = useState(null);
    const [employeeError, setEmployeeError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    useEffect(() => {
        if (props.mode === "update" && !loadingAppointment) {
            setId(appointment.id)
            setStartDate(new Date(appointment.startDate))
            setEndDate(new Date(appointment.endDate))
            setEmployee(appointment.employee)
            setDescription(appointment.description)
        }
        if (!isInit) {
            dispatch(findEmployees())
            setIsInit(true)
        }
    }, [loadingAppointment])

    const findErrors = (request) => {
        let errors = false

        if (request.startDate === null) {
            setStartDateError("Дата и время не могут быть пустыми!")
            errors = true
        }
        if (request.employee === null) {
            setEmployeeError("Доктор не может быть пустым!")
            errors = true
        }
        if (request.description.length === 0) {
            setDescriptionError("Описание не может быть пустым!")
            errors = true
        }

        return errors
    }

    const changeStartDateHandler = (date) => {
        setStartDate(date)
        setStartDateError('')
        let endDate = new Date(date);
        endDate.setMinutes(date.getMinutes() + 30);
        setEndDate(endDate)
    }

    const changeDoctorHandler = (event) => {
        setEmployee(JSON.parse(event.target.value))
        setEmployeeError('')
    }

    const changeDescriptionHandler = (event) => {
        setDescription(event.target.value)
        setDescriptionError('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let request = {
            userEntity: JSON.parse(localStorage.getItem("currentUser")),
            employee: employee,
            startDate: startDate,
            endDate: endDate,
            description: description,
        }

        console.log(request)


        if (findErrors(request)) {
            console.log("ERROR")
            console.log(request.endDate)
        } else {
            if (props.mode === "create") {
                dispatch(createAppointment(request))
                    .then(() => {
                        notifySuccess('Новая запись к врачу была успешно добавлена!')
                    })
                    .catch(() => {
                        notifyError('Произошла ошибка при добавлении новой записи к врачу!')
                    });
            } else {
                dispatch(updateAppointment(request, id))
                    .then(() => {
                        notifySuccess('Запись к врачу была успешно обновлена!')
                    })
                    .catch(() => {
                        notifyError('Произошла ошибка при обновлении записи к врачу!')
                    });
            }
            console.log("date: %s", format(startDate, "dd/MM/yyyy HH:mm"))
        }
    }

    const notifyError = (text) => toast.error(text, {
        autoClose: 2000,
        position: "top-right",
    });

    const notifySuccess = (text) => toast.success(text, {
        autoClose: 2000,
        position: "top-right",
    });

    const EmployeeSelectComponent = () => {
        return (
            <Form.Group className="mb-3">
                <Form.Label><b>Выберите врача</b></Form.Label>
                <Form.Select
                    value={JSON.stringify(employee)}
                    aria-label="Default select example"
                    isInvalid={employeeError}
                    onChange={changeDoctorHandler}>
                    <option key={0} value={"null"}>Выберите...</option>
                    {employees.map((item, index) =>
                        <option key={index} value={JSON.stringify(item)}>
                            {item.firstname} {item.lastname} ({item.speciality})
                        </option>
                    )}
                </Form.Select>
                <Form.Control.Feedback type='invalid'>{employeeError}</Form.Control.Feedback>
            </Form.Group>
        )
    }

    const printEndDate = () => {
        if (endDate !== null) {
            return <span>(конец {Moment(endDate).locale('ru').format('LLL')})</span>
        } else {
            return <span></span>
        }
    }

    const DatePickerComponent = () => {
        return (
            <Form.Group className="mb-3">
                <Form.Label><b>Выберите день и время {printEndDate()}</b></Form.Label>
                <br/>
                <DatePicker
                    className={!startDateError ? "my-date-picker" : "my-date-picker-invalid"}
                    selected={startDate}
                    placeholderText="Выберите..."
                    onChange={changeStartDateHandler}
                    showTimeSelect
                    locale="ru"
                    minTime={setHours(setMinutes(new Date(), 0), 9)}
                    maxTime={setHours(setMinutes(new Date(), 0), 22)}
                    dateFormat="dd/MM/yyyy HH:mm"
                />
                <p className="text-error"
                   style={{visibility: startDateError ? 'visible' : 'hidden'}}>{startDateError}</p>
                <Form.Control.Feedback type='invalid'>{startDateError}</Form.Control.Feedback>
            </Form.Group>
        )
    }

    toast.configure()
    return (
        <div>
            <Modal{...props} size="lg"
                  dialogClassName="modal-90w public-profile-modal-class"
                  aria-labelledby="example-custom-modal-styling-title"
                  className="special_modal">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <b>{props.mode === "create" ? "Добавить запись к врачу" : "Изменить запись к врачу"}</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        loadingAppointment && props.mode === "update" ?
                            <div>loading...</div>
                            :
                            <Form>
                                <EmployeeSelectComponent/>
                                <DatePickerComponent/>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><b>Описание</b></Form.Label>
                                    <Form.Control as="textarea" type="text" className="my-input" rows={2}
                                                  style={{minHeight: "90px", maxHeight: "90px", resize: "none"}}
                                                  placeholder="Опишите симптомы"
                                                  value={description}
                                                  isInvalid={descriptionError}
                                                  onChange={changeDescriptionHandler}
                                    />
                                    <Form.Control.Feedback type='invalid'>{descriptionError}</Form.Control.Feedback>
                                </Form.Group>
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

export default CreateUpdateAppointmentModal;
