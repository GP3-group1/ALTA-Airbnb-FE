import React from 'react'


import { AiOutlineHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'




const Navbar = () => {
    return (
        <div>
            {screen.width > 767
                ? <div className='w-full h-16 flex flex-row justify-around items-center bg-[#4397fb]'>
                    <h1 className='text-white font-bold'>LOGO</h1>
                    <div className='flex bg-[#eeeeee] rounded-lg px-2 items-center' >
                        <input type="text" className='outline-none text-sm bg-transparent' />
                        <BiSearch className='text-[#4397fb] ' />
                    </div>
                    <CgProfile className='text-3xl text-white' />
                </div>
                : <div className='w-full h-20 fixed bottom-0 flex flex-row justify-around items-center bg-[#4397fb]'>
                    <AiOutlineHome className='text-4xl text-white' />
                    <CgProfile className='text-4xl text-white' />
                </div>
            }
        </div>
    )
}

export default Navbar
