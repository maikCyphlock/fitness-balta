import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Products from '../components/Products'
import Footer from '../components/Footer'
function Root() {
    return (
        <>
            <div className='min-h-screen text-white'>
                <Navbar />
                <Landing />
            </div>
            <div>
                <Products />
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Root