import {useSelector} from "react-redux";
import {Button, Modal} from "react-bootstrap";
import React from "react";

function AboutEmployeeModal(props) {
    const {employee, loadingEmployee} = useSelector(state => state.employeeDate)

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
                    <Modal.Title><b>Информация о сотруднике</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        loadingEmployee ?
                            <div>loading...</div>
                            :
                            <div>
                                <p><b>Имя: </b>{employee.firstname}</p>
                                <p><b>Фамилия: </b>{employee.lastname}</p>
                                <p><b>Квалиффикация: </b>{employee.speciality}</p>
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

export default AboutEmployeeModal
