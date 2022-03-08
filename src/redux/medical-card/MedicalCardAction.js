import * as types from "./MedicalCardActionType"
import MedicalCardService from "../../service/MedicalCardService";
import AppointmentService from "../../service/AppointmentService";
import {setLoadingAppointments} from "../appointment/AppointmentAction";

const gotMedicalCardsSuccess = (medicalCards) => ({
    type: types.GET_MEDICAL_CARDS,
    payload: medicalCards,
})

const gotMedicalCardSuccess = (medicalCard) => ({
    type: types.GET_MEDICAL_CARD,
    payload: medicalCard,
})

const createdMedicalCardSuccess = (medicalCard) => ({
    type: types.CREATE_MEDICAL_CARD,
    payload: medicalCard,
})

const updatedMedicalCardSuccess = (medicalCard) => ({
    type: types.UPDATE_MEDICAL_CARD,
    payload: medicalCard,
})

const deletedMedicalCardSuccess = (id) => ({
    type: types.DELETE_MEDICAL_CARD,
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

export const setLoadingMedicalCards = (loading) => ({
    type: types.SET_LOADING_MEDICAL_CARDS,
    payload: loading
})

export const setLoadingMedicalCard = (loading) => ({
    type: types.SET_LOADING_MEDICAL_CARD,
    payload: loading
})

//============================================ Axios requests ==========================================================

export const findMedicalCards = (currentPage = 0, sizePage = 0) => {
    return function (dispatch) {
        dispatch(setLoadingMedicalCards(true))
        MedicalCardService.findAll(currentPage, sizePage)
            .then((resp) => {
                dispatch(gotMedicalCardsSuccess(resp.data))
                console.log(resp.data)
            })
            .catch(error => {
                dispatch(setLoadingMedicalCards(false))
                console.log(error)
            })
    }
}


export const findMedicalCardById = (id) => {
    return function (dispatch) {
        dispatch(setLoadingMedicalCard(true))
        MedicalCardService.findById(id)
            .then((resp) => {
                dispatch(gotMedicalCardSuccess(resp.data))
                console.log(resp.data)
            })
            .catch(error => {
                console.log(error)
                dispatch(setLoadingMedicalCard(false))
            })
    }
}

export const findMedicalCardsByUserId = (currentPage = 0, sizePage = 0, userId) => {
    return function (dispatch) {
        dispatch(setLoadingAppointments(true))
        MedicalCardService.findAllByUserId(currentPage, sizePage, userId)
            .then((resp) => {
                dispatch(gotMedicalCardsSuccess(resp.data))
                console.log(resp.data)
            })
            .catch(error => {
                dispatch(setLoadingAppointments(false))
                console.log(error)
            })
    }
}

export function createMedicalCard(medicalCard) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            MedicalCardService.create(medicalCard)
                .then((response) => {
                    dispatch(createdMedicalCardSuccess(response.data))
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

export const updateMedicalCard = (appointment, id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            MedicalCardService.update(appointment, id)
                .then((response) => {
                    dispatch(updatedMedicalCardSuccess(response.data))
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

export const deleteMedicalCardById = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            MedicalCardService.deleteById(id)
                .then((response) => {
                    dispatch(deletedMedicalCardSuccess(id))
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