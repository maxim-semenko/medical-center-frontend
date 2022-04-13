import React, {useEffect, useState} from 'react';
import {Alert, Button, Col, Form, Row} from "react-bootstrap";
import EmployeeService from "../../../service/EmployeeService";
import CSSTransition from "react-transition-group/CSSTransition";

function EditFormDoctor() {

    // Form's values
    const [id, setId] = useState(0)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [speciality, setSpeciality] = useState('')

    // Values Errors
    const [firstnameError, setFirstnameError] = useState('')
    const [lastnameError, setLastnameError] = useState('')
    const [specialityError, setSpecialityError] = useState('')

    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);


    useEffect(() => {
        if (localStorage.getItem("current_user") !== null) {
            const user = JSON.parse(localStorage.getItem("current_user"));
            setId(user.id)
            setFirstname(user.firstname)
            setLastname(user.lastname)
            setSpeciality(user.speciality)
        }
    }, [])

    const changeFirstnameHandler = (event) => {
        setFirstname(event.target.value)
        setFirstnameError("")
    }

    const changeLastnameHandler = (event) => {
        setLastname(event.target.value)
        setLastnameError("")
    }

    const changeSpecialityHandler = (event) => {
        setSpeciality(event.target.value)
        setSpecialityError("")
    }

    const findErrors = () => {
        let errors = false;

        if (!firstname || firstname === '') {
            setFirstnameError('Имя не может быть пустым!');
            errors = true
        } else if (firstname.length < 2) {
            setFirstnameError('Имя слишком короткое!');
            errors = true
        } else if (firstname.length > 50) {
            setFirstnameError('Имя слишком длинное!');
            errors = true
        }

        if (!lastname || lastname === '') {
            setLastnameError('Фамилия не может быть пустой!');
            errors = true
        } else if (lastname.length < 2) {
            setLastnameError('Фамилия слишком короткая!');
            errors = true
        } else if (lastname.length > 50) {
            setLastnameError('Фамилия слишком длинная!');
            errors = true
        }

        if (!speciality || speciality === '') {
            setSpecialityError('Специальность не может быть пустой!');
            errors = true
        } else if (speciality.length < 2) {
            setSpecialityError('Специальность слишком короткая!');
            errors = true
        } else if (speciality.length > 50) {
            setSpecialityError('Специальность слишком длинная!');
            errors = true
        }

        return errors
    }

    const submit = (event) => {
        event.preventDefault();
        if (!findErrors()) {
            let request = {
                firstname: firstname,
                lastname: lastname,
                speciality: speciality
            }
            EmployeeService.updateById(request, id).then(resp => {
                setShowSuccess(true)
                localStorage.setItem("current_user", JSON.stringify(resp.data))
            })
        }
    }

    return (
        <div>
            <Form>
                <CSSTransition in={showError} classNames="my-node" timeout={100} unmountOnExit>
                    <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                        <Alert.Heading>Упс! Возникла ошибка!</Alert.Heading>
                        <p>Проверьте введенные данные.</p>
                    </Alert>
                </CSSTransition>
                <CSSTransition in={showSuccess} classNames="my-node" timeout={100} unmountOnExit>
                    <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                        <Alert.Heading>Все отлично!</Alert.Heading>
                        <p>Ваш профиль был успешно обновлен.</p>
                    </Alert>
                </CSSTransition>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Имя</b></Form.Label>
                            <Form.Control className="my-input"
                                          value={firstname}
                                          type="text"
                                          placeholder="Введите ваше имя"
                                          autoComplete="off"
                                          isInvalid={firstnameError}
                                          onChange={changeFirstnameHandler}
                            />
                            <Form.Control.Feedback type='invalid'>{firstnameError}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Фамилия</b></Form.Label>
                            <Form.Control className="my-input"
                                          value={lastname}
                                          type="text"
                                          placeholder="Введите вашу фамилию"
                                          autoComplete="off"
                                          isInvalid={lastnameError}
                                          onChange={changeLastnameHandler}
                            />
                            <Form.Control.Feedback type='invalid'>{lastnameError}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Специальность</b></Form.Label>
                            <Form.Control className="my-input"
                                          value={speciality}
                                          type="text"
                                          placeholder="Введите ваш номер паспорта"
                                          autoComplete="off"
                                          isInvalid={specialityError}
                                          onChange={changeSpecialityHandler}
                            />
                            <Form.Control.Feedback type='invalid'>{specialityError}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <div style={{textAlign: "right"}}>
                <Button variant="outline-success" size="lg" onClick={submit}><b>Редактировать</b></Button>
            </div>
        </div>
    );
}

export default EditFormDoctor;
