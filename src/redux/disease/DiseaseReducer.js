import * as types from "./DiseaseActionType"

const initialState = {
    diseases: [],
    loadingDiseases: true,
}

const diseaseReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.GET_DISEASES:
            return {
                ...state,
                diseases: action.payload,
                loadingDiseases: false,
            }
        default:
            return state
    }
}

export default diseaseReducer;