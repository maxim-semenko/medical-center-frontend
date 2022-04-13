import * as types from "./PatientActionType"
import EmployeeService from "../../service/EmployeeService";
import UserService from "../../service/UserService";

const gotPatientsSuccess = (patients) => ({
    type: types.GET_PATIENTS_BY_EMPLOYEE_ID,
    payload: patients,
})

const gotPatientSuccess = (patient) => ({
    type: types.GET_PATIENT_BY_ID,
    payload: patient,
})

const updatedPatientSuccess = (patient) => ({
    type: types.UPDATE_PATIENT_VACCINE,
    payload: patient,
})

export const setLoadingPatients = (loading) => ({
    type: types.SET_LOADING_PATIENTS,
    payload: loading
})

export const setLoadingPatient = (loading) => ({
    type: types.SET_LOADING_PATIENT,
    payload: loading
})

//============================================ Axios requests ==========================================================

export const findPatientsByEmployeeId = (employeeId) => {
    return function (dispatch) {
        dispatch(setLoadingPatients(true))
        EmployeeService.findAllPatientsByEmployeeId(employeeId)
            .then((resp) => {
                console.log(resp.data)
                dispatch(gotPatientsSuccess(resp.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(setLoadingPatients(false))
            })
    }
}

export const findPatientById = (id) => {
    return function (dispatch) {
        dispatch(setLoadingPatient(true))
        UserService.findById(id)
            .then((resp) => {
                console.log(resp.data)
                dispatch(gotPatientSuccess(resp.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(setLoadingPatient(false))
            })
    }
}

export const updatePatientById = (request, id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            UserService.updateById(request, id)
                .then((response) => {
                    dispatch(updatedPatientSuccess(response.data))
                    console.log(response)
                    return resolve(response);
                })
                .catch(error => {
                    console.log(error)
                    return reject(error);
                })
        })
    };
}
