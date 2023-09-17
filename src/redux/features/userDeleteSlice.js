import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    delUserId: "",
    delUserModalState: false,
};

export const userDeleteSlice = createSlice({
    name: 'delete',
    initialState,
    reducers: {
        delUserId: (state, action) => {
            state.delUserId = action.payload;
        },
        delUsermodal: (state) => {
            state.delUserModalState = !state.delUserModalState
    }
    },
});

export const { delUserId, delUsermodal } = userDeleteSlice.actions;

export default userDeleteSlice.reducer;
