import React, {useState} from 'react'
import {Alert, Button, Form, Modal} from "react-bootstrap"
import CSSTransition from "react-transition-group/CSSTransition"
import {Cookies} from "react-cookie"
import {Link} from "react-router-dom";
import UserValidator from "../validation/UserValidator";
// import AuthService from "../../../../service/AuthService"
// import '../../../../styles/Animation.css'
// import '../../../../styles/FormControl.css'
// import '../../../../styles/ForgotPasswordLink.css'

function SignInDialog(props) {
    const cookies = new Cookies()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showError, setShowError] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    /**
     * Method that set username value.
     * @param event input event
     */
    const changeUsernameHandler = (event) => {
        setUsernameError('')
        setUsername(event.target.value)
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
        error = UserValidator.validateUsername(username)
        if (error !== "") {
            setUsernameError(error);
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
                        <Form.Label><b>Логин</b></Form.Label>
                        <Form.Control className="my-input"
                                      type="text"
                                      placeholder="Введите свой логин"
                                      autocomplete="off"
                                      onChange={changeUsernameHandler}
                                      isInvalid={usernameError}/>
                        <Form.Control.Feedback type='invalid'>{usernameError}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label><b>Пароль</b></Form.Label>
                        <Form.Control className="my-input"
                                      type="password"
                                      placeholder="Введите свой пароль"
                                      autocomplete="off"
                                      onChange={changePasswordHandler}
                                      isInvalid={passwordError}/>
                        <Form.Control.Feedback type='invalid'>{passwordError}</Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={closeModal}>Отмена</Button>
                <Button variant="outline-primary" type="submit" onClick={handleSubmit}>Войти</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SignInDialog