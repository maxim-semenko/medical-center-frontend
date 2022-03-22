import * as types from "./AppointmentActionType"

const initialState = {
    appointments: [],
    appointment: null,
    loadingAppointments: true,
    loadingAppointment: true,
}

const appointmentReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.GET_APPOINTMENTS:
            return {
                ...state,
                appointments: action.payload,
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
            const objIndex = state.appointments.findIndex((item => item.id === action.payload.id));
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
