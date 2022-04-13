import React from 'react';
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import NavigationBar from "../../../common/NavigationBar";
import Footer from "../../../common/Footer";
import "../../../../styles/Link.css"

function AppointmentToDoctorPage() {

    const Content = () => {
        return (
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Управление глав-врача</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet">
                            <Button variant="outline-danger" size="lg">Назад</Button>
                        </Link>
                    </div>
                    <div style={{paddingTop: "3%"}}>
                        <Link to="/cabinet/chief-doctor/all-employees" className="my-link">
                            <h1>Список сотрудников</h1>
                        </Link>
                        <hr/>
                        <Link to="/cabinet/chief-doctor/all-vaccines" className="my-link">
                            <h1>Список вакцин</h1>
                        </Link>
                        <hr/>
                        <Link to="/cabinet/chief-doctor/all-reports" className="my-link">
                            <h1>Список отчетов</h1>
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

export default AppointmentToDoctorPage;
