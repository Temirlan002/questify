import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        username: "",
        points: 0
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.username = action.payload
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = "";
            state.points = 0;
        },
        addPoints: (state, action) => {
            state.points += action.payload;            
        }
    }
})

export const { login, logout, addPoints } = userSlice.actions

export default userSlice.reducer