import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user/user.reducer";

export const rootReducer = combineReducers({
    test: userReducer,
})