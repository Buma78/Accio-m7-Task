import {createStore} from 'redux'
import rootReducers from './reducer/index.js'

const store = createStore(rootReducers)

export default store;