import {useEffect, useState} from 'react'
import {vehicles} from "./mocks/vehicles"
import ListVehicles from './components/ListVehicles'

function App() {
  const [listVehicles, setListVehicles] = useState([])

  const handleCallToVehicles = async (newVehicle = {}) => {
      const data = await vehicles()
      const format = Object.values(newVehicle).length >= 1 ? [newVehicle, ...listVehicles] : data
      const agroupMarcas = format.reduce((ac, vehicle) => {
        if(!ac[vehicle.marca_nome]){
          ac[vehicle.marca_nome] = []
        }
        ac[vehicle.marca_nome].push(vehicle)
        return ac
      },{})
      let vehicless = []
      Object.values(agroupMarcas).map(val => val.map(op => vehicless.push(op)))
      setListVehicles(vehicless)
  }
  
  useEffect(() => {
    handleCallToVehicles()
  },[])
  
  if(listVehicles.length === 0) return <div>Loading....</div>

  return (
    <div>
      <ListVehicles vehicles={listVehicles} handleCallToVehicles={handleCallToVehicles}/>
    </div>
  )
}

export default App
