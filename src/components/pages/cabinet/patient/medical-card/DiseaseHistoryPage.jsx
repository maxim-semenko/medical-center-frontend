import React, {useEffect, useState} from 'react';
import NavigationBar from "../../../../common/NavigationBar";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import Footer from "../../../../common/Footer";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findMedicalCardById, findMedicalCardsByUserId} from "../../../../../redux/medical-card/MedicalCardAction";
import Moment from "moment";
import AboutMedicalCardModal from "../../doctor/medical-cards/AboutMedicalCardModal";

function DiseaseHistoryPage() {

    const [isInit, setIsInit] = useState(false)
    const dispatch = useDispatch()
    const {medicalCards, loadingMedicalCards} = useSelector(state => state.medicalCardDate)

    const [showAboutMedicalCardDialog, setShowAboutMedicalCardDialog] = useState(false)

    const userId = JSON.parse(localStorage.getItem("current_user")).id;

    useEffect(() => {
        if (!isInit) {
            dispatch(findMedicalCardsByUserId(userId))
            setIsInit(true)
        }
    }, [isInit])

    const aboutMedicalCard = (id) => {
        dispatch(findMedicalCardById(id))
        setShowAboutMedicalCardDialog(true);
    }

    const getFullEmployeeName = (employee) => {
        return employee.firstname + " " + employee.lastname + " (" + employee.speciality + ")"
    }

    const showTable = () => {
        if (loadingMedicalCards) {
            return <h1 className={"text-center"}><Spinner animation="border"/></h1>
        } else {
            return (
                <Table striped bordered hover style={{textAlign: "center"}}>
                    <thead>
                    <tr>
                        <th>Номер</th>
                        <th>Врач</th>
                        <th>Начало</th>
                        <th>Конец</th>
                        <th>Болезнь</th>
                        <th>Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        medicalCards.map((medicalCard, index) =>
                            <tr key={index}>
                                <td><b>{index + 1}</b></td>
                                <td><b>{getFullEmployeeName(medicalCard.employee)}</b></td>
                                <td><b>{Moment(medicalCard.startDate).locale('ru').format('LLL')}</b></td>
                                <td><b>{Moment(medicalCard.endDate).locale('ru').format('LLL')}</b></td>
                                <td><b>{medicalCard.disease.name}</b></td>
                                <td><Button variant="outline-info"
                                            onClick={() => aboutMedicalCard(medicalCard.id)}>Инфо</Button></td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            )
        }
    }

    const Content = () => {
        return (
            <Container className="main-container">
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>История болезней</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet"><Button variant="outline-danger" size="lg">Назад</Button></Link>
                    </div>
                    {showTable()}
                </Container>
            </Container>
        )
    }

    const showDialogs = () => {
        if (showAboutMedicalCardDialog) {
            return (
                <AboutMedicalCardModal
                    show={showAboutMedicalCardDialog}
                    onHide={() => setShowAboutMedicalCardDialog(false)}
                />
            )
        }
    }

    return (
        <div>
            {showDialogs()}
            <NavigationBar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default DiseaseHistoryPage;
