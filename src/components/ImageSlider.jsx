import { useState } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

const fallbackCarImage = "/car-placeholder.svg"

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
    <div className='glass-card relative overflow-hidden rounded-3xl p-4 animate-fade-up'>
      <button 
        className='absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-slate-900/70 p-1.5 text-white transition hover:border-indigo-400' 
        onClick={prevSlide}
      >
        <IoIosArrowRoundBack size={28} />
      </button>

      <button 
        className='absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-slate-900/70 p-1.5 text-white transition hover:border-indigo-400' 
        onClick={nextSlide}
      >
        <IoIosArrowRoundForward size={28} />
      </button>

      <div className='overflow-hidden rounded-2xl'>
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = fallbackCarImage
          }}
          className='h-[360px] w-full object-cover transition duration-500'
        />
      </div>

      <div className='mt-4 flex justify-center gap-3'>
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`Thumbnail ${index + 1}`} 
            onClick={() => setCurrentIndex(index)} 
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = fallbackCarImage
            }}
            className={`h-20 w-24 cursor-pointer rounded-xl object-cover transition ${
              currentIndex === index
                ? 'border-2 border-indigo-500 opacity-100'
                : 'border border-white/10 opacity-55 hover:opacity-90'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
