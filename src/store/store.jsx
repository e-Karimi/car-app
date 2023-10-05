import { configureStore } from '@reduxjs/toolkit'
import { carsReducer, changeSearchTerm, addCar, removeCar } from './slice/carsSlice'
import { formReducer, changeName, changeCost } from './slice/formSlice'


const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
})


export default store
export { changeSearchTerm, addCar, removeCar, changeName, changeCost }