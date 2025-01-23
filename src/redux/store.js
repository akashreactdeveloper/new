import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import your combined reducers

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
});

export default store;
