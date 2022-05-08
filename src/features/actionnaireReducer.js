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
        edit:false,
        loadActionnaires:true
    },
    reducers:{
        toggleModale: (state, action) => {
            state.reveleModale = !state.reveleModale,
            state.actionnaire = action.payload
        },
        toggleEdit: (state, action) => {
            state.edit = action.payload
        },
        loadActionnaires: (state) => {
            state.loadActionnaires = !state.loadActionnaires
        }
    },
})

export const {toggleModale, toggleEdit, loadActionnaires} = actionnaireSlice.actions;

export const selectActionnaire = (state) => [state.actionnaire.reveleModale, state.actionnaire.actionnaire];
export const selectLoadActionnaires = (state) => state.actionnaire.loadActionnaires;
export const selectEdit = (state) => state.actionnaire.edit;

export default actionnaireSlice.reducer;