/* eslint-disable no-unused-vars */
import { createSlice, nanoid } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'cars',
    initialState: {
        carsList: [],
        searchTerm: ''
    },
    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        addCar: (state, action) => {
            state.carsList.push({ id: nanoid(), ...action.payload })
        },
        removeCar: (state, action) => {
            state.carsList = state.carsList.filter(car => car.id !== action.payload)
        },
    }
})


export const carsReducer = slice.reducer
export const { changeSearchTerm, addCar, removeCar } = slice.actions