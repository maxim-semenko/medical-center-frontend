import React, {useEffect, useState} from 'react';
import NavigationBar from "../../../common/NavigationBar";
import {Button, Container, Form} from "react-bootstrap";
import Footer from "../../../common/Footer";
import {Link} from "react-router-dom";

import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import {format, setHours, setMinutes} from "date-fns";
import "../../../../styles/DatePicker.css"
import "../../../../styles/TextError.css"
import {useDispatch, useSelector} from "react-redux";
import {findEmployees} from "../../../../redux/employee/EmployeeAction";

registerLocale('ru', ru)

function AppointmentToDoctorPage() {
    const [isInit, setIsInit] = useState(false)
    const dispatch = useDispatch()
    const {employees, loadingEmployees} = useSelector(state => state.employeeDate)

    const [employee, setEmployee] = useState(null);
    const [startDate, setStartDate] = useState(null);

    const [startDateError, setStartDateError] = useState('');
    const [employeeError, setEmployeeError] = useState('');

    useEffect(() => {
        if (!isInit) {
            dispatch(findEmployees())
            setIsInit(true)
        }
    }, [])

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

        return errors
    }

    const changeStartDateHandler = (date) => {
        setStartDate(date)
        setStartDateError('')
    }

    const changeDoctorHandler = (event) => {
        setEmployee(JSON.parse(event.target.value))
        setEmployeeError('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let request = {
            employee: employee,
            startDate: startDate,
        }

        if (findErrors(request)) {
            console.log("ERROR")
        } else {
            console.log("date: %s", format(startDate, "dd/MM/yyyy HH:mm"))
        }
    }

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

    const DatePickerComponent = () => {
        return (
            <Form.Group className="mb-3">
                <Form.Label><b>Выберите дату и время</b></Form.Label>
                <br/>
                <DatePicker
                    className={!startDateError ? "my-date-picker" : "my-date-picker-invalid"}
                    selected={startDate}
                    placeholderText="Выберите время"
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

    const Content = () => {
        return (
            <Container className="main-container" style={{marginBottom: "14%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Запись на прием</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet"><Button variant="outline-danger" size="lg"><b>Назад</b></Button></Link>
                    </div>
                    <Form>
                        <EmployeeSelectComponent/>
                        <DatePickerComponent/>
                    </Form>
                    <Button variant="outline-primary" type="submit" onClick={handleSubmit} size="lg">
                        <b>Подтвердить запись</b>
                    </Button>
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

export default AppointmentToDoctorPage;