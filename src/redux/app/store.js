import { configureStore } from '@reduxjs/toolkit'
import searchReducer from 'redux/features/searchSlice';
import createUserReducer from 'redux/features/createUserSlice'
import userDeleteReducer from 'redux/features/userDeleteSlice'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        createUser: createUserReducer,
        delete: userDeleteReducer,
    },
})