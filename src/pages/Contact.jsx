import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto w-11/12 max-w-6xl py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">Contact</p>
        <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Let us help you find the right car</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Send us your requirements and our team will suggest the best options for your budget.
        </p>

        <form className="glass-card mt-10 grid gap-4 rounded-3xl p-6 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-400"
          />
          <input
            type="text"
            placeholder="Preferred Car Type"
            className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-400 md:col-span-2"
          />
          <textarea
            rows="5"
            placeholder="Tell us what you're looking for..."
            className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-400 md:col-span-2"
          />
          <button
            type="button"
            className="rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 md:col-span-2 md:w-fit"
          >
            Send Message
          </button>
        </form>
      </section>
      <Footer />
    </div>
  )
}

export default Contact
