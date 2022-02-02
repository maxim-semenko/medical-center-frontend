import React, {useState} from 'react'
import {Button, Container, Nav, Navbar} from "react-bootstrap"
import imgLogo from '../img/logo.png'

import {Cookies} from "react-cookie"
// import AuthService from "../../service/AuthService"
import {Link} from "react-router-dom";
import SignInDialog from "./SignInDialog";
import SignUpDialog from "./SignUpDialog";

function NavigationBar(props) {
    const cookies = new Cookies()
    const [showSignInModal, setShowSignInModal] = useState(false)
    const [showSignUpModal, setShowSignUpModal] = useState(false)
    const token = cookies.get("token");

    const isLogin = () => {
        if (token != null) {
            return (
                <div>
                    <Link to="/profile/cabinet">
                        <Button variant="outline-primary"><b>profile</b></Button>{' '}
                    </Link>
                    {/*<Button variant="outline-danger" href={"/"}*/}
                    {/*        onClick={() => AuthService.logout(cookies)}><b>Logout</b></Button>*/}
                </div>
            )
        } else {
            return (
                <div>
                    <Button variant="outline-primary" onClick={() => setShowSignInModal(true)}><b>Войти</b></Button>
                    {' '}
                    <Button variant="outline-success" onClick={() => setShowSignUpModal(true)}><b>Регистрация</b></Button>
                </div>
            )
        }
    }

    const showModals = () => {
        if (showSignUpModal) {
            return (
                <SignUpDialog
                    show={showSignUpModal}
                    onHide={() => setShowSignUpModal(false)}
                />
            )
        }
        if (showSignInModal) {
            return (
                <SignInDialog
                    show={showSignInModal}
                    onHide={() => setShowSignInModal(false)}
                />
            )
        }
    }

    return (
        <div>
            {showModals()}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{fontSize: "18px"}}>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img alt="" src={imgLogo} width="41" height="41" className="d-inline-block align-top"/>{' '}
                        <strong style={{fontSize: "24px"}}>Мед-центр «Валерия»</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/"><b>Главная</b></Nav.Link>
                            <Nav.Link as={Link} to="/about"><b>О нас</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        {isLogin()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar