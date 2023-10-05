import CarForm from './Components/CarForm'
import CarSearch from './Components/CarSearch'
import CarsList from './Components/CarsList'
import CarValue from './Components/CarValue'

export default function App() {
  return (
    <div className='p-10 max-w-2xl border rounded bg-slate-50'>
      <CarForm />
      <CarSearch />
      <CarsList />
      <CarValue />
    </div>
  )
}
