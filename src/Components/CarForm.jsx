import { useDispatch, useSelector } from "react-redux"
import { changeName, changeCost, addCar } from './../store/store'

export default function CarForm() {
  const dispatch = useDispatch()
  const { name, cost } = useSelector(state => state.form)


  const addCarHandler = (e) => {
    e.preventDefault()

    if (name && cost) {
      dispatch(addCar({ name, cost }))

    } else {
      alert('Please Enter The Field')
    }

  }

  return (
    <>
      <form action="#" className="flex items-end gap-x-5 w-[450px]">
        <div>
          <label htmlFor="name" className="block">Name</label>
          <input value={name} onChange={e => dispatch(changeName(e.target.value))} 
          type="text" id="name"  placeholder="write the name.." autoComplete="off" 
            className="border rounded mt-2 outline-none px-2 py-1 w-[160px]  placeholder:text-xs" />
        </div>
        <div>
          <label htmlFor="cost" className="block">Cost</label>
          <input value={cost || ''} onChange={e => dispatch(changeCost(e.target.value))} 
          type="number" id="cost" placeholder="write the cost.." autoComplete="off"
            className="border rounded mt-2 outline-none px-2 py-1 w-[160px]  placeholder:text-xs"  />
        </div>
        <button onClick={addCarHandler} type="submit"
          className="bg-blue-100 border px-4 py-1 rounded cursor-pointer text-sm"  >Add Car</button>
      </form>
    </>
  )
}
