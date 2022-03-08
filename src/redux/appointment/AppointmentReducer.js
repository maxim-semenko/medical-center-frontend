import * as types from "./AppointmentActionType"

const initialState = {
    appointments: [],
    appointment: null,
    loadingAppointments: true,
    loadingAppointment: true,
    currentPage: 1,
    sizePage: 5,
    totalElements: 0,
    totalPages: 0,
    numberOfElements: 0,
}

const appointmentReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.GET_APPOINTMENTS:
            return {
                ...state,
                appointments: action.payload,
                // totalElements: action.payload.totalElements,
                // totalPages: action.payload.totalPages,
                // numberOfElements: action.payload.numberOfElements,
                loadingAppointments: false,
            }
        case types.GET_APPOINTMENT:
            return {
                ...state,
                appointment: action.payload,
                loadingAppointment: false,
            }
        case types.CREATE_APPOINTMENT:
            return {
                ...state,
                appointments: [...state.appointments, action.payload]
            }
        case types.UPDATE_APPOINTMENT:
            const objIndex = state.appointments.findIndex((item => item.appointmentId === action.payload.appointmentId));
            let updatedAppointments = state.appointments;
            updatedAppointments[objIndex] = action.payload
            return {
                ...state,
                appointments: updatedAppointments,
            }
        case types.DELETE_APPOINTMENT:
            return {
                ...state,
                appointments: state.appointments.filter(item => item.id !== action.payload),
            }
        case types.SET_CURRENT_PAGE_APPOINTMENT:
            return {
                ...state,
                currentPage: action.payload
            }
        case types.SET_SIZE_PAGE_APPOINTMENT:
            return {
                ...state,
                sizePage: action.payload
            }
        case types.SET_LOADING_APPOINTMENTS:
            return {
                ...state,
                loadingAppointments: action.payload
            }
        case types.SET_LOADING_APPOINTMENT:
            return {
                ...state,
                loadingAppointment: action.payload
            }
        default:
            return state
    }
}

export default appointmentReducer;