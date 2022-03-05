import React from 'react';
import NavigationBar from "../../../common/NavigationBar";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import Footer from "../../../common/Footer";

function DoctorPage(props) {

    const Content = () => {
        return (
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Управление врача</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet">
                            <Button variant="outline-danger" size="lg">Назад</Button>
                        </Link>
                    </div>
                    <div style={{paddingTop: "3%"}}>
                        <Link to="all-patients" className="my-link">
                            <h1>Список всех своих пациентов</h1>
                        </Link>
                        <hr/>
                        <Link to="all-patients" className="my-link">
                            <h1>Список вакцинации пациентов</h1>
                        </Link>
                        <hr/>
                    </div>
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

export default DoctorPage;