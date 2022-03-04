import {applyMiddleware, createStore} from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import rootReducer from "./RootReducers"

const middlewares = [thunk]

if (process.env.NODE_EVN === "development") {
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store