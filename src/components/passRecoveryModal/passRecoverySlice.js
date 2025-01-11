import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const passRecoverySlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
    },
})

export const { openModal, closeModal } = passRecoverySlice.actions;

export default passRecoverySlice.reducer;