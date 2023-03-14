import React from 'react'


import { AiOutlineHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router'




const Navbar = () => {
    const navigate = useNavigate()

    const goProfile = () => {
        navigate('/profile')
    }

    const goHome = () => {
        navigate('/home')
    }
    return (
        <div className='z-50'>
            {screen.width > 767
                ? <div className='w-full h-16 flex flex-row justify-around items-center bg-[#4397fb]'>
                    <h1 className='text-white cursor-pointer font-bold'onClick={goHome} >LOGO</h1>
                    <div className='flex bg-[#eeeeee] rounded-lg px-2 items-center' >
                        <input type="text" className='outline-none text-sm bg-transparent' />
                        <BiSearch className='text-[#4397fb] ' />
                    </div>
                    <CgProfile onClick={goProfile} className='text-3xl cursor-pointer text-white' />
                </div>
                : <div className='w-full h-20 fixed bottom-0 flex flex-row justify-around items-center bg-[#4397fb]'>
                    <AiOutlineHome onClick={goHome} className='text-4xl text-white cursor-pointer' />
                    <CgProfile onClick={goProfile} className='text-4xl cursor-pointer text-white' />
                </div>
            }
        </div>
    )
}

export default Navbar
