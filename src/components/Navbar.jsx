import { Link, NavLink } from 'react-router-dom'
import { FaRegBell } from "react-icons/fa"

const Navbar = () => {
  const navClassName = ({ isActive }) =>
    `transition hover:text-white ${isActive ? "text-white" : "text-slate-300"}`

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl'>
      <div className='mx-auto flex w-11/12 max-w-6xl items-center justify-between py-4'>
        <Link to="/" className='text-2xl font-bold tracking-tight text-white'>
          Auto<span className='text-indigo-400'>Nova</span>
        </Link>

        <nav className='hidden gap-7 text-sm font-medium text-slate-300 md:flex'>
          <NavLink to="/" className={navClassName}>Home</NavLink>
          <NavLink to="/cars" className={navClassName}>Cars</NavLink>
          <NavLink to="/about" className={navClassName}>About</NavLink>
          <NavLink to="/contact" className={navClassName}>Contact</NavLink>
        </nav>

        <div className='flex items-center gap-3'>
          <button className='glass-card rounded-full p-2.5 text-slate-200 transition hover:scale-105 hover:text-white'>
            <FaRegBell size={17} />
          </button>
          <button className='rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400'>
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar