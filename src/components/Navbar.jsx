import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='main  lg:flex md:flex flex-wrap justify-between items-center px-4 py-4 bg-[#40407a] sticky top-0'>

            {/* Nav-logo */}
            <div className='left'>
                    <h1 className='text-white text-2xl font-bold flex justify-center'>ANKIT</h1>
            </div>

            {/* nav-navigation */}

            <div className='right'>
                    <ul className='flex space-x-4 text-white justify-center'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
            </div>

        </div>
    </>
  )
}

export default Navbar