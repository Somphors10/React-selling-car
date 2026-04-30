import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto w-11/12 max-w-6xl py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">About Us</p>
        <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Built for better car buying</h1>
        <p className="mt-6 max-w-3xl text-slate-300">
          AutoNova helps people discover premium vehicles with transparent pricing and useful specs.
          Our goal is to make car discovery simple, fast, and enjoyable with a modern browsing
          experience.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="glass-card rounded-2xl p-5">
            <h2 className="text-lg font-semibold text-white">Trusted Listings</h2>
            <p className="mt-2 text-sm text-slate-300">Every listing is curated for quality and clarity.</p>
          </article>
          <article className="glass-card rounded-2xl p-5">
            <h2 className="text-lg font-semibold text-white">Smart Comparison</h2>
            <p className="mt-2 text-sm text-slate-300">Compare specs and price in one place.</p>
          </article>
          <article className="glass-card rounded-2xl p-5">
            <h2 className="text-lg font-semibold text-white">Fast Checkout</h2>
            <p className="mt-2 text-sm text-slate-300">Reserve your car quickly with a smooth flow.</p>
          </article>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About
