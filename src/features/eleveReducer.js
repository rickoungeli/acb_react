import {createSlice} from '@reduxjs/toolkit';

export const eleveSlice = createSlice({
    name: 'eleve',
    initialState:{
        reveleModale:false
    },
    reducers:{
        toggleModale: (state) => {
            state.reveleModale = !state.reveleModale;
        },
    },
})

export const {toggleModale} = eleveSlice.actions;

export const selectEleve = (state) => state.eleve.reveleModale;

export default eleveSlice.reducer;