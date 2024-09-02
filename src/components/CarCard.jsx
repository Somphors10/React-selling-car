import React, { useState } from 'react'
import { GiSteeringWheel, GiCarSeat } from 'react-icons/gi';
import { FaGasPump } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
    const [isMovered, setIsMovered] = useState(false);
    return (
        <Link to={`/details/${car.id}`}>
            <div className='border p-1 rounded-2xl'>
                <div 
                    onMouseEnter={() => setIsMovered(true)} 
                    onMouseLeave={() => setIsMovered(false)}  // Corrected here
                    className='w-[300px] z-0 p-5 bg-gray-100 space-x-4 rounded-2xl'
                >
                    <h1 className='text-2xl font-bold'>{car.model}</h1>
                    <h1>
                        <span>$</span>
                        <span className='font-bold text-3xl'>{car.price}</span>
                    </h1>
                    <img src={car.image} alt={car.model} />
                    {isMovered ? (
                        <button className='w-full p-3 bg-indigo-600/80 text-white rounded-lg'>Buy Now</button>
                    ) : (
                        <div className='flex justify-between'>
                            <div className='flex flex-col items-center space-y-2 text-sm text-gray-500'>
                                <GiSteeringWheel size={26} />
                                <p>Manual</p>
                            </div>
                            <div className='flex flex-col items-center space-y-2 text-sm text-gray-500'>
                                <GiCarSeat size={26} />
                                <p>4 Seats</p>
                            </div>
                            <div className='flex flex-col items-center space-y-2 text-sm text-gray-500'>
                                <FaGasPump size={26} />
                                <p>32 MPG</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default CarCard;
