'use client'

import '../style.css'
import React, { useState } from 'react'
import { MdOutlineFilterList } from 'react-icons/md'
import Image from 'next/image'
import product_ph from '../../assets/product_ph.png'

const Filters = () => {

    const [filters, setFilters] = useState(false)
    const [range, setRange] = useState(100)

  return (
    <div className='container px-4 pt-6 lg:pt-11 mx-auto'>
        <div className="breadcrumb flex flex-row justify-between items-center">
            <div>
                <span className='text-[#777777] text-sm'>Shop /</span>
                <span className='text-dark text-sm font-bold'> Categorias</span>
            </div>
            <div className="filter_icons flex flex-row gap-2 cursor-pointer" onClick={() => setFilters(!filters)}>
                <MdOutlineFilterList className='filter_icon' />
                <span className='text-dark text-sm'> Filters</span>
            </div>
        </div>
        <div className={filters ? "flex flex-row justify-between items-start w-full py-3 h-auto transition" : "hidden flex-row justify-between items-start w-full py-3 h-0"}>
            <div className="w-1/3 flex flex-col gap-2">
                <p className='text-dark font-soleil font-bold pb-4'>FILTRAR POR</p>
                <p className='text-gray-400 hover:text-dark font-soleil text-xs'>Recomendados</p>
                <p className='text-gray-400 hover:text-dark font-soleil text-xs'>Novedades</p>
                <p className='text-gray-400 hover:text-dark font-soleil text-xs'>Mejor Evaluados</p>
                <p className='text-gray-400 hover:text-dark font-soleil text-xs'>Menor a mayor precio</p>
                <p className='text-gray-400 hover:text-dark font-soleil text-xs'>Mayor a menor precio</p>
            </div>
            <div className="w-1/3 flex flex-col gap-2">
                <p className='text-dark font-soleil font-bold pb-4'>PRECIO</p>
                <input type="range" className='w-2/4' min={0} max={5000} value={range} onChange={(e) => setRange(e.target.value)} />
                <p className='text-dark font-soleil text-xs'>$0 - ${range}</p>
            </div>
            <div className="w-1/3 flex flex-col gap-2">
                <p className='text-dark font-soleil font-bold pb-4'>COLOR</p>
                <div className="flex flex-row justify-start items-center gap-2 opacity-60 hover:opacity-100 cursor-pointer">
                    <div className='bg-blue-500 h-3 w-3 rounded-full'></div>
                    <span className='text-dark font-soleil text-xs w-auto leading-none'>Azul</span>
                </div>
                <div className="flex flex-row justify-start items-center gap-2 opacity-60 hover:opacity-100 cursor-pointer">
                    <div className='bg-dark h-3 w-3 rounded-full'></div>
                    <span className='text-dark font-soleil text-xs w-auto leading-none'>Negro</span>
                </div>
                <div className="flex flex-row justify-start items-center gap-2 opacity-60 hover:opacity-100 cursor-pointer">
                    <div className='bg-green-500 h-3 w-3 rounded-full'></div>
                    <span className='text-dark font-soleil text-xs w-auto leading-none'>Verde</span>
                </div>
                <div className="flex flex-row justify-start items-center gap-2 opacity-60 hover:opacity-100 cursor-pointer">
                    <div className='bg-red-500 h-3 w-3 rounded-full'></div>
                    <span className='text-dark font-soleil text-xs w-auto leading-none'>Rojo</span>
                </div>
            </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 pt-4">
            <a href='/producto' className="product cursor-pointer">
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
            <a href='/producto' className="product cursor-pointer">
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
            <a href='/producto' className="product cursor-pointer">
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
            <a href='/producto' className="product cursor-pointer">
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
            <a href='/producto' className="product cursor-pointer">
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
            <a href='/producto' className="product cursor-pointer">
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
            <a href='/producto' className="product cursor-pointer">
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
            <a href='/producto' className="product cursor-pointer">
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
            <a href='/producto' className="product cursor-pointer">
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
            <a href='/producto' className="product cursor-pointer">
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
            <a href='/producto' className="product cursor-pointer">
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
            <a href='/producto' className="product cursor-pointer">
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
            
        </div>
    </div>
  )
}

export default Filters
