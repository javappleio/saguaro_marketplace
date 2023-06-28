import React from 'react'

const Marcas = () => {
  return (
    <div className='w-full relative flex justify-center flex-col items-center px-[4vw] py-14' id='sag_marcas'>
        <h3 className='font-nevada text-6xl pb-1 text-center'>MARCAS</h3>
        <p className='text-center text-lg pb-7'>Lorem ipsum dolor sit amet consectetur. Semper faucibus.</p>
        <div className='sag_marcas_img flex justify-center items-center flex-col h-full px-[4vw] gap-6'>
          <div className="flex flex-row justify-center items-center gap-2 lg:gap-[4vw] w-full">
            <p className='text-F2F2EC font-nevada text-2xl lg:text-6xl opacity-50 hover:opacity-100 cursor-pointer'>ALICIA</p>
            <p className='text-F2F2EC font-nevada text-2xl lg:text-6xl opacity-50 hover:opacity-100 cursor-pointer'>MINA 2012</p>
            <p className='text-F2F2EC font-nevada text-2xl lg:text-6xl opacity-50 hover:opacity-100 cursor-pointer'>MONOGRAM</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 lg:gap-[4vw] w-full">
            <p className='text-F2F2EC font-nevada text-2xl lg:text-6xl opacity-50 hover:opacity-100 cursor-pointer'>OASIS</p>
            <p className='text-F2F2EC font-nevada text-2xl lg:text-6xl opacity-50 hover:opacity-100 cursor-pointer'>MEDEA</p>
            <p className='text-F2F2EC font-nevada text-2xl lg:text-6xl opacity-50 hover:opacity-100 cursor-pointer'>IRIDE</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 lg:gap-[4vw] w-full">
            <p className='text-F2F2EC font-nevada text-2xl lg:text-6xl opacity-50 hover:opacity-100 cursor-pointer'>PERLA</p>
            <p className='text-F2F2EC font-nevada text-2xl lg:text-6xl opacity-50 hover:opacity-100 cursor-pointer'>GLAM</p>
            <p className='text-F2F2EC font-nevada text-2xl lg:text-6xl opacity-50 hover:opacity-100 cursor-pointer'>SUNSHINE</p>
            <p className='text-F2F2EC font-nevada text-2xl lg:text-6xl opacity-50 hover:opacity-100 cursor-pointer'>LIBRE</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 lg:gap-[4vw] w-full">
            <p className='text-F2F2EC font-nevada text-2xl lg:text-6xl opacity-50 hover:opacity-100 cursor-pointer'>ALMA</p>
            <p className='text-F2F2EC font-nevada text-2xl lg:text-6xl opacity-50 hover:opacity-100 cursor-pointer'>ALYSSA</p>
          </div>
          <a href="#" className='text-sm py-3 px-4 border-solid border-2 border-white rounded-md text-white leading-none'>VER TODAS LAS MARCAS</a>
        </div>
    </div>
  )
}

export default Marcas
