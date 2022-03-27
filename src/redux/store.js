import { configureStore } from "@reduxjs/toolkit";
import eleveSlice from "../features/eleveReducer";
import userSlice from '../features/userReducer';
import activitesSlice from "../features/activitesReducer";


export default configureStore({
    reducer:{
        user: userSlice,
        eleve: eleveSlice,
        activites: activitesSlice,
        
    },
})