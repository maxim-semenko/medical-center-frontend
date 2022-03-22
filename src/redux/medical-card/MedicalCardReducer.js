import * as types from "./MedicalCardActionType"

const initialState = {
    medicalCards: [],
    medicalCard: null,
    loadingMedicalCards: true,
    loadingMedicalCard: true,
}

const medicalCardReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.GET_MEDICAL_CARDS:
            return {
                ...state,
                medicalCards: action.payload,
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
        case types.SET_LOADING_MEDICAL_CARDS:
            return {
                ...state,
                loadingMedicalCards: action.payload
            }
        case types.SET_LOADING_MEDICAL_CARD:
            return {
                ...state,
                loadingMedicalCard: action.payload
            }
        default:
            return state
    }
}

export default medicalCardReducer;
