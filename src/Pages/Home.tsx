
import React, { Children, useState } from 'react'
import Navbar from '../components/Navbar'


import { FaFilter } from 'react-icons/fa'
import { AiTwotoneStar } from 'react-icons/ai'
import { IoLocationSharp, IoWalletSharp } from 'react-icons/io5'
import Card from '../components/Card'
import { User } from '../store/features/userSlice'
const fullname = JSON.parse(localStorage.getItem('user') || "") as User



const Home = () => {
    const navigate = useNavigate()

    const handleDetail = () => {
        navigate('/reserve')
    }

    return (
        <div>
            <Navbar />

            <div className='flex flex-row justify-between px-10 items-center'>
                <div className='mt-7 ml-5'>
                    <label htmlFor="my-modal-6" className="text-2xl md:text-2xl "><FaFilter className='text-[#4397fb]' /></label>
                </div>
                <div className='flex flex-row-reverse items-center gap-2 mt-5'>
                    <IoWalletSharp className='text-2xl text-[#4397fb]' />
                    <span className='text-lg font-bold'>$500</span>
                </div>
            </div>

            {/* filter */}
            <div>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-gray-200 px-7">
                        <h1>Price range</h1>
                        <div className='flex flex-row gap-3 my-3'>
                            <input type="number" className='rounded-md w-32 outline-none text-sm px-2' />
                            -
                            <input type="number" className='rounded-md w-32 outline-none text-sm px-2' />
                        </div>
                        <h1>Rating</h1>
                        <div className='flex flex-row gap-3 my-3 flex-wrap'>
                            <div className='flex items-center gap-1 bg-gray-100 w-fit px-1 rounded-lg cursor-pointer'><AiTwotoneStar className='text-[#4397fb]' /> </div>
                            <div className='flex items-center gap-1 bg-gray-100 w-fit px-1 rounded-lg cursor-pointer'><AiTwotoneStar className='text-[#4397fb]' /><AiTwotoneStar className='text-[#4397fb]' /> </div>
                            <div className='flex items-center gap-1 bg-gray-100 w-fit px-1 rounded-lg cursor-pointer'><AiTwotoneStar className='text-[#4397fb]' /><AiTwotoneStar className='text-[#4397fb]' /><AiTwotoneStar className='text-[#4397fb]' /> </div>
                            <div className='flex items-center gap-1 bg-gray-100 w-fit px-1 rounded-lg cursor-pointer'><AiTwotoneStar className='text-[#4397fb]' /><AiTwotoneStar className='text-[#4397fb]' /><AiTwotoneStar className='text-[#4397fb]' /> <AiTwotoneStar className='text-[#4397fb]' /></div>
                            <div className='flex items-center gap-1 bg-gray-100 w-fit px-1 rounded-lg cursor-pointer'><AiTwotoneStar className='text-[#4397fb]' /><AiTwotoneStar className='text-[#4397fb]' /> <AiTwotoneStar className='text-[#4397fb]' /> <AiTwotoneStar className='text-[#4397fb]' /><AiTwotoneStar className='text-[#4397fb]' /></div>
                        </div>
                        <h1>Location</h1>
                        <div className='flex items-center gap-2'>
                            <IoLocationSharp className='text-[#4397fb] ' />
                            <input type="text" placeholder='Bali' className='w-24 rounded-md px-2 outline-none text-sm my-2' />
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="w-12 text-white font-semibold bg-[#4397fb] text-center rounded-md    ">close</label>
                        </div>
                    </div>
                </div>
            </div>

            {/* card */}
            <div className='w-full md:px-10 px-5 py-10 gap-10 md:gap-6 grid sm:grid-cols-1 md:grid-cols-4  '>
                <Card title='Seririt bali' location='bali' rating='4' price='$200' handleDetail={handleDetail} />
                <Card title='Seririt bali' location='bali' rating='4' price='$200' handleDetail={handleDetail} />
                <Card title='Seririt bali' location='bali' rating='4' price='$200' handleDetail={handleDetail} />
                <Card title='Seririt bali' location='bali' rating='4' price='$200' handleDetail={handleDetail} />
                <Card title='Seririt bali' location='bali' rating='4' price='$200' handleDetail={handleDetail} />
                <Card title='Seririt bali' location='bali' rating='4' price='$200' handleDetail={handleDetail} />
                <Card title='Seririt bali' location='bali' rating='4' price='$200' handleDetail={handleDetail} />
                <Card title='Seririt bali' location='bali' rating='4' price='$200' handleDetail={handleDetail} />
            </div>
        </div>
    )
}

export default Home



