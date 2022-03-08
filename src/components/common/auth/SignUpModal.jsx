import React, {useState} from 'react'
import {Button, Col, Form, Modal, Row} from "react-bootstrap"
// import AuthService from "../../../../service/AuthService"
import UserValidator from "../../../validation/UserValidator";

function SignUpModal(props) {

    // Form's values
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [passport, setPassport] = useState('')
    const [bloodType, setBloodType] = useState('')
    const [age, setAge] = useState(0)

    // Values Errors
    const [firstnameError, setFirstnameError] = useState('')
    const [lastnameError, setLastnameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passportError, setPassportError] = useState('')
    const [bloodTypeError, setBloodTypeError] = useState('')
    const [ageError, setAgeError] = useState('')

    const [showSuccess, setShowSuccess] = useState('');
    const [textSuccess, setTextSuccess] = useState('');

    const [showError, setShowError] = useState(false);
    const [textError, setTextError] = useState(false);


    const changePasswordHandler = (event) => {
        setPassword(event.target.value)
        setPasswordError("")
    }

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

    /**
     * Method that register by user's params of from input form.
     * @param event
     */
    const register = (event) => {
        event.preventDefault()
        setShowError(false)
        if (!findFormErrorsForRegister()) {
            let request = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            }
            // AuthService.register(request)
            //     .then(response => {
            //         console.log(response.data)
            //         setShowSuccessfulSignUp(true)
            //         setTimeout(function () {
            //             if (props.show) {
            //                 props.onHide()
            //             }
            //         }, 5000);
            //     })
            //     .catch(error => {
            //         console.log(error.response.data)
            //         setShowErrorSignUp(error.response.data.message)
            //     })
        }
    }

    const findFormErrorsForRegister = () => {
        let isErrors = false

        let errors =
            UserValidator.validateAllForSignUp(firstname, lastname, email, passport, bloodType, age, password)

        setFirstnameError(errors.firstnameError)
        setLastnameError(errors.lastnameError)
        setEmailError(errors.emailError)
        setPassportError(errors.passportError)
        setBloodTypeError(errors.bloodTypeError)
        setAgeError(errors.ageError)
        setPasswordError(errors.passwordError)

        for (let key in errors) {
            if (errors[key] !== '') {
                isErrors = true
            }
        }

        return isErrors
    }

    return (
        <Modal{...props} size="lg"
              dialogClassName="modal-90w public-profile-modal-class"
              aria-labelledby="example-custom-modal-styling-title"
              className="special_modal">
            <Modal.Header closeButton>
                <Modal.Title>Регистрация</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*<CSSTransition in={showErrorSignUp} classNames="my-node" timeout={100} unmountOnExit>*/}
                {/*    <Alert variant="danger" onClose={() => setShowErrorSignUp(false)} dismissible>*/}
                {/*        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>*/}
                {/*        <p>{showErrorSignUp}</p>*/}
                {/*    </Alert>*/}
                {/*</CSSTransition>*/}
                {/*<CSSTransition in={showSuccessfulSignUp} classNames="my-node" timeout={100} unmountOnExit>*/}
                {/*    <Alert variant="success" onClose={() => setShowSuccessfulSignUp(false)} dismissible>*/}
                {/*        <Alert.Heading>All right! You have successfully registered!</Alert.Heading>*/}
                {/*        <p>Your username: {username}. Close after 5sec...</p>*/}
                {/*    </Alert>*/}
                {/*</CSSTransition>*/}
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label><b>Имя</b></Form.Label>
                                <Form.Control className="my-input"
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
                    <Form.Group className="mb-3">
                        <Form.Label><b>Пароль</b></Form.Label>
                        <Form.Control className="my-input"
                                      type="password"
                                      placeholder="Введите свой пароль"
                                      autoComplete="off"
                                      isInvalid={passwordError}
                                      onChange={changePasswordHandler}
                        />
                        <Form.Control.Feedback type='invalid'>{passwordError}</Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={props.onHide}><b>Отмена</b></Button>
                <Button variant="outline-success" type="submit" onClick={register}><b>Регистрация</b></Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SignUpModal