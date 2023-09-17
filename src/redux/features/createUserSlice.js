import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userModal: false,
    userData: [],
};

export const createUserSlice = createSlice({
    name: 'createUser',
    initialState,
    reducers: {
        setUserModal: (state) => {
            state.userModal = !state.userModal
        },
        setUserData: (state, action) => {
            let newData = state.userData
            newData.push(action.payload)
        }
    }
})

export const { setUserModal, setUserData } = createUserSlice.actions;

export default createUserSlice.reducer;
