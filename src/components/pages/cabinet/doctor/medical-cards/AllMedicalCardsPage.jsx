import React, {useEffect, useState} from 'react';
import NavigationBar from "../../../../common/NavigationBar";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import Footer from "../../../../common/Footer";
import {Link} from "react-router-dom";
import CreateUpdateMedicalCardModal from "./CreateUpdateMedicalCardModal";
import Moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {findMedicalCardById, findMedicalCardsByEmployeeId} from "../../../../../redux/medical-card/MedicalCardAction";
import AboutMedicalCardModal from "./AboutMedicalCardModal";
import DeleteMedicalCardModal from "./DeleteMedicalCardModal";

function AllMedicalCardsPage() {
    const [isInit, setIsInit] = useState(false)
    const dispatch = useDispatch()
    const {medicalCards, loadingMedicalCards} = useSelector(state => state.medicalCardDate)

    const [showCreateUpdateMedicalCardDialog, setShowCreateUpdateMedicalCardDialog] = useState(false)
    const [showDeleteMedicalCardDialog, setShowDeleteMedicalCardDialog] = useState(false)
    const [showAboutMedicalCardDialog, setShowAboutMedicalCardDialog] = useState(false)
    const [modeDialog, setModeDialog] = useState('')

    const employeeId = 1

    useEffect(() => {
        if (!isInit) {
            dispatch(findMedicalCardsByEmployeeId(0, 0, 1))
            setIsInit(true)
        }
    }, [isInit])

    const createMedicalCard = () => {
        setShowCreateUpdateMedicalCardDialog(true);
        setModeDialog("create")
    }

    const aboutMedicalCard = (id) => {
        dispatch(findMedicalCardById(id))
        setShowAboutMedicalCardDialog(true);
    }

    const updateMedicalCard = (id) => {
        dispatch(findMedicalCardById(id))
        setShowCreateUpdateMedicalCardDialog(true);
        setModeDialog("update")
    }

    const deleteMedicalCard = (id) => {
        dispatch(findMedicalCardById(id))
        setShowDeleteMedicalCardDialog(true);
    }

    const ActionButtons = (props) => {
        return (
            <div>
                <Button variant="outline-success" onClick={() => updateMedicalCard(props.id)}>
                    <b>Изменить</b>
                </Button>{' '}
                <Button variant="outline-danger" onClick={() => deleteMedicalCard(props.id)}>
                    <b>Удалить</b>
                </Button>{' '}
                <Button variant="outline-info" onClick={() => aboutMedicalCard(props.id)}>
                    <b>Инфо</b>
                </Button>
            </div>
        )
    }

    const showTable = () => {
        if (loadingMedicalCards) {
            return <h1 className={"text-center"}><Spinner animation="border"/></h1>
        } else {
            return (
                <Table striped bordered hover style={{textAlign: "center"}}>
                    <thead>
                    <tr>
                        <th width="5%">Номер</th>
                        <th width="20%">Пациент</th>
                        <th width="15%">Начало</th>
                        <th width="15%">Конец</th>
                        <th width="20%">Болезнь</th>
                        <th>Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        medicalCards.map((medicalCard, index) =>
                            <tr key={index}>
                                <td><b>{index + 1}</b></td>
                                <td><b>{medicalCard.user.firstname} {medicalCard.user.lastname}</b></td>
                                <td><b>{Moment(medicalCard.startDate).locale('ru').format('LLL')}</b></td>
                                <td><b>{Moment(medicalCard.endDate).locale('ru').format('LLL')}</b></td>
                                <td><b>{medicalCard.disease.name}</b></td>
                                <td><ActionButtons id={medicalCard.id}/></td>
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
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список медицинских карт</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet/doctor"><Button variant="outline-danger" size="lg">Назад</Button></Link>{' '}
                        <Button variant="outline-primary" size="lg"
                                onClick={() => createMedicalCard()}>Добавить</Button>
                    </div>
                    {showTable()}
                </Container>
            </Container>
        )
    }

    const showDialogs = () => {
        if (showCreateUpdateMedicalCardDialog) {
            return (
                <CreateUpdateMedicalCardModal
                    show={showCreateUpdateMedicalCardDialog}
                    onHide={() => setShowCreateUpdateMedicalCardDialog(false)}
                    mode={modeDialog}
                />
            )
        }
        if (showAboutMedicalCardDialog) {
            return (
                <AboutMedicalCardModal
                    show={showAboutMedicalCardDialog}
                    onHide={() => setShowAboutMedicalCardDialog(false)}
                />
            )
        }
        if (showDeleteMedicalCardDialog) {
            return (
                <DeleteMedicalCardModal
                    show={showDeleteMedicalCardDialog}
                    onHide={() => setShowDeleteMedicalCardDialog(false)}
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

export default AllMedicalCardsPage;
