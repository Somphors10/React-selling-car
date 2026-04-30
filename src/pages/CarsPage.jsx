import Navbar from "../components/Navbar"
import Cars from "../components/Cars"
import Footer from "../components/Footer"

const CarsPage = ({ cars }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto w-11/12 max-w-6xl py-14">
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">Explore</p>
        <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">All Available Cars</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Compare pricing, category, and specifications, then open any listing for full details.
        </p>
      </section>
      <Cars cars={cars} />
      <Footer />
    </div>
  )
}

export default CarsPage
