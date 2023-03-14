import React from 'react'
import { CgProfile } from 'react-icons/cg'
import Navbar from '../components/Navbar'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router'

const Profile = () => {
    const Navigate = useNavigate()

    const goTrip = () => {
        Navigate('/trip')
    }
    const hosting = () => {
        Navigate('/hosting')
    }

    return (
        <>
            <Navbar />
            <div className='px-10 py-10'>
                <h1 className='mb-10 text-2xl font-bold'>Account</h1>
                {/* profile */}
                <div className='border-b-2 py-2 flex flex-row cursor-pointer justify-between items-center'>
                    <div className='grid grid-cols-2 w-fit '>
                        <CgProfile className='text-6xl' />
                        <div>
                            <p>ultramen joged</p>
                            <p>Check profile</p>
                        </div>
                    </div>
                    <MdKeyboardArrowRight className='text-3xl ' />
                </div>
                {/* hosting */}
                <h1 className='my-5 text-xl font-semibold '>Hosting</h1>
                <div onClick={hosting} className='bg-blue-200 pl-5 rounded-md py-2 cursor-pointer flex flex-row justify-between items-center'>
                    <div className='grid grid-cols-2 w-fit '>
                    <p>Rent your place</p>
                    </div>
                    <MdKeyboardArrowRight className='text-3xl ' />
                </div>
                {/* altapay */}
                <h1 className='my-5 text-xl font-semibold '>Altapay</h1>
                <div className='bg-blue-200 pl-5 rounded-md py-2 flex flex-row cursor-pointer justify-between items-center'>
                    <div className='grid grid-cols-2 w-fit '>
                    <p>Top up</p>
                    </div>
                    <MdKeyboardArrowRight className='text-3xl ' />
                </div>
                {/* trip */}
                <h1 className='my-5 text-xl font-semibold '>Trip</h1>
                <div onClick={goTrip} className='bg-blue-200 pl-5 rounded-md py-2 flex cursor-pointer flex-row justify-between items-center'>
                    <div className='grid grid-cols-2 w-fit '>
                    <p>Check your trip</p>
                    </div>
                    <MdKeyboardArrowRight className='text-3xl ' />
                </div>
            </div>
        </>
    )
}

export default Profile
