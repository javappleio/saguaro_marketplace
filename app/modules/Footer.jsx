import React from 'react'
import Image from 'next/image'
import iso from '../assets/iso.svg'
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <section id='sag_footer'>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end py-6 lg:py-14 w-full gap-7 lg:gap-0">
            <div className="flex flex-col justify-center items-center text-center w-full lg:w-1/3">
                <p className='text-dark font-soleil font-bold'>FREE SHIPPING</p>
                <p className='text-dark font-soleil text-xs'>ON ALL ORDERS OVER MEX$3,050.00</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center w-full lg:w-1/3">
                <Image
                    src={iso}
                    className='w-12 h-auto hidden lg:block'
                />
                <p className='text-dark font-soleil font-bold'>DUTIES AN TAXES MAY VARY</p>
                <p className='text-dark font-soleil text-xs'>EXTRA CHARGES MAY APPLY OUTSIDE MX</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center w-full lg:w-1/3">
                <p className='text-dark font-soleil font-bold'>HERE FOR YOU</p>
                <p className='text-dark font-soleil text-xs'>CHAT US / EMAIL US AT HELLO@SAGUARO.MX</p>
            </div>
        </div>
        <Marquee gradient={false} speed={70} className='overflow-hidden'>
            <p className='text-dark font-nevada text-3xl md:text-6xl'> ÚNETE A NUESTRO NEWSLETTER Y ENTERATE DE LAS NOVEDADES - </p>
            <p className='text-dark font-nevada text-3xl md:text-6xl'> ÚNETE A NUESTRO NEWSLETTER Y ENTERATE DE LAS NOVEDADES - </p>
            <p className='text-dark font-nevada text-3xl md:text-6xl'> ÚNETE A NUESTRO NEWSLETTER Y ENTERATE DE LAS NOVEDADES - </p>
            <p className='text-dark font-nevada text-3xl md:text-6xl'> ÚNETE A NUESTRO NEWSLETTER Y ENTERATE DE LAS NOVEDADES - </p>
        </Marquee>
        <div className="sag_newsletter w-full flex flex-col md:flex-row justify-center items-center pt-10 pb-20 gap-2">
            <input type="email" placeholder='Registrate para recibir informacion de Saguaro' className='text-center rounded-none font-soleil text-sm bg-transparent border-b-[1px] border-b-dark border-solid w-5/6 md:w-3/6 outline-none py-3' />
            <input type="submit" value="SUBMIT" className='text-xs cursor-pointer py-3 px-6 bg-AE8B6F text-white' />
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full items-center container mx-auto border-y-[1px] border-y-dark border-solid py-12 gap-5 md:gap-0">
            <div className="flex flex-col w-1/2 items-center md:items-start md:w-1/5 gap-2">
                <p className='text-dark font-soleil font-bold pb-4'>SAGUARO</p>
                <p className='text-dark font-soleil text-xs'>About</p>
                <p className='text-dark font-soleil text-xs'>Work With Us</p>
                <p className='text-dark font-soleil text-xs'>Contact</p>
            </div>
            <div className="flex flex-col w-1/2 items-center md:items-start md:w-1/5 gap-2">
                <p className='text-dark font-soleil font-bold pb-4'>SHOP</p>
                <p className='text-dark font-soleil text-xs'>Shipping and Returns</p>
                <p className='text-dark font-soleil text-xs'>FAQ</p>
            </div>
            <div className="flex flex-col w-1/2 items-center md:items-start md:w-2/5 gap-2">
                <p className='text-dark font-soleil font-bold pb-4'>LEGAL</p>
                <p className='text-dark font-soleil text-xs'>Terms</p>
                <p className='text-dark font-soleil text-xs'>Sitemap</p>
                <p className='text-dark font-soleil text-xs'>Accessibility</p>
            </div>
            <div className="flex flex-col w-1/2 items-center md:items-start md:w-1/5 gap-2">
                <p className='text-dark font-soleil font-bold pb-4'>SOCIAL</p>
                <p className='text-dark font-soleil text-xs'>Pinterest</p>
                <p className='text-dark font-soleil text-xs'>Instagram</p>
                <p className='text-dark font-soleil text-xs'>Facebook</p>
            </div>
        </div>
        <p className='text-center text-xs py-7'>2023© SAGUARO</p>
    </section>
  )
}

export default Footer
