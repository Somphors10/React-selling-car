import React, { useState } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'


const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className='relative'>
      {/* Previous Slide Button */}
      <button 
        className='absolute top-1/2 left-2 transform -translate-y-1/2 px-2 py-1' 
        onClick={prevSlide}
      >
        <IoIosArrowRoundBack size={28} />
      </button>

      {/* Next Slide Button */}
      <button 
        className='absolute top-1/2 right-2 transform -translate-y-1/2 px-2 py-1' 
        onClick={nextSlide}
      >
        <IoIosArrowRoundForward size={28} />
      </button>

      {/* Current Image */}
      <div className='overflow-hidden'>
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className='w-full'
        />
      </div>

      {/* Thumbnails */}
      <div className='flex justify-center mt-5'>
        {images.map((image, index) => (
          <img 
            key={index} // Added key prop
            src={image} 
            alt={`Thumbnail ${index + 1}`} 
            onClick={() => setCurrentIndex(index)} 
            className={`w-24 mx-1 cursor-pointer border-4 rounded-xl ${currentIndex === index ? 'border-indigo-500' : 'border-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
