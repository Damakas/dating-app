import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedUser: null,
    messages: {},
    showChat: false,
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setShowChat: (state, action) => {
            state.showChat = action.payload
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },
    },
});

export const { setShowChat, setSelectedUser } = chatSlice.actions;

export default chatSlice.reducer;