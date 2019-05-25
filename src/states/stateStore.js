import { createStore } from 'redux'
import combinedReducers from './reducers'


// STORE
const store = createStore(combinedReducers);
export default store
