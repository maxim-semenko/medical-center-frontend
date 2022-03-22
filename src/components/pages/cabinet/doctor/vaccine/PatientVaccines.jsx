import React, {useEffect, useState} from 'react';
import NavigationBar from "../../../../common/NavigationBar";
import Footer from "../../../../common/Footer";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findPatientById, findPatientsByEmployeeId} from "../../../../../redux/patient/PatientAction";
import UpdatePatientVaccineModal from "./UpdatePatientVaccineModal";

function PatientVaccines(props) {

    const [isInit, setIsInit] = useState(false)
    const dispatch = useDispatch()
    const {patients, loadingPatients} = useSelector(state => state.patientDate)
    const [showUpdatePatientDialog, setShowUpdatePatientDialog] = useState(false)

    useEffect(() => {
        if (!isInit) {
            dispatch(findPatientsByEmployeeId(0, 0, 1))
            setIsInit(true)
        }
    }, [isInit])

    const updatePatientVaccine = (id) => {
        dispatch(findPatientById(id))
        setShowUpdatePatientDialog(true);
    }

    const showTable = () => {
        if (loadingPatients) {
            return <h1 className={"text-center"}><Spinner animation="border"/></h1>
        } else {
            return (
                <Table striped bordered hover style={{textAlign: "center"}}>
                    <thead>
                    <tr>
                        <th width="5%">Номер</th>
                        <th width="25%">Пациент</th>
                        <th width="50%">Вакцины</th>
                        <th>Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        patients.map((patient, index) =>
                            <tr key={index}>
                                <td><b>{index + 1}</b></td>
                                <td><b>{patient.firstname} {patient.lastname}</b></td>
                                <td>
                                    {
                                        patient.vaccine.map((item) =>
                                            <b>{item.name}, </b>
                                        )
                                    }
                                </td>
                                <td><Button variant="outline-success"
                                            onClick={() => updatePatientVaccine(patient.id)}><b>Изменить</b></Button>
                                </td>
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
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список вакцинации ваших пациентов</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet/doctor"><Button variant="outline-danger" size="lg">Назад</Button></Link>{' '}
                    </div>
                    {showTable()}
                </Container>
            </Container>
        )
    }

    const showDialogs = () => {
        if (showUpdatePatientDialog) {
            return (
                <UpdatePatientVaccineModal
                    show={showUpdatePatientDialog}
                    onHide={() => setShowUpdatePatientDialog(false)}
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

export default PatientVaccines;
