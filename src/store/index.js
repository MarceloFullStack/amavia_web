import {createStore, combineReducers} from 'redux'
import sideBarReducer from './sideBarReducer'
import toastReducer from './toastReducer'


const rootReducer = combineReducers({
  sideBarReducer,
  toastReducer
})
export default createStore(rootReducer)
