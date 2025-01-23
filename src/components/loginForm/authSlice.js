import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true');
        },
        logout: (state) => {
            state.isLoggedIn = false;
            localStorage.setItem('isLoggedIn', 'false');
        },
    },
});

export const { login, logout } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export default authSlice.reducer;