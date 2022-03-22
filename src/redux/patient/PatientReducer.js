import * as types from "./PatientActionType"

const initialState = {
    patients: [],
    patient: null,
    loadingPatients: true,
    loadingPatient: true,
}

const patientReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.GET_PATIENTS_BY_EMPLOYEE_ID:
            return {
                ...state,
                patients: action.payload,
                loadingPatients: false,
            }
        case types.GET_PATIENT_BY_ID:
            return {
                ...state,
                patient: action.payload,
                loadingPatient: false,
            }
        case types.UPDATE_PATIENT_VACCINE:
            const objIndex = state.patients.findIndex((item => item.id === action.payload.id));
            let updatedPatients = state.patients;
            updatedPatients[objIndex] = action.payload
            return {
                ...state,
                patients: updatedPatients,
            }
        case types.SET_LOADING_PATIENTS:
            return {
                ...state,
                loadingPatients: action.payload
            }
        case types.SET_LOADING_PATIENT:
            return {
                ...state,
                loadingPatient: action.payload
            }
        default:
            return state
    }
}

export default patientReducer;
