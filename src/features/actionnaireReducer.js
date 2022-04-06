import {createSlice} from '@reduxjs/toolkit';


export const actionnaireSlice = createSlice({
    name: 'actionnaire',
    initialState:{
        
    },
    reducers:{
        toggleModale: (state) => {
            state.reveleModale = !state.reveleModale;
        },
    },
})

export const {toggleModale} = actionnaireSlice.actions;

export const selectActionnaire = (state) => state.actionnaire.reveleModale;

export default actionnaireSlice.reducer;