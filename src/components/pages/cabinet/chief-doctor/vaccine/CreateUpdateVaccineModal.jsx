import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {createVaccine, updateVaccine} from "../../../../../redux/vaccine/VaccineAction";

function CreateUpdateVaccineModal(props) {

    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const [nameError, setNameError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')


    const dispatch = useDispatch()
    const {vaccines, loadingVaccines} = useSelector(state => state.vaccineDate)

    // const {genre, loading} = useSelector(state => state.dataGenres)

    const changeNameHandler = (event) => {
        setName(event.target.value)
        setNameError('')
    }

    const changeDescriptionHandler = (event) => {
        setDescription(event.target.value)
        setDescriptionError('')
    }

    const handleSubmit = () => {
        let request = {
            name: name,
            description: description,
        }
        if (!findErrors(request)) {
            if (props.mode === "create") {
                dispatch(createVaccine(request))
                    .then(() => {
                        alert("!!!!!!!!!!")
                    })
            } else {
                dispatch(updateVaccine(request, id))
            }
        }
    }

    const findErrors = (request) => {
        let errors = false

        return errors
    }

    const showContext = () => {

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
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Название</b></Form.Label>
                            <Form.Control className="my-input"
                                          type="text"
                                          value={name}
                                          placeholder="Введите название"
                                          autoComplete="off"
                                          onChange={changeNameHandler}
                                          isInvalid={nameError}
                            />
                            <Form.Control.Feedback type='invalid'>{nameError}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Описание</b></Form.Label>
                            <Form.Control className="my-input"
                                          type="text"
                                          value={description}
                                          placeholder="Введите описание"
                                          autoComplete="off"
                                          onChange={changeDescriptionHandler}
                                          isInvalid={descriptionError}
                            />
                            <Form.Control.Feedback type='invalid'>{descriptionError}</Form.Control.Feedback>
                        </Form.Group>
                    </Form>
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