import * as types from "./AppointmentActionType"
import VaccineService from "../../service/AppointmentService";
import AppointmentService from "../../service/AppointmentService";

const gotAppointmentsSuccess = (appointment) => ({
    type: types.GET_APPOINTMENTS,
    payload: appointment,
})

const gotAppointmentSuccess = (appointment) => ({
    type: types.GET_APPOINTMENT,
    payload: appointment,
})

const createdAppointmentSuccess = (appointment) => ({
    type: types.CREATE_APPOINTMENT,
    payload: appointment,
})

const updatedAppointmentSuccess = (appointment) => ({
    type: types.UPDATE_APPOINTMENT,
    payload: appointment,
})

const deletedAppointmentSuccess = (id) => ({
    type: types.DELETE_APPOINTMENT,
    payload: id,
})

// export const setCurrentPage = (page) => ({
//     type: types.SET_CURRENT_PAGE_APPOINTMENT,
//     payload: page
// })
//
// export const setSizePage = (size) => ({
//     type: types.SET_SIZE_PAGE_APPOINTMENT,
//     payload: size
// })

export const setLoadingAppointment = (loading) => ({
    type: types.SET_LOADING_APPOINTMENT,
    payload: loading
})

export const setLoadingAppointments = (loading) => ({
    type: types.SET_LOADING_APPOINTMENTS,
    payload: loading
})

//============================================ Axios requests ==========================================================

export const findAppointments = (currentPage = 0, sizePage = 0) => {
    return function (dispatch) {
        dispatch(setLoadingAppointments(true))
        AppointmentService.findAll(currentPage, sizePage)
            .then((resp) => {
                dispatch(gotAppointmentsSuccess(resp.data))
                console.log(resp.data)
            })
            .catch(error => {
                dispatch(setLoadingAppointments(false))
                console.log(error)
            })
    }
}

export const findAppointmentsByUserId = (currentPage = 0, sizePage = 0, userId) => {
    return function (dispatch) {
        dispatch(setLoadingAppointments(true))
        AppointmentService.findAllByUserId(currentPage, sizePage, userId)
            .then((resp) => {
                dispatch(gotAppointmentsSuccess(resp.data))
                console.log(resp.data)
            })
            .catch(error => {
                dispatch(setLoadingAppointments(false))
                console.log(error)
            })
    }
}

export const findAppointmentById = (id) => {
    return function (dispatch) {
        dispatch(setLoadingAppointment(true))
        AppointmentService.findById(id)
            .then((resp) => {
                dispatch(gotAppointmentSuccess(resp.data))
                console.log(resp.data)
            })
            .catch(error => {
                console.log(error)
                dispatch(setLoadingAppointment(false))
            })
    }
}

export function createAppointment(appointment) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            AppointmentService.create(appointment)
                .then((response) => {
                    dispatch(createdAppointmentSuccess(response.data))
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

export const updateAppointment = (appointment, id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            AppointmentService.update(appointment, id)
                .then((response) => {
                    dispatch(updatedAppointmentSuccess(response.data))
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

export const deleteAppointmentById = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            AppointmentService.deleteById(id)
                .then((response) => {
                    dispatch(deletedAppointmentSuccess(id))
                    console.log(response)
                    return resolve(response);
                })
                .catch(error => {
                    console.log(error)
                    return reject(error);
                })
        })
    }
}