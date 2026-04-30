import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import { Link, useParams } from 'react-router-dom'

const Details = ({cars}) => {
  const {carId} = useParams()
  const selectedCar = cars.find((car) => car.id === Number(carId))

  if (!selectedCar) {
    return (
      <div className='min-h-screen bg-slate-950 text-white'>
        <Navbar />
        <div className='mx-auto mt-20 w-11/12 max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center'>
          <h1 className='text-2xl font-bold'>Car not found</h1>
          <p className='mt-3 text-slate-300'>This listing does not exist anymore.</p>
          <Link to="/" className='mt-6 inline-block rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold'>
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  const images = [selectedCar.image, selectedCar.image, selectedCar.image];

  return (
    <div className='min-h-screen'>
      <Navbar/>
      <div className='mx-auto w-11/12 max-w-6xl py-12'>
        <p className='text-sm text-slate-400'>
          <Link to="/" className='hover:text-white'>Home</Link> / Cars / <span className='text-indigo-300'>Details</span>
        </p>
        <div className='mt-5 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]'>
          <ImageSlider images={images} />
          <aside className='glass-card h-fit rounded-3xl p-6 animate-fade-up'>
            <p className='text-sm uppercase tracking-widest text-indigo-300'>{selectedCar.category}</p>
            <h1 className='mt-2 text-3xl font-bold text-white'>{selectedCar.model}</h1>
            <p className='mt-4 text-4xl font-bold text-white'>${selectedCar.price.toLocaleString()}</p>
            <div className='mt-6 grid grid-cols-2 gap-3 text-sm'>
              <div className='rounded-xl border border-white/10 bg-slate-900/70 p-3'>
                <p className='text-slate-400'>Year</p>
                <p className='mt-1 font-semibold text-white'>{selectedCar.year}</p>
              </div>
              <div className='rounded-xl border border-white/10 bg-slate-900/70 p-3'>
                <p className='text-slate-400'>Transmission</p>
                <p className='mt-1 font-semibold text-white'>{selectedCar.transmission}</p>
              </div>
              <div className='rounded-xl border border-white/10 bg-slate-900/70 p-3'>
                <p className='text-slate-400'>Seats</p>
                <p className='mt-1 font-semibold text-white'>{selectedCar.seats}</p>
              </div>
              <div className='rounded-xl border border-white/10 bg-slate-900/70 p-3'>
                <p className='text-slate-400'>Efficiency</p>
                <p className='mt-1 font-semibold text-white'>{selectedCar.mpg} MPG</p>
              </div>
            </div>
            <button className='mt-6 w-full rounded-xl bg-indigo-500 py-3 font-semibold text-white transition hover:bg-indigo-400'>
              Reserve Now
            </button>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Details