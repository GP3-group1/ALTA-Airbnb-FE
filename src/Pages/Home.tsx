
import React, { Children, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'


import { FaFilter } from 'react-icons/fa'
import { AiTwotoneStar } from 'react-icons/ai'
import { IoLocationSharp, IoWalletSharp } from 'react-icons/io5'
import Card from '../components/Card'
import { User } from '../store/features/userSlice'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { useCookies } from 'react-cookie'





const Home = () => {
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);
    const [allRoom, setAllRoom] = useState([])
    const [balance , setBalance] = useState([''])


    const handleDetail = (id:number) => {
        navigate(`/reserve/${id}`)
    }

    const getBalance = async() => {
        try {
            const res = await axios.get(`http://104.198.56.90:8081/users/balances` , {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
            const arr: any = [res.data.data]
            setBalance(arr)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllRoom = async () => {
        await axios.get('http://104.198.56.90:8081/rooms?page=1&limit=8', {
            headers: { Authorization: `Bearer ${cookies.userToken}` }
        })
            .then((response) => {
                setAllRoom(response.data.data)
            })
    }

    useEffect(() => {
        getAllRoom()
        getBalance()
    }, [])

    console.log('balance babi', balance);
    
    return (
        <div>
            <Navbar />

            <div className='flex flex-row justify-between px-10 items-center'>
                <div className='mt-7 ml-5'>
                    <label htmlFor="my-modal-6" className="text-2xl md:text-2xl "><FaFilter className='text-[#4397fb]' /></label>
                </div>
                <div className='flex flex-row-reverse items-center gap-2 mt-5'>
                    <IoWalletSharp className='text-2xl text-[#4397fb]' />
                    {
                        balance?.map((item: any , i:any) => {
                            return (
                                <div key={item.id} className='text-2xl text-[#4397fb]'>
                                    ${item.balance}
                                </div>
                            )
                        })
                    }
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
                {allRoom?.map((items: any, index: any) => {
                    return (
                        <Card key={index} title={items.name} location={items.location} rating={items.avg_rating} price={`$${items.price}`} handleDetail={() => handleDetail(items.id)} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home



