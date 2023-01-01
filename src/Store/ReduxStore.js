import rootReducer from "../Reducers/CombineReducers.js"
import { legacy_createStore as createStore } from "redux"

const store = createStore(rootReducer)

export default store