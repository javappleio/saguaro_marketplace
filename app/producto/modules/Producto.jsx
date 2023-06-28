'use client'

import React, { useState, Fragment } from 'react'
import Image from 'next/image'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import prod1 from '../../assets/singleprod_ph.png'
import prod2 from '../../assets/singleprod_car1.png'
import prod3 from '../../assets/singleprod_car2.png'
import marca from '../../assets/vitra.png'
import product_ph from '../../assets/product_ph.png'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Producto = () => {

    const [princ, setPrinc] = useState(prod1)
    const [cant, setCant] = useState(1)

    const [open, setOpen] = useState(1);
 
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

  return (
    <section className='container px-4 pt-6 lg:pt-11 mx-auto'>
        <div className='flex flex-col lg:flex-row gap-4'>
            <div className="hidden lg:flex flex-col w-full lg:w-1/12 gap-2">
                <Image
                    src={prod1}
                    className={princ === 1 ? 'w-full aspect-square object-cover opacity-100 cursor-pointer' : 'w-full aspect-square object-cover opacity-40 cursor-pointer'}
                    onClick={() => setPrinc(prod1)}
                />
                <Image
                    src={prod2}
                    className={princ === 2 ? 'w-full aspect-square object-cover opacity-100 cursor-pointer' : 'w-full aspect-square object-cover opacity-40 cursor-pointer'}
                    onClick={() => setPrinc(prod2)}
                />
                <Image
                    src={prod3}
                    className={princ === 3 ? 'w-full aspect-square object-cover opacity-100 cursor-pointer' : 'w-full aspect-square object-cover opacity-40 cursor-pointer'}
                    onClick={() => setPrinc(prod3)}
                />
            </div>
            <div className="w-full lg:w-6/12">
                <Image
                    src={princ}
                    className='w-full h-4/5 object-cover'
                />
            </div>
            <div className="w-full lg:w-5/12 px-4">
                <span>Abrigos</span>
                <div className="flex flex-row justify-between items-start pt-6 gap-4">
                    <h2 className='font-soleil font-bold text-3xl'>Abrigo con doble bolsillo de hombros caídos con cremallera</h2>
                    <Image
                        src={marca}
                        className='w-40'
                    />
                </div>
                <div className="flex flex-row justify-start items-center pt-6 gap-3 pb-3">
                    <span className='text-dark text-2xl'>$897.00</span>
                    <span className='text-[#b7b7b7] text-lg font-thin line-through'>$897.00</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing ut nibh tincidunt sit odio. Blandit egestas tellus at ultrices purus. Sollicitudin lacus scelerisque platea felis lacus tempus sagittis mauris tellus arcu.</p>
                <div className="flex flex-row justify-start items-center pt-6 gap-3 pb-3">
                    <span className='font-bold'>Color: </span>
                    <div className="w-6 h-6 rounded-full bg-[#F7B927] border-0 border-solid border-dark hover:border-[1px] cursor-pointer"></div>
                    <div className="w-6 h-6 rounded-full bg-[#5D7060] border-0 border-solid border-dark hover:border-[1px] cursor-pointer"></div>
                    <div className="w-6 h-6 rounded-full bg-[#EEC891] border-0 border-solid border-dark hover:border-[1px] cursor-pointer"></div>
                </div>
                <div className="flex flex-row justify-start items-center pt-2 gap-2 pb-3">
                    <span className='font-bold'>Talla: </span>
                    <div className="rounded-full bg-[#E2E2E2] hover:bg-[#5D7060] border-[1px] border-solid border-[#E2E2E2] cursor-pointer py-2 px-5 text-xs leading-none text-dark hover:text-white">XS</div>
                    <div className="rounded-full bg-[#E2E2E2] hover:bg-[#5D7060] border-[1px] border-solid border-[#E2E2E2] cursor-pointer py-2 px-5 text-xs leading-none text-dark hover:text-white">S</div>
                    <div className="rounded-full bg-[#E2E2E2] hover:bg-[#5D7060] border-[1px] border-solid border-[#E2E2E2] cursor-pointer py-2 px-5 text-xs leading-none text-dark hover:text-white">M</div>
                    <div className="rounded-full bg-[#E2E2E2] hover:bg-[#5D7060] border-[1px] border-solid border-[#E2E2E2] cursor-pointer py-2 px-5 text-xs leading-none text-dark hover:text-white">L</div>
                    <div className="rounded-full bg-[#E2E2E2] hover:bg-[#5D7060] border-[1px] border-solid border-[#E2E2E2] cursor-pointer py-2 px-5 text-xs leading-none text-dark hover:text-white">XL</div>
                </div>
                <div className="flex flex-row justify-start items-center pt-2 gap-2 pb-3">
                    <div className="flex flex-row justify-start items-center h-12 border-solid border-[#B7B7B7] border-[1px] gap-6 px-3 w-1/3">
                        <AiOutlineMinus className='h-full cursor-pointer flex-1' fill='#B7B7B7' onClick={() => {
                            cant !== 0 ? setCant(cant - 1) : setCant(0)
                        }} />
                        <span>{cant}</span>
                        <AiOutlinePlus className='h-full cursor-pointer flex-1' fill='#B7B7B7' onClick={() => setCant(cant + 1)} />
                    </div>
                    <button className='bg-[#5D7060] w-full h-12 text-white rounded-full'>Añadir al Carrito</button>
                </div>
                <Fragment>
                    <Accordion open={open === 1} className='mt-4'>
                        <AccordionHeader onClick={() => handleOpen(1)} className='font-soleil text-base py-2'>
                            Detalles y Especificaciones
                        </AccordionHeader>
                        <AccordionBody className='text-xs font-soleil'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut risus risus aenean posuere aliquam ullamcorper lectus. Ultricies odio aliquet viverra nisl eget nibh dui enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br /><br />
                        Aliquam ut risus risus aenean posuere aliquam ullamcorper lectus. Ultricies odio aliquet viverra nisl eget nibh dui enim.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} >
                        <AccordionHeader onClick={() => handleOpen(2)} className='font-soleil text-base py-2'>
                            Tallas y Dimensiones
                        </AccordionHeader>
                        <AccordionBody className='text-xs font-soleil'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut risus risus aenean posuere aliquam ullamcorper lectus. Ultricies odio aliquet viverra nisl eget nibh dui enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br /><br />
                        Aliquam ut risus risus aenean posuere aliquam ullamcorper lectus. Ultricies odio aliquet viverra nisl eget nibh dui enim.
                        </AccordionBody>
                    </Accordion>
                
                </Fragment>
            </div>
        </div>
        <h3 className='text-lg font-bold pt-6'>PRODUCTOS RELACIONADOS</h3>
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
    </section>
  )
}

export default Producto
