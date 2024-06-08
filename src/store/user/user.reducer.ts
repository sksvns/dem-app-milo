import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { ApiState, User } from "../../types";

type UserState = {
    users: User[];
    status: ApiState;
    error: string | null;
};

const INITIAL_STATE: UserState = {
    users: [],
    status: ApiState.Initial,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers(builder) {
        
    },
})

export default userSlice.reducer