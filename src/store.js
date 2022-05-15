import { configureStore } from '@reduxjs/toolkit'
import answersPointsReducer from './redux/answersPointsSlice';

export const store = configureStore({
    reducer: {
        answersPoints: answersPointsReducer,
    },
  })