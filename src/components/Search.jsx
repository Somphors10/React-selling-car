import { FaLocationDot } from 'react-icons/fa6'
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return (
    <section className='mx-auto -mt-10 w-11/12 max-w-6xl animate-fade-up' id="home">
      <div className='glass-card rounded-3xl p-5 md:p-7'>
        <div className='grid gap-4 md:grid-cols-4'>
          <label className='rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300'>
            <span className='mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400'>
              <FaLocationDot />
              Location
            </span>
            <select className='w-full bg-transparent text-white outline-none'>
              <option value="">Any Country</option>
              <option value="USA">United States</option>
              <option value="CA">Canada</option>
              <option value="KH">Cambodia</option>
            </select>
          </label>
          <label className='rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300'>
            <span className='mb-2 block text-xs uppercase tracking-wide text-slate-400'>Brand</span>
            <select className='w-full bg-transparent text-white outline-none'>
              <option value="">Any Brand</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
            </select>
          </label>
          <label className='rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300'>
            <span className='mb-2 block text-xs uppercase tracking-wide text-slate-400'>Type</span>
            <select className='w-full bg-transparent text-white outline-none'>
              <option value="">Any Category</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Sport">Sport</option>
              <option value="EV">EV</option>
            </select>
          </label>
          <button className='flex items-center justify-center gap-2 rounded-2xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400'>
            <CiSearch size={20} />
            Search Cars
          </button>
        </div>
      </div>
    </section>
  )
}

export default Search