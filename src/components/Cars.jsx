import CarCard from './CarCard'

const Cars = ({cars}) => {
  return (
    <section className='mx-auto w-11/12 max-w-6xl py-16' id="cars">
      <div className='mb-10 flex flex-wrap items-end justify-between gap-4'>
        <div>
          <p className='text-sm uppercase tracking-[0.2em] text-indigo-300'>Premium Collection</p>
          <h2 className='mt-2 text-3xl font-bold text-white md:text-4xl'>Find your next dream car</h2>
        </div>
        <button className='rounded-full border border-white/20 px-5 py-2 text-sm text-slate-200 transition hover:border-indigo-400 hover:text-white'>
          Explore All Cars
        </button>
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  )
}

export default Cars