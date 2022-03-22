import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {findVaccines} from "../../../../../redux/vaccine/VaccineAction";
import {ImCross} from "react-icons/im";
import '../../../../../styles/RemoveIcon.css'
import {updatePatientById} from "../../../../../redux/patient/PatientAction";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


function UpdatePatientVaccineModal(props) {
    const dispatch = useDispatch()
    const {patient, loadingPatient,} = useSelector(state => state.patientDate)
    const {vaccines} = useSelector(state => state.vaccineDate)
    const [selectedVaccine, setSelectedVaccine] = useState(null)

    const [vaccineList, setVaccineList] = useState([])

    const [selectedVaccineError, setSelectedVaccineError] = useState('')

    useEffect(() => {
        if (!loadingPatient) {
            dispatch(findVaccines())
            setVaccineList(patient.vaccine)
        }
    }, [loadingPatient])

    const changeVaccineHandler = (event) => {
        setSelectedVaccine(JSON.parse(event.target.value))
        setSelectedVaccineError('')
    }

    const handleSubmit = () => {
        const request = {
            id: patient.id,
            firstname: patient.firstname,
            lastname: patient.lastname,
            passport: patient.passport,
            age: patient.age,
            bloodType: patient.bloodType,
            roleId: patient.roleId,
            vaccine: vaccineList
        }
        console.log(request)
        dispatch(updatePatientById(request, patient.id))
            .then(() => {
                notifySuccess('Вакцины пациента были успешно обновлены!')
            })
            .catch(() => {
                notifyError('Произошла ошибка при обновлении вакцин пациента!')
            });
    }

    const addVaccine = () => {
        if (selectedVaccine === null) {
            setSelectedVaccineError("Вакцина не может быть пустой!")
        } else if (!vaccineList.some(item => item.name === selectedVaccine.name)) {
            setVaccineList([...vaccineList, selectedVaccine]);
        } else {
            setSelectedVaccineError("Такая вакцина уже добавлена!")
        }
    }

    const removeVaccine = (vaccine) => {
        setVaccineList(vaccineList.filter(vaccineItem => vaccineItem.name !== vaccine.name));
    }

    const notifyError = (text) => toast.error(text, {
        autoClose: 2000,
        position: "top-right",
    });

    const notifySuccess = (text) => toast.success(text, {
        autoClose: 2000,
        position: "top-right",
    });

    toast.configure()
    return (
        <div>
            <Modal{...props} size="lg"
                  dialogClassName="modal-90w public-profile-modal-class"
                  aria-labelledby="example-custom-modal-styling-title"
                  className="special_modal">
                <Modal.Header closeButton>
                    <Modal.Title><b>Изменить вакцины пациента</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        loadingPatient ?
                            <div>loading...</div>
                            :
                            <div>
                                <p><b>Пациент: </b>{patient.firstname} {patient.lastname}</p>
                                <div style={{paddingTop: "1%"}}>
                                    <b>Вакцины пациента:</b>
                                    {vaccineList.map((item, index) =>
                                        <div key={index}>
                                            {index + 1}. {item.name}
                                            <span className="remove-icon" onClick={() => removeVaccine(item)}>
                                                <ImCross size={12}/>
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label><b>Список всех доступных вакцин</b></Form.Label>
                                        <Form.Select
                                            value={JSON.stringify(selectedVaccine)}
                                            aria-label="Default select example"
                                            onChange={changeVaccineHandler}
                                            isInvalid={selectedVaccineError}
                                        >
                                            <option key={0} value={"null"}>Выберите...</option>
                                            {vaccines.map((item, index) =>
                                                <option key={index} value={JSON.stringify(item)}>
                                                    {item.name} ({item.description})
                                                </option>
                                            )}
                                        </Form.Select>
                                        <Form.Control.Feedback type='invalid'>{selectedVaccineError}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Button variant="outline-primary" onClick={() => addVaccine()}>
                                        Добавить выбранную вакцину
                                    </Button>
                                </Form>
                            </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={() => props.onHide()}>Закрыть</Button>
                    <Button variant="outline-success" onClick={handleSubmit}>Изменить</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UpdatePatientVaccineModal
