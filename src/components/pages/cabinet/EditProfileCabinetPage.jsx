import React, {useState} from 'react';
import NavigationBar from "../../common/NavigationBar";
import Footer from "../../common/Footer";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import EditFormPatient from "./EditFormPatient";
import {Cookies} from "react-cookie";
import jwt_decode from "jwt-decode";
import EditFormDoctor from "./EditFormDoctor";

function EditProfilePatientCabinetPage() {

    const [role, setRole] = useState('')

    useState(() => {
        const cookies = new Cookies()
        const decoded = jwt_decode(cookies.get("token"));
        setRole(decoded.role)
    })

    const EditForm = () => {
        switch (role) {
            case "USER":
                return (<EditFormPatient/>)
            case "DOCTOR":
            case "HEAD_DOCTOR":
                return (
                    <EditFormDoctor/>
                )
            default:
                console.log("ERROR");
        }
    }

    const Content = () => {
        return (
            <Container className="main-container" style={{marginBottom: "11%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Редактирование профиля</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "25px"}}>
                        <Link to="/cabinet"><Button variant="outline-danger" size="lg"><b>Назад</b></Button></Link>
                    </div>
                </Container>
                {EditForm()}
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
