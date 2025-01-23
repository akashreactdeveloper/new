// src/redux/slice/screenLoading.js
import { createSlice } from '@reduxjs/toolkit';

const screenLoadingSlice = createSlice({
    name: 'screenLoading',
    initialState: {
        isLoading: false,
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        clearLoading: (state) => {
            state.isLoading = false;
        },
    },
});

export const selectIsLoading = state => state.screenLoading.isLoading;
export const { setLoading, clearLoading } = screenLoadingSlice.actions;
export default screenLoadingSlice.reducer;
