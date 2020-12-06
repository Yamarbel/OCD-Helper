import mainReducer from './mainReducer'
import { combineReducers } from 'redux'
import statsReducer from './statsReducer'

export default combineReducers({
    main:mainReducer,
    stats:statsReducer

})