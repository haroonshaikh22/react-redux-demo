import { combineReducers } from "redux";
import cakeReducer from './cake/cakeReducer'
import icecreamReducer from "./iceCream/icecreamReducers";
import userReducer from "./User/userReducers";
const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream : icecreamReducer,
    user : userReducer
})

export default rootReducer