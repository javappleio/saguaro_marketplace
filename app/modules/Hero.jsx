import React from 'react'

const Hero = () => {
  return (
    <div className='w-full relative flex justify-center flex-col items-center px-[4vw] h-[calc(100svh-120px)]' id='sag_hero'>
      <div className='sag_hero_img flex flex-col justify-center items-center text-white'>
        <h2 className='lg:text-[60px] md:text-[40px] text-xl  leading-none'>NUEVA COLECCIÓN</h2>
        <h3 className='lg:text-[180px] md:text-[100px] text-6xl leading-none font-nevada'>VERANO ‘23</h3>
        <div className='flex flex-col md:flex-row justify-center items-center gap-2 pt-3'>
          <a href="#" className='text-base py-2 px-4 border-solid border-2 border-white rounded-md'>Nueva Coleccion</a>
          <a href="#" className='text-dark bg-white text-base py-2 px-4 border-solid border-2 border-white rounded-md'>Más Colecciones</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
