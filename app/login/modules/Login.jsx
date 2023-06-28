import React from 'react'
import Image from 'next/image'
import background from '../../assets/hero.png'

const Login = () => {
  return (
    <section className='w-full flex flex-col lg:flex-row justify-between h-[88vh]'>
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 lg:h-auto h-[80svh] px-4">
            <h2 className='font-nevada text-4xl text-center'>Welcome back</h2>
            <p className='pt-2 pb-6 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <input type="email" className='w-full lg:w-2/4 bg-transparent py-3 px-3 border-solid border-[1px] border-[#B7B7B7] rounded-md text-sm outline-none mb-3' placeholder='Email' />
            <input type="password" className='w-full lg:w-2/4 bg-transparent py-3 px-3 border-solid border-[1px] border-[#B7B7B7] rounded-md text-sm outline-none mb-3' placeholder='Contrasena' />
            <input type="submit" value="Ingresar" className='w-full lg:w-2/4 bg-[#5D7060] py-3 rounded-md text-white' />
        </div>
        <div className="w-1/2 h-full hidden lg:block">
            <Image
             src={background}
             className='w-full h-full object-cover'
            />
        </div>
    </section>
  )
}

export default Login
