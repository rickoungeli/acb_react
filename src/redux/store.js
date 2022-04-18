import { configureStore } from "@reduxjs/toolkit";
import eleveSlice from "../features/eleveReducer";
import userSlice from '../features/userReducer';
import activitesSlice from "../features/activitesReducer";
import actionnaireSlice from "../features/actionnaireReducer";


export default configureStore({
    reducer:{
        user: userSlice,
        eleve: eleveSlice,
        activites: activitesSlice,
        actionnaire: actionnaireSlice,
        
    },
})