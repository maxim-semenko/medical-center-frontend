import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {useSelector} from "react-redux";

function AboutVaccineModal(props) {
    const {vaccine, loadingVaccine} = useSelector(state => state.vaccineDate)

    return (
        <div>
            <Modal{...props} size="lg"
                  dialogClassName="modal-90w public-profile-modal-class"
                  aria-labelledby="example-custom-modal-styling-title"
                  className="special_modal">
                <Modal.Header closeButton>
                    <Modal.Title><b>Информация вакцины</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        loadingVaccine ?
                            <div>loading...</div>
                            :
                            <div>
                                <p><b>Название:</b> {vaccine.name}</p>
                                <p><b>Описание:</b> {vaccine.description}</p>
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

export default AboutVaccineModal;