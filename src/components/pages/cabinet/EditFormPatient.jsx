import React, {useEffect, useState} from 'react';
import {Alert, Button, Col, Form, Row} from "react-bootstrap";
import UserService from "../../../service/UserService";
import UserValidator from "../../../validation/UserValidator";
import CSSTransition from "react-transition-group/CSSTransition";

function EditFormPatient() {

    // Form's values
    const [id, setId] = useState(0)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [bloodType, setBloodType] = useState('')
    const [age, setAge] = useState(0)

    // Values Errors
    const [firstnameError, setFirstnameError] = useState('')
    const [lastnameError, setLastnameError] = useState('')
    const [bloodTypeError, setBloodTypeError] = useState('')
    const [ageError, setAgeError] = useState('')

    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const user = JSON.parse(localStorage.getItem("current_user"));

    useEffect(() => {
        if (localStorage.getItem("current_user") !== null) {
            setId(user.id)
            setFirstname(user.firstname)
            setLastname(user.lastname)
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

    const changeBloodTypeHandler = (event) => {
        setBloodType(event.target.value)
        setBloodTypeError("")
    }

    const changeAgeHandler = (event) => {
        setAge(event.target.value)
        setAgeError("")
    }

    const findErrors = () => {
        let isErrors = false

        let errors =
            UserValidator.validateForUpdate(firstname, lastname, bloodType, age)

        setFirstnameError(errors.firstnameError)
        setLastnameError(errors.lastnameError)
        setBloodTypeError(errors.bloodTypeError)
        setAgeError(errors.ageError)

        for (let key in errors) {
            if (errors[key] !== '') {
                isErrors = true
            }
        }

        return isErrors
    }

    const submit = (event) => {
        event.preventDefault();
        if (!findErrors()) {
            let request = {
                id: user.id,
                firstname: firstname,
                lastname: lastname,
                bloodType: bloodType,
                age: age,
                passport: user.passport,
                vaccine: user.vaccine,
            }
            console.log(request)
            UserService.updateById(request, id).then(resp => {
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
                        <p>Проверьте введенные данные!</p>
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
                </Row>
            </Form>
            <div style={{textAlign: "right"}}>
                <Button variant="outline-success" size="lg" onClick={submit}><b>Редактировать</b></Button>
            </div>
        </div>
    );
}

export default EditFormPatient;
