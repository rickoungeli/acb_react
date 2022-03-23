import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../features/userReducer';

export default configureStore({
    reducer:{
        user: userSlice,
    },
})