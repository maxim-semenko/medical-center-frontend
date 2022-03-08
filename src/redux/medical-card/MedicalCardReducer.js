import * as types from "./MedicalCardActionType"

const initialState = {
    medicalCards: [],
    medicalCard: null,
    loadingMedicalCards: true,
    loadingMedicalCard: true,
    currentPage: 1,
    sizePage: 5,
    totalElements: 0,
    totalPages: 0,
    numberOfElements: 0,
}

const medicalCardReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.GET_MEDICAL_CARDS:
            return {
                ...state,
                medicalCards: action.payload,
                // totalElements: action.payload.totalElements,
                // totalPages: action.payload.totalPages,
                // numberOfElements: action.payload.numberOfElements,
                loadingMedicalCards: false,
            }
        case types.GET_MEDICAL_CARD:
            return {
                ...state,
                medicalCard: action.payload,
                loadingMedicalCard: false,
            }
        case types.CREATE_MEDICAL_CARD:
            return {
                ...state,
                medicalCards: [...state.medicalCards, action.payload]
            }
        case types.UPDATE_MEDICAL_CARD:
            const objIndex = state.medicalCards.findIndex((item => item.id === action.payload.id));
            let updatedMedicalCards = state.medicalCards;
            updatedMedicalCards[objIndex] = action.payload
            return {
                ...state,
                medicalCards: updatedMedicalCards,
            }
        case types.DELETE_MEDICAL_CARD:
            return {
                ...state,
                medicalCards: state.medicalCards.filter(item => item.id !== action.payload),
            }
        case types.SET_CURRENT_PAGE_MEDICAL_CARD:
            return {
                ...state,
                currentPage: action.payload
            }
        case types.SET_SIZE_PAGE_MEDICAL_CARD:
            return {
                ...state,
                sizePage: action.payload
            }
        case types.SET_LOADING_MEDICAL_CARDS:
            return {
                ...state,
                medicalCards: action.payload
            }
        case types.SET_LOADING_MEDICAL_CARD:
            return {
                ...state,
                loadingEmployee: action.payload
            }
        default:
            return state
    }
}

export default medicalCardReducer;