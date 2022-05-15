import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const answersPointsSlice = createSlice({
    name: 'points',
    initialState,
    reducers: {
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        restartPoints: (state) => {
            state.value = 0
        },
    },
})

export const { incrementByAmount, restartPoints } = answersPointsSlice.actions

export default answersPointsSlice.reducer