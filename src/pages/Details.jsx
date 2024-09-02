import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import { useParams } from 'react-router-dom'

const Details = ({cars}) => {
  const {carId} = useParams()
  const selectedCar = cars.find((car) => car.id === Number(carId))

  const images = [selectedCar.image, selectedCar.image, selectedCar.image];
  return (
    <div>
      <Navbar/>
      <div className='w-4/5 m-auto py-20 flex justify-between space-x-10'>
        <div>
          <p>Home {">"} Cars {">"} <span>Details</span></p>
            <h1>{selectedCar.model}</h1>
            <h1>{selectedCar.price}</h1>
            <ImageSlider images={images} />
        </div>
      </div>
    </div>
  )
}

export default Details