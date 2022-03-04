import React, {useEffect, useState} from 'react';
import NavigationBar from "../../../../common/NavigationBar";
import {Button, Container, Spinner, Table} from "react-bootstrap";
import Footer from "../../../../common/Footer";
import {Link} from "react-router-dom";
import axios from "axios";
import DeleteVaccineModal from "./DeleteVaccineModal";
import CreateUpdateVaccineModal from "./CreateUpdateVaccineModal";

function AllVaccinesPage() {

    const [vaccines, setVaccines] = useState([])
    const [showCreateUpdateVaccinesDialog, setShowCreateUpdateVaccinesDialog] = useState(false)
    const [showDeleteVaccinesDialog, setShowDeleteVaccinesDialog] = useState(false)
    const [modeDialog, setModeDialog] = useState('')

    useEffect(() => {
        axios.get("/api/v1/vaccines")
            .then(resp => {
                console.log(resp)
                setVaccines(resp.data)
            })
            .catch(error => {
                console.log(error)
            })
    })


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

    return (
        <div>
            {showDialogs()}
            <NavigationBar/>
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
                    <Table striped bordered hover style={{textAlign: "center"}}>
                        <thead>
                        <tr>
                            <th width="5%">Номер</th>
                            <th width="30%">Название</th>
                            <th width="45%">Описание</th>
                            <th>Действие</th>
                        </tr>
                        </thead>
                        {
                            vaccines.length === 0 ?
                                <span style={{paddingTop: "0.3%", paddingLeft: "35%", position: "absolute"}}>
                                        <Spinner animation="border"/>
                                </span>
                                :
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
                        }
                    </Table>
                </Container>
            </Container>
            <Footer/>
        </div>
    );
}

export default AllVaccinesPage;