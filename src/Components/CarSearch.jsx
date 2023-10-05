import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from './../store/store'

export default function CarSearch() {
  const dispatch = useDispatch()
  const { searchTerm } = useSelector(state => state.cars)

  return (
    <div className="flex items-center justify-between mt-7 border-b pb-3">
      <div className="font-semibold">May Cars</div>
      <div>
        <label htmlFor="searchTerm" className="me-3">Search</label>
        <input value={searchTerm} onChange={e => dispatch(changeSearchTerm(e.target.value))}
          type="text" id="searchTerm" autoComplete="off" placeholder="seach a car ..."
          className="border rounded mt-2 outline-none px-2 py-1 placeholder:text-sm" />
      </div>
    </div>
  )
}
