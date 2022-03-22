import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {useSelector} from "react-redux";
import Moment from "moment";

function AboutMedicalCardModal(props) {
    const {medicalCard, loadingMedicalCard} = useSelector(state => state.medicalCardDate)

    const getFullEmployeeName = (employee) => {
        return employee.firstname + " " + employee.lastname + " (" + employee.speciality + ")"
    }

    return (
        <div>
            <Modal{...props} size="lg"
                  dialogClassName="modal-90w public-profile-modal-class"
                  aria-labelledby="example-custom-modal-styling-title"
                  className="special_modal">
                <Modal.Header closeButton>
                    <Modal.Title><b>Информация о мед-карте</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        loadingMedicalCard ?
                            <div>loading...</div>
                            :
                            <div>
                                <p>
                                    <b>Дата приема: </b>
                                    {Moment(medicalCard.appointment.startDate).locale('ru').format('LLL')} -
                                    {' '}{Moment(medicalCard.appointment.endDate).locale('ru').format('LLL')}
                                </p>
                                <p><b>Пациент: </b> {medicalCard.user.firstname} {medicalCard.user.lastname}</p>
                                <p><b>Врач: </b> {getFullEmployeeName(medicalCard.employee)}</p>
                                <p><b>Болезнь: </b> {medicalCard.disease.name} ({medicalCard.disease.description})</p>
                                <p><b>Описание: </b> {medicalCard.description}</p>
                                <p>
                                    <b>Период: </b>
                                    {Moment(medicalCard.startDate).locale('ru').format('LLL')} -
                                    {' '}{Moment(medicalCard.endDate).locale('ru').format('LLL')}
                                </p>
                                <p><b>Реабилитация: </b>{medicalCard.isRehabilitation ? 'да' : 'нет'}</p>
                                <p><b>Подтверждение: </b>{medicalCard.isConfirmation ? 'да' : 'нет'}</p>
                            </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => props.onHide()}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AboutMedicalCardModal;
