import React from 'react';
import NavigationBar from "../../../common/NavigationBar";
import {Button, Container} from "react-bootstrap";
import Footer from "../../../common/Footer";
import {Link} from "react-router-dom";

function DiseaseHistoryPage() {

    const Content = () => {
        return (
            <Container className="main-container">
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>История болезней</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet"><Button variant="outline-danger" size="lg">Назад</Button></Link>
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

export default DiseaseHistoryPage;