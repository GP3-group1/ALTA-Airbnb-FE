import React, { useState } from 'react'
import { Select, Option } from "@material-tailwind/react";


import { AiOutlineHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router'




const Navbar = () => {
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false);
    const [scroll , setScroll ] = useState<any>()

    const goProfile = () => {
        navigate('/Account')
    }

    const goHome = () => {
        navigate('/home')
    }

    const scrolly = addEventListener('scroll' , function() {
        setScroll(window.scrollY)
        console.log(window.scrollY)
        
    })

    window.scrollY
    return (
        <div className=' sticky top-0 '>
            {screen.width > 767
                ? <div className={`w-full h-20 flex flex-row justify-around items-center   ${scroll > 50 ? 'bg-[#4397fb]' : 'bg-white'} duration-500  shadow-md`}>
                    <h1 className={` ${scroll > 50 ? 'text-white' : 'text-[#4397fb]'}   cursor-pointer font-bold`} onClick={goHome} >LOGO</h1>
                    <div className='flex bg-[#eeeeee] rounded-lg px-2 items-center' >
                        <input type="text" className='outline-none py-1 px-3 text-sm bg-transparent' />
                        <BiSearch className='text-[#4397fb] text-2xl  ' />
                    </div>
                    <div className="relative inline-block text-left">
                        <button
                            className="px-10 py-2 font-medium text-gray-700 bg-transparent rounded-md hover:bg-transparent outline-none focus:outline-none focus:ring-2 focus:ring-translate"
                            aria-haspopup="true"
                            aria-expanded={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <CgProfile className={`text-3xl cursor-pointer ${scroll > 50 ? 'text-white' : 'text-[#4397fb]'}`} />
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 z-10 w-full mt-2 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-gray-200" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <div className="py-1" role="none">
                                    <a href="#" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={goProfile}>Account</a>
                                    <a href="#" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" >Log-out</a>
                                </div>
                            </div>
                        )}
                    </div>
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
