import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedRegion: 'RU',
    language: 'ru'
};

export const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {
        setRegion: (state, action) => {
            state.selectedRegion = action.payload.region;
            state.language = action.payload.language;
        },
    },
});

export const { setRegion } = regionSlice.actions;

export const selectRegion = state => state.region.selectedRegion;
export const selectLanguage = state => state.region.language;

export default regionSlice.reducer;