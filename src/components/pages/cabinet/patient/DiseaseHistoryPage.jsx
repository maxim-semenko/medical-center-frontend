import React, {useEffect, useState} from 'react';
import NavigationBar from "../../../common/NavigationBar";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import Footer from "../../../common/Footer";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findMedicalCardsByUserId} from "../../../../redux/medical-card/MedicalCardAction";
import Moment from "moment";

function DiseaseHistoryPage() {

    const [isInit, setIsInit] = useState(false)
    const dispatch = useDispatch()
    const {
        medicalCards,
        loadingMedicalCards,
        currentPage,
        sizePage,
        totalElements
    } = useSelector(state => state.medicalCardDate)


    // Пусть в системе пользователь с id = 1
    const userId = JSON.parse(localStorage.getItem("currentUser")).id;

    useEffect(() => {
        if (!isInit) {
            dispatch(findMedicalCardsByUserId(0, 0, userId))
            setIsInit(true)
        }
    }, [isInit])


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
                        <th>Описание</th>
                        <th>Реабилитация</th>
                        <th>Подтверждение</th>
                        <th>Болезнь</th>
                    </tr>
                    </thead>
                    {
                        loadingMedicalCards ?
                            <div style={{textAlign: "center"}}>
                                    <span style={{paddingTop: "0.3%", paddingLeft: "35%", position: "absolute"}}>
                                        <Spinner animation="border"/>
                                    </span>
                            </div>
                            :
                            <tbody>
                            {
                                medicalCards.map((medicalCard, index) =>
                                    <tr key={index}>
                                        <td><b>{index + 1}</b></td>
                                        <td><b>{getFullEmployeeName(medicalCard.employee)}</b></td>
                                        <td><b>{Moment(medicalCard.startDate).locale('ru').format('LLL')}</b></td>
                                        <td><b>{Moment(medicalCard.endDate).locale('ru').format('LLL')}</b></td>
                                        <td><b>{medicalCard.description}</b></td>
                                        <td><b>{medicalCard.isRehabilitation ? 'да' : 'нет'}</b></td>
                                        <td><b>{medicalCard.isConfirmation ? 'да' : 'нет'}</b></td>
                                        <td><b>{medicalCard.diseaseId}</b></td>
                                    </tr>
                                )
                            }
                            </tbody>
                    }
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

    return (
        <div>
            <NavigationBar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default DiseaseHistoryPage;