import React from 'react'
import fit from '../assets/fit.png'
import { ContactBtn } from './Buttons'
function Landing() {
  return (
    <main className='mt-14 grid md:grid-cols-2 '>
        <header className='flex flex-col '>
            <h1 className='text-9xl font-bold leading-[10rem]'>JOSE<br/><span className='rounded-md bg-orange-400 text-black px-2'>BALTA</span></h1>
            <p className='mt-10 text-2xl text-gray-300'>
          ASESORIA ANABOLICA
          </p>
          <div className='flex mt-5'>
          <ContactBtn/>
          </div>
        </header>
        <section className=''>
            <img src={fit} className='aspect-auto  object-cover' alt="" />

        </section>
    </main>
  )
}

export default Landing