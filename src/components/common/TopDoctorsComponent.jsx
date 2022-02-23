import React from 'react';
import {Col, Row} from "react-bootstrap";
import imgDoctor1 from "../../img/doctor1.jpg";
import imgDoctor2 from "../../img/doctor2.jpg";
import imgDoctor3 from "../../img/doctor3.jpg";
import RoundedImageComponent from "./RoundedImageComponent";

function TopDoctorsComponent() {
    return (
        <div className="text-center">
            <h1><b>Наши лучшие специалисты</b></h1>
            <hr/>
            <Row>
                <Col><RoundedImageComponent name="Татьяна Навицкая" img={imgDoctor1} profession="Врач-терапевт"/></Col>
                <Col><RoundedImageComponent name="Петр Иванов" img={imgDoctor2} profession="Врач-офтальмолог"/></Col>
                <Col><RoundedImageComponent name="Дмитрий Мелих" img={imgDoctor3} profession="Врач-хирург"/></Col>
            </Row>
        </div>
    );
}

export default TopDoctorsComponent;