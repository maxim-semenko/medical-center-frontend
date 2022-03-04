import React, {useState} from 'react';
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

registerLocale('ru', ru)

function AppointmentToDoctorPage() {

    const [employee, setEmployee] = useState(null);
    const [startDate, setStartDate] = useState(null);

    const [startDateError, setStartDateError] = useState('');
    const [employeeError, setEmployeeError] = useState('');

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

    const changeEmployeeHandler = (event) => {
        setEmployee(event.target.value)
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

    return (
        <div>
            <NavigationBar/>
            <Container className="main-container">
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Запись на прием</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet"><Button variant="outline-danger" size="lg"><b>Назад</b></Button></Link>
                    </div>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Выберите врача</b></Form.Label>
                            <Form.Control className="my-input"
                                          type="text"
                                          placeholder="Введите свою почту"
                                          autoComplete="off"
                                          onChange={changeEmployeeHandler}
                                          isInvalid={employeeError}
                            />
                            <Form.Control.Feedback type='invalid'>{employeeError}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Выберите дату и время</b></Form.Label>
                            <br/>
                            <DatePicker
                                className={!startDateError ? "my-date-picker" : "my-date-picker-invalid"}
                                selected={startDate}
                                placeholderText="Выберите время"
                                onChange={(date) => setStartDate(date)}
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
                    </Form>
                    <Button variant="outline-primary" type="submit" onClick={handleSubmit} size="lg">
                        <b>Подтвердить запись</b>
                    </Button>
                </Container>
            </Container>
            <Footer/>
        </div>
    );
}

export default AppointmentToDoctorPage;