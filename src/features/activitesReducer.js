import {createSlice} from '@reduxjs/toolkit';

export const activitesSlice = createSlice({
    name: 'activites',
    initialState:{
        likedActivites:[]
    },
    reducers:{
        pushLikedActivites: (state, action) => {
            state.likedActivites = action.payload;
        },
    },
})

export const {pushLikedActivites} = activitesSlice.actions;

export const selectLikedActivites = (state) => state.activites.likedActivites;

export default activitesSlice.reducer;