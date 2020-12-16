import { combineReducers } from "redux";
import productReducer from './product'
// import globalReducer from './global'

const reducer = combineReducers({
   productReducer,
   // globalReducer,
})

export default reducer;