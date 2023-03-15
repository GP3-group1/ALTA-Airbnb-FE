import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

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
                <h1 className='mb-10 text-2xl font-bold'>Profile</h1>
                <form action="" className='flex flex-col mb-20 '>
                    <label htmlFor="">Name</label>
                    <input type="text" className='border-b-2  h-8  mb-5 outline-none' />
                    <label htmlFor="">Email</label>
                    <input type="text"  className='border-b-2  h-8 mb-5 outline-none'/>
                    <label htmlFor="">Password</label>
                    <input type="text"  className='border-b-2 h-8 mb-5 outline-none'/>
                    <label htmlFor="">Home address</label>
                    <input type="text" className='border-b-2 h-8 mb-5 outline-none' />
                    <label htmlFor="">Phone</label>
                    <input type="text" className='border-b-2 h-8 mb-5 outline-none' />
                    <label htmlFor="">Zip code</label>
                    <input type="text" className='border-b-2 h-8 mb-5 outline-none' />
                    <div className='flex flex-row justify-end gap-5 mt-5'>
                        <button className='bg-red-500 text-white px-3 rounded-md text-center text-bold'>Close</button>
                        <button className='bg-blue-500 text-white px-3 py-2  rounded-md text-center text-bold' >Save change</button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Profile
