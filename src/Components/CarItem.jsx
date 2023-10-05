/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { removeCar } from './../store/store'

export default function CarItem({ id, name, cost, fontBold }) {
    const dispatch = useDispatch()

    return (
        <div className="flex items-center justify-between p-2 bg-white border rounded mb-3">
            <div className={`${fontBold && 'font-semibold text-gra-900'}`}>
                <span className="me-3">{name} - </span>
                <span>$ {cost}</span>
            </div>
            <button onClick={() => dispatch(removeCar(id))}
                className="bg-red-200 py-1 px-3 text-xs rounded">
                Delete
            </button>

        </div>
    )
}
