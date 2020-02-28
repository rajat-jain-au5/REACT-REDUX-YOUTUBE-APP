import {combineReducers} from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {authReducer} from './authReducer';
import {videoReducer } from './videoReducer';


const rootReducers=combineReducers({
    auth:authReducer,
    video:videoReducer
})














let store = createStore(rootReducers, applyMiddleware(thunk))
export default store
