import * as types from "./EmployeeActionType"
import EmployeeService from "../../service/EmployeeService";

const gotEmployeesSuccess = (employees) => ({
    type: types.GET_EMPLOYEES,
    payload: employees,
})

const gotEmployeeSuccess = (employee) => ({
    type: types.GET_EMPLOYEE,
    payload: employee,
})

export const setLoadingEmployees = (loading) => ({
    type: types.SET_LOADING_EMPLOYEES,
    payload: loading
})

export const setLoadingEmployee = (loading) => ({
    type: types.SET_LOADING_EMPLOYEE,
    payload: loading
})

//============================================ Axios requests ==========================================================

export const findEmployees = (currentPage = 0, sizePage = 0) => {
    return function (dispatch) {
        dispatch(setLoadingEmployees(true))
        EmployeeService.findAll(currentPage, sizePage)
            .then((resp) => {
                console.log(resp.data)
                dispatch(gotEmployeesSuccess(resp.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(setLoadingEmployees(false))
            })
    }
}

export const findEmployeeById = (id) => {
    return function (dispatch) {
        dispatch(setLoadingEmployee(true))
        EmployeeService.findById(id)
            .then((resp) => {
                dispatch(gotEmployeeSuccess(resp.data))
                console.log(resp.data)
            })
            .catch(error => {
                dispatch(setLoadingEmployee(false))
                console.log(error)
            })
    }
}
