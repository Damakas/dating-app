import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notifications: [
        { id: 1, message: 'Уведомление 1' },
        { id: 2, message: 'Уведомление 2' },
        { id: 3, message: 'Уведомление 3' }
    ]
};

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: initialState,
    reducers: {
        removeNotification: (state, action) => {
            state.notifications = state.notifications.filter(
                notifications => notifications.id !== action.payload
            );
        },
        addNotification: (state, action) => {
            state.notifications.push(action.payload)
        }
    }
});

export const { removeNotification, addNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;