import React from 'react';
import NavigationBar from "../../common/NavigationBar";
import Footer from "../../common/Footer";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function EditProfilePatientCabinetPage() {
    return (
        <div>
            <NavigationBar/>
            <Container className="main-container">
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Редактирование профиля</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet"><Button variant="outline-danger" size="lg">Назад</Button></Link>
                    </div>
                </Container>
            </Container>
            <Footer/>
        </div>
    );
}

export default EditProfilePatientCabinetPage;