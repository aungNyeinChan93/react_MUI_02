import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => { state.count++ },
        decrement: (state) => { state.count-- },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
});

export const { decrement, increment, incrementByAmount } = counterSlice.actions


