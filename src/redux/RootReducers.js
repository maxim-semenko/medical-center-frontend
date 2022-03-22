import {combineReducers} from "redux";
import vaccineReducer from "./vaccine/VaccineReducer";
import employeeReducer from "./employee/EmployeeReducer";
import appointmentReducer from "./appointment/AppointmentReducer";
import medicalCardReducer from "./medical-card/MedicalCardReducer";
import diseaseReducer from "./disease/DiseaseReducer";
import patientReducer from "./patient/PatientReducer";

// There is store all reducers for work with any entity
const rootReducers = combineReducers({
    appointmentDate: appointmentReducer,
    vaccineDate: vaccineReducer,
    employeeDate: employeeReducer,
    medicalCardDate: medicalCardReducer,
    diseaseDate: diseaseReducer,
    patientDate: patientReducer,
})

export default rootReducers
