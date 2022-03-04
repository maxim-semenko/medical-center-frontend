import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

function CreateUpdateVaccineModal(props) {

    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    // const dispatch = useDispatch()
    // const {genre, loading} = useSelector(state => state.dataGenres)

    const handleSubmit = () => {
        let request = {
            name: name,
            description: description,
        }
        if (!findErrors(request)) {

        }
        props.onHide()
    }

    const findErrors = (request) => {

    }

    // toast.configure()
    return (
        <div>
            <Modal{...props} size="lg"
                  dialogClassName="modal-90w public-profile-modal-class"
                  aria-labelledby="example-custom-modal-styling-title"
                  className="special_modal">
                <Modal.Header closeButton>
                    <Modal.Title><b>{props.mode === "create" ? "Добавить вакцину" : "Изменить вакцину"}</b></Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-dark">
                    <p>Вы уверены, что хотите удалить эту вакцину?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={() => props.onHide()}>Закрыть</Button>
                    <Button variant={props.mode === "create" ? "outline-primary" : "outline-success"}
                            type="submit"
                            onClick={handleSubmit}>
                        {props.mode === "create" ? "Добавить" : "Изменить"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CreateUpdateVaccineModal;