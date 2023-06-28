'use client'

import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image'
import product_ph from '../assets/product_ph.png'

const MustHave = () => {
  return (
    <div className='w-full relative flex justify-center flex-col items-center px-[4vw] py-14' id='sag_musthave'>
        <h3 className='font-nevada text-6xl pb-10 text-center'>MUST HAVE</h3>
        <Splide aria-label="My Favorite Images" className='w-full' options={{
            type: 'loop',
            padding: 40,
            perPage: 4,
            perMove: 1,
            gap: 20,
            breakpoints: {
                1160: {
                    perPage: 3
                },
                890: {
                    perPage: 2
                },
                640: {
                    perPage: 1
                }
            }
        }}>
            <SplideSlide className='cursor-pointer'>
                <a href="/producto">
                    <Image
                        src={product_ph}
                        width='100%'
                        className='h-auto rounded-md border-2'
                    />
                    <div className="flex flex-row justify-between align-top">
                        <span className='text-dark text-left font-bold pt-4 text-md'>LADIES BAG IT LIBRE</span>
                        <span className='text-right text-[#747474] pt-4'>$4,999.00</span>
                    </div>
                    <div className="flex flex-row justify-start align-top pt-3 gap-1">
                        <div className="bg-blue-600 h-4 w-4 rounded-full cursor-pointer"></div>
                        <div className="bg-pink-500 h-4 w-4 rounded-full cursor-pointer"></div>
                        <div className="bg-green-500 h-4 w-4 rounded-full cursor-pointer"></div>
                    </div>
                </a>
            </SplideSlide>
        </Splide>
    </div>
  )
}

export default MustHave
