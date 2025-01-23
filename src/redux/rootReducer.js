import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import screenLoadingReducer from './slice/screenLoadingSlice';

const rootReducer = combineReducers({
    user: userReducer,
    screenLoading: screenLoadingReducer,
});

export default rootReducer;
