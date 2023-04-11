import React from 'react'

function Navbar () {
  return (
        <nav className='flex justify-center sticky top-0 md:justify-between items-center p-4 backdrop-blur-lg'>
            <div className='hidden  md:block'>
                <img src="https://josebalta.com/wp-content/uploads/2018/12/Jose-Balta-LOGO.png" className='w-24' alt="" />
            </div>
            <div className='flex gap-8 font-medium text-white'>
                <a href="#" className='transition-colors p-2 hover:bg-orange-400 rounded-md' >Exercise</a>
                <a href="#" className='transition-colors p-2 hover:bg-orange-400 rounded-md' >Trainers</a>
                <a href="#" className='transition-colors p-2 hover:bg-orange-400 rounded-md' >Products</a>
            </div>
        </nav>
  )
}

export default Navbar
