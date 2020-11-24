import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from 'redux-thunk';
import photosReducer from "./photosReducer"

const store = createStore(photosReducer, applyMiddleware(thunkMiddleware))

export default store