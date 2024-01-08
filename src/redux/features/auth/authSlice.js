import {createSlice} from "@reduxjs/toolkit";
const role = JSON.parse(localStorage.getItem("role")) || "";
const userName = JSON.parse(localStorage.getItem("userName")) || "";

const initialState = {
    isLoggedIn: false,
    role: role,
    userName: userName,
};

const authSlice = createSlice({
    name: "auth",
    initialState, 
    reducers: {
        SET_LOGIN(state, action){
            state.isLoggedIn = action.payload;
        },
        SET_USERNAME(state, action){
            localStorage.setItem("userName", JSON.stringify(action.payload))
            state.userName = action.payload
        },
        SET_ROLE(state, action){
            localStorage.setItem("role", JSON.stringify(action.payload))
            state.role = action.payload
        }
    }
});

export const {SET_LOGIN, SET_ROLE, SET_USERNAME} = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectRole = (state) => state.auth.role;
export const selectUserName = (state) => state.auth.userName;
export default authSlice.reducer;