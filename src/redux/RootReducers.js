import {combineReducers} from "redux";
import vaccineReducer from "./vaccine/VaccineReducer";
import employeeReducer from "./employee/EmployeeReducer";

// There is store all reducers for work with any entity
const rootReducers = combineReducers({
    vaccineDate: vaccineReducer,
    employeeDate: employeeReducer,
})

export default rootReducers