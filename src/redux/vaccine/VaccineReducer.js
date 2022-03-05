import * as types from "./VaccineActionType"

const initialState = {
    vaccines: [],
    vaccine: null,
    loadingVaccines: true,
    loadingVaccine: true,
    currentPage: 1,
    sizePage: 5,
    totalElements: 0,
    totalPages: 0,
    numberOfElements: 0,
}

const vaccineReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.GET_VACCINES:
            return {
                ...state,
                vaccines: action.payload,
                // totalElements: action.payload.totalElements,
                // totalPages: action.payload.totalPages,
                // numberOfElements: action.payload.numberOfElements,
                loadingVaccines: false,
            }
        case types.GET_VACCINE:
            return {
                ...state,
                vaccine: action.payload,
                loadingVaccine: false,
            }
        case types.CREATE_VACCINE:
            return {
                ...state,
                vaccines: [...state.vaccines, action.payload]
            }
        case types.UPDATE_VACCINE:
            const objIndex = state.vaccines.findIndex((item => item.id === action.payload.id));
            let updatedVaccines = state.vaccines;
            updatedVaccines[objIndex] = action.payload
            return {
                ...state,
                vaccines: updatedVaccines,
            }
        case types.DELETE_VACCINE:
            return {
                ...state,
                vaccines: state.vaccines.filter(item => item.id !== action.payload),
                loading: false,
            }
        case types.SET_CURRENT_PAGE_VACCINE:
            return {
                ...state,
                currentPage: action.payload
            }
        case types.SET_SIZE_PAGE_VACCINE:
            return {
                ...state,
                sizePage: action.payload
            }
        case types.SET_LOADING_VACCINES:
            return {
                ...state,
                loadingVaccines: action.payload
            }
        case types.SET_LOADING_VACCINE:
            return {
                ...state,
                loadingVaccine: action.payload
            }
        default:
            return state
    }
}

export default vaccineReducer;