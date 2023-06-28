import React from 'react'
import Image from 'next/image'
import left from '../assets/nosotros_left_img.png'
import right from '../assets/nosotros_right_img.png'

const Nosotros = () => {
  return (
    <section id='sag_nosotros'>
        <div className='container relative mx-auto flex flex-col justify-center items-center gap-5 pb-14'>
            <h5 className='text-center font-minion text-3xl md:text-5xl px-4'>CROMIA SI CONCENTRA NEL REALIZZARE LA BELLEZZA IN MODO NATURALE, UNA BELLEZZA CAPACE DI DURARE UNA VITA INTERA</h5>
            <a href="#" className='text-sm py-3 px-4 border-solid border-2 border-dark rounded-md text-dark leading-none'>VER TODAS LAS MARCAS</a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-top w-full h-full lg:h-[80vh] py-5">
            <div className="nosotros_left flex justify-center items-center w-full md:w-1/2">
                <Image 
                    src={left}
                    className='w-1/2 py-3'
                />
            </div>
            <div className="flex flex-col justify-start items-center text-center gap-7 w-full md:w-1/2 px-[4vw] pt-10">
                <h3 className='font-nevada text-2xl'>A NEW VISUAL IDENTITY for fashion destination Moda Operandi opens windows into a world of style.</h3>
                <p className='text-sm'>¡Descubre SAGUARO, el oasis de la moda mexicana que enciende tu pasión por el estilo y la calidad! Sumérgete en un universo de tendencias y clásicos atemporales, seleccionados cuidadosamente de las mejores boutiques y talentosos diseñadores emergentes de todo México.</p>
                <p className='text-sm'>En SAGUARO, tu seguridad y satisfacción son nuestra prioridad, por eso garantizamos la excelencia en artesanía, durabilidad y producción ética de cada producto. Navega fácilmente por nuestro espacio virtual y déjate asesorar por nuestro dedicado equipo de atención al cliente.</p>
            </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-top w-full h-full lg:h-[80vh] py-5">
            <div className="flex flex-col justify-start items-center text-center gap-7 w-full md:w-1/2 px-[4vw] pt-10">
                <h3 className='font-nevada text-2xl'>A NEW VISUAL IDENTITY for fashion destination Moda Operandi opens windows into a world of style.</h3>
                <p className='text-sm'>Siente la esencia del Desierto de Sonora con nuestro emblemático símbolo, que celebra la vida, belleza y energía donde otros ven vacío. En SAGUARO, transformamos esa energía en una expresión de tu personalidad única, mostrando al mundo tu auténtico interior.</p>
                <p className='text-sm'>¡Únete a la experiencia SAGUARO y déjanos ser tu fuente confiable de moda mexicana excepcional!</p>
            </div>
            <div className="nosotros_right flex justify-center items-center w-full md:w-1/2">
                <Image 
                    src={right}
                    className='w-1/2 py-3'
                />
            </div>
        </div>
    </section>
  )
}

export default Nosotros
