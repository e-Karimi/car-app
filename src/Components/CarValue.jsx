import { useSelector } from "react-redux"

export default function CarValue() {
  const totalCost = useSelector(({ cars: { carsList, searchTerm } }) => {
    return carsList.filter(car => car.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
      .reduce((prev, current) => prev + Number(current.cost), 0)
  })

  return (
    <div className="flex justify-end items-center mt-7 font-semibold text-gray-900 px-5">
      <div>Total Value : </div>
      <div>
        <span className="text-blue-500 ms-1">$</span>
        <span> {totalCost}</span>
      </div>
    </div>
  )
}
