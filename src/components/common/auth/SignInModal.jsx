import React, {useState} from 'react'
import {Alert, Button, Form, Modal} from "react-bootstrap"
import CSSTransition from "react-transition-group/CSSTransition"
import {Cookies} from "react-cookie"
import UserValidator from "../../../validation/UserValidator";
// import AuthService from "../../../../service/AuthService"
// import '../../../../styles/Animation.css'
// import '../../../../styles/FormControl.css'
// import '../../../../styles/ForgotPasswordLink.css'

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
    const [textError, setTextError] = useState(false)


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
            // AuthService.login({username: username, password: password})
            //     .then(response => {
            //         localStorage.setItem("user", JSON.stringify(response.data.user))
            //         cookies.set("jwt", response.data.token, {
            //             path: "/",
            //             sameSite: "strict",
            //             maxAge: 3600 * 24 * 60
            //         })
            //         window.location.reload()
            //     }).catch(error => {
            //         if (error.response.status === 400) {
            //             setShowError("Profile was locked!")
            //         } else if (error.response.status === 404 || error.response.status === 403) {
            //             setShowError("Profile was not founded! Please, check your input username and password")
            //         }
            //         console.log(error)
            //     }
            // )
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
            <Modal.Body className="modal-dark">
                <CSSTransition in={showError} classNames="my-node" timeout={100} unmountOnExit>
                    <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>{showError}</p>
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