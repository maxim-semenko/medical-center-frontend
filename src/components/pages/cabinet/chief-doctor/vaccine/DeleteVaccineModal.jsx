import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {createVaccine, deleteVaccineById} from "../../../../../redux/vaccine/VaccineAction";
import {toast} from "react-toastify";

function DeleteVaccineModal(props) {
    const dispatch = useDispatch()
    const {vaccine, loadingVaccine} = useSelector(state => state.vaccineDate)


    const handleSubmit = () => {
        dispatch(deleteVaccineById(vaccine.vaccineId))
            .then(() => {
                notifySuccess('Вакцина была успешно удалена!')
                props.onHide()
            })
            .catch(() => {
                notifyError('Произошла ошибка при удалении вакцины!')
            });
    }

    const closeModal = () => {
        props.onHide()
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
                    <Modal.Title><b>Удаление вакцины</b></Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-dark">
                    {
                        loadingVaccine ?
                            <div>loading...</div>
                            :
                            <div>
                                <p>Вы уверены, что хотите удалить эту вакцину?</p>
                                <p>Название: {vaccine.name}</p>
                            </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={closeModal}>Закрыть</Button>
                    <Button variant={"outline-danger"} type="submit" onClick={handleSubmit}>Удалить</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DeleteVaccineModal;