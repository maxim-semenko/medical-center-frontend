import * as types from "./EmployeeActionType"

const initialState = {
    employees: [],
    employee: null,
    loadingEmployees: true,
    loadingEmployee: true,
}

const employeeReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.GET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
                loadingEmployees: false,
            }
        case types.GET_EMPLOYEE:
            return {
                ...state,
                employee: action.payload,
                loadingEmployee: false,
            }
        case types.SET_CURRENT_PAGE_EMPLOYEE:
            return {
                ...state,
                currentPage: action.payload
            }
        case types.SET_SIZE_PAGE_EMPLOYEE:
            return {
                ...state,
                sizePage: action.payload
            }
        case types.SET_LOADING_EMPLOYEES:
            return {
                ...state,
                loadingEmployees: action.payload
            }
        case types.SET_LOADING_EMPLOYEE:
            return {
                ...state,
                loadingEmployee: action.payload
            }
        default:
            return state
    }
}

export default employeeReducer;
