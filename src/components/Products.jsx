import React from 'react'
import jeringa from '../assets/jeringa.png'
function Products () {
  return (
        <section className='rounded-md bg-gray-900 grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-white'>
            <div class="shadow-lg p-4 text-center flex flex-col justify-center md:justify-start items-center">
                <h1>Ciclos</h1>
                <img src={jeringa} className='aspect-auto  w-7/12' alt="" /></div>
            <div class="shadow-lg p-4 text-center flex flex-col justify-center items-center md:justify-start ">
                <h1>Sarms</h1>
                <img src="https://josebalta.com/wp-content/uploads/2019/04/ASDFASDGSWDFHGSDGFH-1.png" className='aspect-auto  w-7/12' alt="" />
            </div>
            <div class="shadow-lg p-4 text-center flex flex-col justify-center items-center md:justify-start ">
                <h1>babilonio</h1>
                <img src="https://josebalta.com/wp-content/uploads/2019/04/babilonio-1024x1024.png" className='aspect-auto  w-7/12' alt="" />
            </div>
            <div class="shadow-lg p-4 text-center flex flex-col justify-center items-center md:justify-start ">
                <h1>colageno</h1>
                <img src="https://josebalta.com/wp-content/uploads/2022/04/274850671_284520387123118_6879067162142015247_n-1.png" className='aspect-auto  w-7/12' alt="" />
            </div>
            <div class="shadow-lg p-4 col-span-full self-center flex justify-center items-center flex-col gap-4 border-t border-gray-700 md:justify-start ">
                <h1 className='text-center text-4xl font-semibold inline'>Quemadores en oferta </h1>
               
                <img src="https://josebalta.com/wp-content/uploads/2020/12/QUEMADORES-768x416.png" className='aspect-auto  w-7/12 md:max-w-xl rounded-md' alt="" />
            </div>
        </section>
  )
}

export default Products
