import {configureStore} from '@reduxjs/toolkit'
import firstSlice from './features/firstSlice';
import questionsSlice from './features/questionsSlice';

export const store = configureStore({
    reducer: {
        first: firstSlice,
        question: questionsSlice,
    }
})