import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './features/counter/counterSlice';
import { dogApi } from './services/dogData';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        [dogApi.reducerPath]: dogApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dogApi.middleware),
});

