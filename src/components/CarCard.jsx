import React, { useState } from 'react'
import { GiSteeringWheel, GiCarSeat } from 'react-icons/gi';
import { FaGasPump } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const fallbackCarImage = "/car-placeholder.svg"

const CarCard = ({ car }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link to={`/details/${car.id}`} className='group animate-fade-up'>
            <article
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className='glass-card relative overflow-hidden rounded-3xl p-4 transition duration-300 hover:-translate-y-1.5 hover:border-indigo-400/40'
            >
                <div className='absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl' />
                <img
                    src={car.image}
                    alt={car.model}
                    onError={(event) => {
                        event.currentTarget.onerror = null
                        event.currentTarget.src = fallbackCarImage
                    }}
                    className='h-44 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105'
                />

                <div className='mt-4 flex items-start justify-between gap-2'>
                    <div>
                        <p className='text-xs uppercase tracking-wider text-indigo-300'>{car.category}</p>
                        <h3 className='mt-1 text-lg font-semibold text-white'>{car.model}</h3>
                    </div>
                    <span className='rounded-full border border-white/20 px-2.5 py-1 text-xs text-slate-200'>{car.year}</span>
                </div>

                <p className='mt-3 text-2xl font-bold text-white'>
                    ${car.price.toLocaleString()}
                    <span className='ml-1 text-sm font-medium text-slate-400'>/ price</span>
                </p>

                <div className='mt-4 grid grid-cols-3 gap-2 text-center text-xs text-slate-300'>
                    <div className='rounded-xl border border-white/10 bg-slate-900/60 px-2 py-2'>
                        <GiSteeringWheel className='mx-auto mb-1 text-indigo-300' size={18} />
                        {car.transmission}
                    </div>
                    <div className='rounded-xl border border-white/10 bg-slate-900/60 px-2 py-2'>
                        <GiCarSeat className='mx-auto mb-1 text-indigo-300' size={18} />
                        {car.seats} Seats
                    </div>
                    <div className='rounded-xl border border-white/10 bg-slate-900/60 px-2 py-2'>
                        <FaGasPump className='mx-auto mb-1 text-indigo-300' size={16} />
                        {car.mpg} MPG
                    </div>
                </div>

                <button
                    className={`mt-4 w-full rounded-xl py-2.5 text-sm font-semibold transition ${
                        isHovered
                            ? "bg-indigo-500 text-white"
                            : "border border-white/20 text-slate-200 hover:border-indigo-400 hover:text-white"
                    }`}
                >
                    View Details
                </button>
            </article>
        </Link>
    );
};

export default CarCard;
