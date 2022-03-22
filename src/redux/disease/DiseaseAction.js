import * as types from "./DiseaseActionType"
import DiseaseService from "../../service/DiseaseService";

const gotDiseasesSuccess = (diseases) => ({
    type: types.GET_DISEASES,
    payload: diseases,
})

export const setLoadingDiseases = (loading) => ({
    type: types.SET_LOADING_DISEASES,
    payload: loading
})

//============================================ Axios requests ==========================================================

export const findDiseases = (currentPage = 0, sizePage = 0) => {
    return function (dispatch) {
        dispatch(setLoadingDiseases(true))
        DiseaseService.findAll(currentPage, sizePage)
            .then((resp) => {
                dispatch(gotDiseasesSuccess(resp.data))
                console.log(resp.data)
            })
            .catch(error => {
                dispatch(setLoadingDiseases(false))
                console.log(error)
            })
    }
}
