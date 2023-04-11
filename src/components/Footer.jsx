import React from 'react'

function Footer() {
    return (
        <footer class="mt-10 text-white py-4 px-6 sm:py-8 sm:px-12 md:py-10 md:px-16 lg:py-12 lg:px-20 xl:py-16 xl:px-24 2xl:py-20 2xl:px-32">
            <div class=" grid grid-cols-3">
                <article>
                    <i className='m-5'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    </i>
                    <h1 className='font-bold'>MISIÓN</h1>


                    <p>FOMENTAR EL CARDIO NOCTURNO Y DEMOCRATIZAR EL SEXO ENTRE TODOS NUESTROS HERMANOS</p>

                </article>
                <article>
                    <i className='m-5'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                    </i>
                    <h1 className='font-bold'>VISIÓN</h1>



                    <p>
                        CONQUISTAR EL MUNDO
                    </p>

                </article>
                <article>
                    <i className='m-5'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>

                    </i>
                    <h1 className='font-bold'> NECESITAS AYUDA?</h1>

                    <p>Contactanos por el <span className='text-green-300'>whatsapp </span> <a href="https://wa.me/51989023986" className='hover:underline'>
                        (+51)989 023 986</a></p>
                </article>
            </div>
        </footer>
    )
}

export default Footer
