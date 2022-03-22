import {useDispatch, useSelector} from "react-redux";
import {Button, Modal} from "react-bootstrap";
import React from "react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {deleteMedicalCardById} from "../../../../../redux/medical-card/MedicalCardAction";

function DeleteMedicalCardModal(props) {

    const dispatch = useDispatch()
    const {medicalCard, loadingMedicalCard} = useSelector(state => state.medicalCardDate)

    const handleSubmit = () => {
        dispatch(deleteMedicalCardById(medicalCard.id))
            .then(() => {
                notifySuccess('Мед-карта была успешно удалена!')
                props.onHide()
            })
            .catch(() => {
                notifyError('Произошла ошибка при удалении мед-карты!')
            });
    }

    const notifyError = (text) => toast.error(text, {
        autoClose: 2000,
        position: "top-right",
    });

    const notifySuccess = (text) => toast.success(text, {
        autoClose: 2000,
        position: "top-right",
    });

    const getFullEmployeeName = (employee) => {
        return employee.firstname + " " + employee.lastname + " (" + employee.speciality + ")"
    }

    toast.configure()
    return (
        <div>
            <Modal{...props} size="lg"
                  dialogClassName="modal-90w public-profile-modal-class"
                  aria-labelledby="example-custom-modal-styling-title"
                  className="special_modal">
                <Modal.Header closeButton>
                    <Modal.Title><b>Удаление мед-карты</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        loadingMedicalCard ?
                            <div>loading...</div>
                            :
                            <div>
                                <p>Вы уверены, что хотите удалить эту мед-карту?</p>
                                <p>Пациент: {medicalCard.user.firstname} {medicalCard.user.lastname}</p>
                            </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => props.onHide()}>Закрыть</Button>
                    <Button variant={"outline-danger"} type="submit" onClick={handleSubmit}>Удалить</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DeleteMedicalCardModal
