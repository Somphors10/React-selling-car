const Footer = () => {
  return (
    <footer className='mt-10 border-t border-white/10' id="contact">
      <div className='mx-auto flex w-11/12 max-w-6xl flex-col gap-4 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between'>
        <p>© {new Date().getFullYear()} AutoNova. Drive your future.</p>
        <div className='flex gap-5'>
          <a href="#" className='transition hover:text-white'>Privacy</a>
          <a href="#" className='transition hover:text-white'>Terms</a>
          <a href="#" className='transition hover:text-white'>Support</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer