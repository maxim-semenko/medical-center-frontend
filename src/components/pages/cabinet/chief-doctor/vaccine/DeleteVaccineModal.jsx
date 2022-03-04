import React from 'react';
import {Button, Modal} from "react-bootstrap";

function DeleteVaccineModal(props) {
    // const dispatch = useDispatch()
    // const {genre, loading} = useSelector(state => state.dataGenres)

    const handleSubmit = () => {
        // dispatch(deleteGenreById(genre.id))
        props.onHide()
    }

    const closeModal = () => {
        props.onHide()
    }


    // toast.configure()
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
                    <p>Вы уверены, что хотите удалить эту вакцину?</p>
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