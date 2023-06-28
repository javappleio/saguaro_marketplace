'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import product_ph from '../../assets/singleprod_car2.png'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Cart = () => {
    const [cant, setCant] = useState(1)
  return (
    <section className='container px-4 pt-6 lg:pt-11 mx-auto'>
        <div className="flex flex-row justify-between items-center w-full pb-4">
            <span className='text-dark text-base font-bold'>Shopping Cart</span>
            <span className='text-red-500 text-base underline'>Eliminar todo</span>
        </div>
        <div className="flex flex-col justify-start items-start py-3 gap-2 border-solid border-t-[1px] border-gray-500">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full py-4 border-solid border-b-[1px] border-gray-500">
                <Image
                    src={product_ph}
                    className='rounded-md w-6/12 lg:w-1/12 border-2 aspect-square'
                />
                <div className="flex flex-col">
                    <h3>Lorem ipsum</h3>
                    <div className="w-4 h-4 rounded-full bg-[#EEC891]"></div>
                </div>
                <div className="flex flex-row justify-start items-center pt-2 gap-2 pb-3">
                    <div className="flex flex-row justify-start items-center h-12 border-solid border-[#B7B7B7] border-[1px] gap-6 px-3 w-full">
                        <AiOutlineMinus className='h-full cursor-pointer flex-1' fill='#B7B7B7' onClick={() => {
                            cant !== 0 ? setCant(cant - 1) : setCant(0)
                        }} />
                        <span>{cant}</span>
                        <AiOutlinePlus className='h-full cursor-pointer flex-1' fill='#B7B7B7' onClick={() => setCant(cant + 1)} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className='text-dark text-2xl'>$897.00</span>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full py-4 border-solid border-b-[1px] border-gray-500">
                <Image
                    src={product_ph}
                    className='rounded-md w-6/12 lg:w-1/12 border-2 aspect-square'
                />
                <div className="flex flex-col">
                    <h3>Lorem ipsum</h3>
                    <div className="w-4 h-4 rounded-full bg-[#EEC891]"></div>
                </div>
                <div className="flex flex-row justify-start items-center pt-2 gap-2 pb-3">
                    <div className="flex flex-row justify-start items-center h-12 border-solid border-[#B7B7B7] border-[1px] gap-6 px-3 w-full">
                        <AiOutlineMinus className='h-full cursor-pointer flex-1' fill='#B7B7B7' onClick={() => {
                            cant !== 0 ? setCant(cant - 1) : setCant(0)
                        }} />
                        <span>{cant}</span>
                        <AiOutlinePlus className='h-full cursor-pointer flex-1' fill='#B7B7B7' onClick={() => setCant(cant + 1)} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className='text-dark text-2xl'>$897.00</span>
                </div>
            </div>
        </div>
        <div className="flex flex-row justify-center lg:justify-end gap-4">
            <h3 className='text-lg font-bold'>Subtotal</h3>
            <h3 className='text-lg font-bold'>$1,794.00</h3>
        </div>
        <div className="flex flex-row justify-center lg:justify-end pt-6">
        <button className='bg-[#5D7060] px-8 h-12 text-white rounded-full'>Ir a Checkout</button>
        </div>
    </section>
  )
}

export default Cart
