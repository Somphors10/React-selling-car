import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Cars from '../components/Cars'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = ({cars}) => {
  return (
    <div className='min-h-screen'>
        <Navbar/>
        <section className='mx-auto flex w-11/12 max-w-6xl flex-col gap-10 py-16 md:flex-row md:items-center md:justify-between'>
          <div className='max-w-xl animate-fade-up'>
            <p className='mb-4 inline-block rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-1 text-xs uppercase tracking-[0.22em] text-indigo-200'>
              Luxury Selection 2026
            </p>
            <h1 className='text-4xl font-bold leading-tight text-white md:text-6xl'>
              Discover and reserve your
              <span className='bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent'> perfect car</span>
            </h1>
            <p className='mt-5 text-base text-slate-300 md:text-lg'>
              Browse premium vehicles, compare specs in seconds, and drive away with confidence.
            </p>
            <div className='mt-8 flex gap-3'>
              <Link to="/cars" className='rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400'>
                Browse Cars
              </Link>
              <button className='rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-400 hover:text-white'>
                Watch Demo
              </button>
            </div>
          </div>
          <div className='animate-float'>
            <div className='glass-card overflow-hidden rounded-[2rem] p-3'>
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
                alt="Featured car"
                className='h-[340px] w-full rounded-[1.5rem] object-cover md:w-[460px]'
              />
            </div>
          </div>
        </section>
        <Search/>
        <Cars cars={cars} />
        <Footer/>
    </div>
  )
}

export default Home