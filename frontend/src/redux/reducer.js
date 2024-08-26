import loginReducer from "./user/loginSlice";
import {combineReducers} from '@reduxjs/toolkit'
import messageReducer from "./user/messageSlice";

const rootReducer=combineReducers({
    login:loginReducer,
    message:messageReducer
});

export default rootReducer;