import { combineReducers } from 'redux'
import store from './stateStore'

export const INITIAL_STATE = {
    mode: 'day',
    lang: 'en'
}

//REDUCERS
function toggleMode(state = INITIAL_STATE, action){
    return {mode: action.mode}
}

function toggleLang(state =  INITIAL_STATE, action){
    return {lang: action.lang}
}

const combinedReducers = combineReducers({
    toggleMode,
    toggleLang
})

export default combinedReducers