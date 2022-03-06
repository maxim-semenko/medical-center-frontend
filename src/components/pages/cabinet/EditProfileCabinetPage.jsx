import React from 'react';
import NavigationBar from "../../common/NavigationBar";
import Footer from "../../common/Footer";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import EditFormPatient from "./EditFormPatient";

function EditProfilePatientCabinetPage() {

    const Content = () => {
        return (
            <Container className="main-container" style={{marginBottom: "11%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Редактирование профиля</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "25px"}}>
                        <Link to="/cabinet"><Button variant="outline-danger" size="lg">Назад</Button></Link>
                    </div>
                    <EditFormPatient/>
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

export default EditProfilePatientCabinetPage;