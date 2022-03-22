import * as types from "./VaccineActionType"
import VaccineService from "../../service/VaccineService";

const gotVaccinesSuccess = (vaccines) => ({
    type: types.GET_VACCINES,
    payload: vaccines,
})

const gotVaccineSuccess = (vaccine) => ({
    type: types.GET_VACCINE,
    payload: vaccine,
})

const createdVaccineSuccess = (vaccine) => ({
    type: types.CREATE_VACCINE,
    payload: vaccine,
})

const updatedVaccineSuccess = (vaccine) => ({
    type: types.UPDATE_VACCINE,
    payload: vaccine,
})

const deletedVaccineSuccess = (id) => ({
    type: types.DELETE_VACCINE,
    payload: id,
})

export const setLoadingVaccines = (loading) => ({
    type: types.SET_LOADING_VACCINES,
    payload: loading
})

export const setLoadingVaccine = (loading) => ({
    type: types.SET_LOADING_VACCINE,
    payload: loading
})

//============================================ Axios requests ==========================================================

export const findVaccines = (currentPage = 0, sizePage = 0) => {
    return function (dispatch) {
        dispatch(setLoadingVaccines(true))
        VaccineService.findAll(currentPage, sizePage)
            .then((resp) => {
                dispatch(gotVaccinesSuccess(resp.data))
                console.log(resp.data)
            })
            .catch(error => {
                dispatch(setLoadingVaccines(false))
                console.log(error)
            })
    }
}


export const findVaccineById = (id) => {
    return function (dispatch) {
        dispatch(setLoadingVaccine(true))
        VaccineService.findById(id)
            .then((resp) => {
                dispatch(gotVaccineSuccess(resp.data))
                console.log(resp.data)
            })
            .catch(error => {
                console.log(error)
                dispatch(setLoadingVaccine(false))
            })
    }
}

export function createVaccine(vaccine) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            VaccineService.create(vaccine)
                .then((response) => {
                    dispatch(createdVaccineSuccess(response.data))
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

export const updateVaccine = (vaccine, id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            VaccineService.update(vaccine, id)
                .then((response) => {
                    dispatch(updatedVaccineSuccess(response.data))
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

export const deleteVaccineById = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            VaccineService.deleteById(id)
                .then((response) => {
                    dispatch(deletedVaccineSuccess(id))
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
