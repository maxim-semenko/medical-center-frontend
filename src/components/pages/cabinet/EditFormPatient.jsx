import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

function EditFormPatient() {

    // Form's values
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passport, setPassport] = useState('')
    const [bloodType, setBloodType] = useState('')
    const [age, setAge] = useState(0)

    // Values Errors
    const [firstnameError, setFirstnameError] = useState('')
    const [lastnameError, setLastnameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passportError, setPassportError] = useState('')
    const [bloodTypeError, setBloodTypeError] = useState('')
    const [ageError, setAgeError] = useState('')

    const [showSuccess, setShowSuccess] = useState('');
    const [textSuccess, setTextSuccess] = useState('');

    const [showError, setShowError] = useState(false);
    const [textError, setTextError] = useState(false);


    useEffect(() => {
        if (localStorage.getItem("currentUser") !== null) {
            const user = JSON.parse(localStorage.getItem("currentUser"));
            setFirstname(user.firstname)
            setLastname(user.lastname)
            setPassport(user.passport)
            setBloodType(user.bloodType)
            setAge(user.age)
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

    const changeEmailHandler = (event) => {
        setEmail(event.target.value)
        setEmailError("")
    }

    const changePassportHandler = (event) => {
        setPassport(event.target.value)
        setPassportError("")
    }

    const changeBloodTypeHandler = (event) => {
        setBloodType(event.target.value)
        setBloodTypeError("")
    }

    const changeAgeHandler = (event) => {
        setAge(event.target.value)
        setAgeError("")
    }

    return (
        <div>
            <Form>
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
                            <Form.Label><b>Почта</b></Form.Label>
                            <Form.Control className="my-input"
                                          value={email}
                                          type="email"
                                          placeholder="Введите вашу почту"
                                          autoComplete="off"
                                          isInvalid={emailError}
                                          onChange={changeEmailHandler}
                            />
                            <Form.Control.Feedback type='invalid'>{emailError}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    {/*///////////////////////////////////////////////////////*/}
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Номер паспорта</b></Form.Label>
                            <Form.Control className="my-input"
                                          value={passport}
                                          type="text"
                                          placeholder="Введите ваш номер паспорта"
                                          autoComplete="off"
                                          isInvalid={passportError}
                                          onChange={changePassportHandler}
                            />
                            <Form.Control.Feedback type='invalid'>{passportError}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Группа крови</b></Form.Label>
                            <Form.Control className="my-input"
                                          value={bloodType}
                                          type="text"
                                          placeholder="Введите вашу группу крови"
                                          autoComplete="off"
                                          isInvalid={bloodTypeError}
                                          onChange={changeBloodTypeHandler}
                            />
                            <Form.Control.Feedback type='invalid'>{bloodTypeError}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Возраст</b></Form.Label>
                            <Form.Control className="my-input"
                                          value={age}
                                          type="number"
                                          placeholder="Введите ваш возраст"
                                          autoComplete="off"
                                          isInvalid={ageError}
                                          onChange={changeAgeHandler}
                            />
                            <Form.Control.Feedback type='invalid'>{ageError}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <div style={{textAlign: "right"}}>
                <Button variant="outline-success" size="lg"><b>Изменить</b></Button>
            </div>
        </div>
    );
}

export default EditFormPatient;