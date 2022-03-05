import React, {useEffect, useState} from 'react';
import NavigationBar from "../../../../common/NavigationBar";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import Footer from "../../../../common/Footer";
import {Link} from "react-router-dom";
import DeleteVaccineModal from "./DeleteVaccineModal";
import CreateUpdateVaccineModal from "./CreateUpdateVaccineModal";
import {useDispatch, useSelector} from "react-redux";
import {findVaccines} from "../../../../../redux/vaccine/VaccineAction";

function AllVaccinesPage() {
    const [isInit, setIsInit] = useState(false)
    const dispatch = useDispatch()
    const {vaccines, loadingVaccines, currentPage, sizePage, totalElements} = useSelector(state => state.vaccineDate)

    // const [vaccines, setVaccines] = useState([])
    const [showCreateUpdateVaccinesDialog, setShowCreateUpdateVaccinesDialog] = useState(false)
    const [showDeleteVaccinesDialog, setShowDeleteVaccinesDialog] = useState(false)
    const [modeDialog, setModeDialog] = useState('')

    useEffect(() => {
        if (!isInit) {
            dispatch(findVaccines())
            setIsInit(true)
        }
    }, [isInit])


    const createVaccine = () => {
        setShowCreateUpdateVaccinesDialog(true);
        setModeDialog("create")
    }

    const updateVaccine = () => {
        setShowCreateUpdateVaccinesDialog(true);
        setModeDialog("update")
    }

    const deleteVaccine = (id) => {
        // dispatch(getGenreById(id))
        setShowDeleteVaccinesDialog(true)
    }

    const showDialogs = () => {
        if (showCreateUpdateVaccinesDialog) {
            return (
                <CreateUpdateVaccineModal
                    show={showCreateUpdateVaccinesDialog}
                    onHide={() => setShowCreateUpdateVaccinesDialog(false)}
                    mode={modeDialog}
                />
            )
        }
        if (showDeleteVaccinesDialog) {
            return (
                <DeleteVaccineModal
                    show={showDeleteVaccinesDialog}
                    onHide={() => setShowDeleteVaccinesDialog(false)}
                />
            )
        }
    }

    const Content = () => {
        return (
            <Container className="main-container" style={{marginBottom: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "15px"}}><b>Список вакцин</b></h1>
                <hr/>
                <Container>
                    <div style={{paddingBottom: "10px"}}>
                        <Link to="/cabinet/chief-doctor">
                            <Button variant="outline-danger" size="lg">Назад</Button>
                        </Link>
                        {' '}
                        <Button variant="outline-primary" size="lg" onClick={() => createVaccine()}>Добавить</Button>
                    </div>
                    {
                        loadingVaccines ?
                            <h1 className={"text-center"}><Spinner animation="border"/></h1>
                            :
                            <Table striped bordered hover style={{textAlign: "center"}}>
                                <thead>
                                <tr>
                                    <th width="5%">Номер</th>
                                    <th width="30%">Название</th>
                                    <th width="45%">Описание</th>
                                    <th>Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    vaccines.map((vaccine, index) =>
                                        <tr key={index}>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{vaccine.name}</b></td>
                                            <td><b>{vaccine.description}</b></td>
                                            <td><Button variant="outline-success"
                                                        onClick={() => updateVaccine(vaccine.id)}>
                                                <b>Изменить</b>
                                            </Button>{' '}
                                                <Button variant="outline-danger"
                                                        onClick={() => deleteVaccine(vaccine.id)}>
                                                    <b>Удалить</b>
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </Table>
                    }
                </Container>
            </Container>
        )
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

export default AllVaccinesPage;