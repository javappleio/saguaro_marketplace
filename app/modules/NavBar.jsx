'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../assets/logos_Saguaro.png'
import { FiSearch, FiUser } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {

  const [menu, setMenu] = useState(false)

  return (
    <nav className='flex flex-row justify-between items-center mx-auto h-[80px] px-[4vw] fixed top-[30px] w-full bg-F1F0EB z-50'>
        <div className="nav_left lg:flex hidden flex-row justify-start items-center gap-10 w-1/3">
            <a href="/colecciones">Colecciones</a>
            <a href="/colecciones">Lo Nuevo</a>
            <a href="/colecciones">Marcas</a>
        </div>
        <a href="/">
          <Image
              src={logo}
              quality='100'
              className='lg:w-[220px] w-36 h-auto'
          />
        </a>
        <div className="nav_left lg:flex hidden flex-row justify-end items-center gap-12 w-1/3">
            <a href="#"><FiSearch /></a>
            <a href="/login"><FiUser /></a>
            <a href="/carrito"><AiOutlineShoppingCart /></a>
        </div>
        <AiOutlineMenu size={32} className='lg:hidden block' onClick={() => setMenu(!menu)} />
        <div className={menu ? "menuresp absolute top-0 right-0 flex flex-col justify-center items-center h-[100svh] bg-[#F1F0EB] z-50 w-2/3 gap-6" : 'hidden'}>
          <AiOutlineMenu size={32} className='lg:hidden block absolute top-6 right-4' onClick={() => setMenu(!menu)} />
          <a href="/colecciones">Colecciones</a>
          <a href="/colecciones">Lo Nuevo</a>
          <a href="/colecciones">Marcas</a>
          <a href="#"><FiSearch /></a>
          <a href="/login"><FiUser /></a>
          <a href="/carrito"><AiOutlineShoppingCart /></a>
        </div>
        <div className={menu ? "w-screen h-screen fixed top-0 left-0 z-40 bg-black opacity-50" : "hidden"}></div>
    </nav>
  )
}

export default NavBar
