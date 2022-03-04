import {combineReducers} from "redux";
import vaccineReducers from "./vaccine/VaccineReducers";

// There is store all reducers for work with any entity
const rootReducers = combineReducers({
    vaccineDate: vaccineReducers,
})

export default rootReducers