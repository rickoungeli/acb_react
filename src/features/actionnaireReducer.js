import {createSlice} from '@reduxjs/toolkit';

export const actionnaireSlice = createSlice({
    name: 'actionnaire',
    initialState:{
        reveleModale:false,
        actionnaire:{
            names:'',
            firstname:'',
            adress:'',
            complement:'',
            zipcode:'',
            ville:'',
            country:'RD Congo',
            phone:'+243',
            dnaiss:'',
            sexe:'',
            nationalite:'',
        },
        edit:false
    },
    reducers:{
        toggleModale: (state, action) => {
            state.reveleModale = !state.reveleModale,
            state.actionnaire = action.payload
        },
        toggleEdit: (state, action) => {
            //state.reveleModale = !state.reveleModale,
            state.edit = action.payload
        }
    },
})

export const {toggleModale, toggleEdit} = actionnaireSlice.actions;

export const selectActionnaire = (state) => [state.actionnaire.reveleModale, state.actionnaire.actionnaire];
export const selectEdit = (state) => state.actionnaire.edit;

export default actionnaireSlice.reducer;