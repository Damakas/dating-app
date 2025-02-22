// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import regionReducer from './components/regionSelect/regionSlice';
import passRecoverReducer from './components/passRecoveryModal/passRecoverySlice';
import notificationReducer from './components/ui/notificationBell/notificationsSlice';
import authReducer from './components/loginForm/authSlice';
import usersProfiles from './usersProfiles/usersProfiles';
import chatReducer from './components/chat/chatSlice';

export const store = configureStore({
    reducer: {
        region: regionReducer,
        modal: passRecoverReducer,
        notifications: notificationReducer,
        auth: authReducer,
        usersProfiles: usersProfiles,
        chat: chatReducer
    },
});
