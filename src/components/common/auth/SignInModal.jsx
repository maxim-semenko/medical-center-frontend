import React, {useState} from 'react'
import {Alert, Button, Form, Modal} from "react-bootstrap"
import CSSTransition from "react-transition-group/CSSTransition"
import {Cookies} from "react-cookie"
import UserValidator from "../../../validation/UserValidator";
import AuthService from "../../../service/AuthService";
import jwt_decode from "jwt-decode";
import axios from "axios";
import '../../../styles/Animation.css'

function SignInModal(props) {
    const cookies = new Cookies()

    // Values
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Values errors
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    // Global error of Sign in
    const [showError, setShowError] = useState(false)
    const [textError, setTextError] = useState('')


    /**
     * Method that set email value.
     * @param event input event
     */
    const changeEmailHandler = (event) => {
        setEmailError('')
        setEmail(event.target.value)
    }

    /**
     * Method that set password value.
     * @param event input event
     */
    const changePasswordHandler = (event) => {
        setPasswordError('')
        setPassword(event.target.value)
    }

    /**
     * Method that handle user's login.
     * @param event button event
     */
    const handleSubmit = (event) => {
        event.preventDefault()
        if (!findFormErrors()) {
            const request = {
                email: email,
                password: password
            }
            AuthService.login(request)
                .then(async response => {
                    const decoded = jwt_decode(response.data);
                    console.log(response.data)
                    cookies.set("token", response.data, {
                        path: "/",
                        sameSite: "strict",
                        maxAge: decoded.exp
                    })
                    if (decoded.role === "USER") {
                        await axios.get(`api/v1/users/${decoded.id}`).then(resp => {
                            console.log("SAVE USER")
                            localStorage.setItem("current_user", JSON.stringify(resp.data))
                        })
                    } else {
                        await axios.get(`api/v1/employees/${decoded.id}`, {
                            headers: {'Authorization': `Bearer ${response.data}`},
                        }).then(resp => {
                            console.log("SAVE DOCTOR")
                            localStorage.setItem("current_user", JSON.stringify(resp.data))
                        })
                    }
                    console.log(decoded)
                    props.onHide()
                }).catch(error => {
                    setShowError(true)
                    if (error.response.status === 404) {
                        setTextError("Пользователь с такими данными не найден!")
                    }
                    console.log(error)
                }
            )
        }
    }

    /**
     * Method that find all errors in input form.
     * @returns {boolean}
     */
    const findFormErrors = () => {
        let isErrors = false
        let error

        // username errors
        error = UserValidator.validateEmail(email)
        if (error !== "") {
            setEmailError(error);
            isErrors = true
        }

        // password errors
        error = UserValidator.validatePassword(password)
        if (error !== "") {
            setPasswordError(error);
            isErrors = true
        }

        return isErrors
    }

    const closeModal = () => {
        props.onHide()
    }

    return (
        <Modal{...props} size="lg"
              dialogClassName="modal-90w public-profile-modal-class"
              aria-labelledby="example-custom-modal-styling-title"
              className="special_modal">
            <Modal.Header closeButton>
                <Modal.Title>Авторизация</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CSSTransition in={showError} classNames="my-node" timeout={100} unmountOnExit>
                    <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                        <Alert.Heading>Упс! Возникла ошибка!</Alert.Heading>
                        <p>{textError}</p>
                    </Alert>
                </CSSTransition>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label><b>Почта</b></Form.Label>
                        <Form.Control className="my-input"
                                      type="text"
                                      placeholder="Введите свою почту"
                                      autoComplete="off"
                                      onChange={changeEmailHandler}
                                      isInvalid={emailError}/>
                        <Form.Control.Feedback type='invalid'>{emailError}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label><b>Пароль</b></Form.Label>
                        <Form.Control className="my-input"
                                      type="password"
                                      placeholder="Введите свой пароль"
                                      autoComplete="off"
                                      onChange={changePasswordHandler}
                                      isInvalid={passwordError}/>
                        <Form.Control.Feedback type='invalid'>{passwordError}</Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={closeModal}><b>Отмена</b></Button>
                <Button variant="outline-primary" type="submit" onClick={handleSubmit}><b>Войти</b></Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SignInModal
