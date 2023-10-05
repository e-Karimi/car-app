import { useSelector } from "react-redux"
import CarItem from './CarItem'

export default function CarList() {
  const { carsList, nameTyped } = useSelector(({ form, cars: { carsList, searchTerm } }) => {
    const filteredCars = carsList.filter(car => car.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
    return {
      carsList: filteredCars,
      nameTyped: form.name,
    }
  })

  
  return (
    <div className="mt-6 min-h-[200px]">
      {Array.isArray(carsList) &&

        carsList.map(car =>
          <CarItem key={car.id} {...car}
            fontBold={nameTyped && car.name.toLowerCase().startsWith(nameTyped.toLowerCase()) ? true : false} />
        )
      }
    </div>
  )
}
