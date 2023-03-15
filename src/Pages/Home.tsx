
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
    const [balance, setBalance] = useState([''])
    const [price1, setPrice1] = useState('')
    const [price2, setPrice2] = useState('')
    const [location, setLocation] = useState('')


    const handleDetail = (id: number) => {
        navigate(`/reserve/${id}`)
    }

    const getBalance = async () => {
        try {
            const res = await axios.get(`http://104.198.56.90:8081/users/balances`, {
                headers: {
                    Authorization: `Bearer ${cookies.userToken}`
                }
            })
            const arr: any = [res.data.data]
            setBalance(arr)
        } catch (error) {
            console.log(error)
        }
    }

    const handleFilter = async () => {
        await axios.get(`http://104.198.56.90:8081/rooms?page=1&limit=8&location=bali&price=${price1} - ${price2}`, {
            headers: { Authorization: `Bearer ${cookies.userToken}` }
        })
            .then((response) => {
                setAllRoom(response.data.data)
            })
    }

    const getAllRoom = async () => {
        await axios.get(`http://104.198.56.90:8081/rooms?page=1&limit=8`, {
            headers: { Authorization: `Bearer ${cookies.userToken}` }
        })
            .then((response) => {
                setAllRoom(response.data.data)
                console.log(response.data.data)
            })
    }

    useEffect(() => {
        getAllRoom()
        getBalance()
    }, [])


    return (
        <>
            <Navbar />
            <div className='px-10'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='mt-7'>
                        <label htmlFor="my-modal-6" className="text-2xl md:text-2xl cursor-pointer "><FaFilter className='text-[#4397fb]' /></label>
                    </div>
                    <div className='flex flex-row-reverse items-center gap-2 mt-5'>
                        <IoWalletSharp className='text-2xl  text-[#4397fb]' />
                        {
                            balance?.map((item: any, i: any) => {
                                return (
                                    <div key={item.id} className='text-xl  text-black'>
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
                        <div className="modal-box bg-white px-7">
                            <h1 className='text-2xl font-bold text-gray-600'>Price range</h1>
                            <div className='flex flex-row gap-3 my-3'>
                                <input type="number" className='w-32 outline-none text-lg bg-gray-100 px-2' onChange={(e) => setPrice1(e.target.value)} />
                                -
                                <input type="number" className='w-32 outline-none text-lg px-2 bg-gray-100' onChange={(e) => setPrice2(e.target.value)} />
                            </div>
                            <h1 className='text-2xl font-bold text-gray-600'>Location</h1>
                            <div className='flex items-center gap-2'>
                                <IoLocationSharp className='text-[#4397fb] text-lg ' />
                                <input type="text" placeholder='Bali' onChange={(e) => console.log(e.target.value)} className='w-44 rounded-md px-2 outline-none text-lg my-2' />
                            </div>
                            <div className="modal-action">
                                <label htmlFor="my-modal-6" className="w-24 h-10 flex justify-center items-center text-white font-semibold bg-red-600 rounded-sm text-center   ">Close</label>
                                <label htmlFor="my-modal-6" className="w-24 h-10 flex justify-center items-center text-white font-semibold bg-[#19345e] rounded-sm text-center" onClick={handleFilter}>Filter</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* card */}
                <div className='w-full py-10 gap-10 md:gap-6 grid sm:grid-cols-1 md:grid-cols-4  '>
                    {allRoom?.map((items: any, index: any) => {
                        return (
                            <>
                                <Card title={items.name} location={items.location} price={`$${items.price}`} handleDetail={() => handleDetail(items.id)} />
                                <Card title='Vila serpong' location='jogja' price={`$200`} handleDetail={() => handleDetail(2)} />
                                <Card title='Vila mewah ' location='cianjur' price={`$100`} handleDetail={() => handleDetail(4)} />
                                <Card title='Vila bogor' location='bogor' price={`$$500`} handleDetail={() => handleDetail(1)} />
                                <Card title='Vila serpong' location='jogja' price={`$200`} handleDetail={() => handleDetail(2)} />
                                <Card title='Vila mewah ' location='cianjur' price={`$100`} handleDetail={() => handleDetail(4)} />
                                <Card title='Vila bogor' location='bogor' price={`$$500`} handleDetail={() => handleDetail(1)} />
                                <Card title='Vila serpong' location='jogja' price={`$200`} handleDetail={() => handleDetail(2)} />
                                <Card title='Vila mewah ' location='cianjur' price={`$100`} handleDetail={() => handleDetail(4)} />
                                <Card title='Vila bogor' location='bogor' price={`$$500`} handleDetail={() => handleDetail(1)} />
                                <Card title='Vila serpong' location='jogja' price={`$200`} handleDetail={() => handleDetail(2)} />
                                <Card title='Vila mewah ' location='cianjur' price={`$100`} handleDetail={() => handleDetail(4)} />
                                <Card title='Vila bogor' location='bogor' price={`$$500`} handleDetail={() => handleDetail(1)} />
                                <Card title='Vila serpong' location='jogja' price={`$200`} handleDetail={() => handleDetail(2)} />
                                <Card title='Vila mewah ' location='cianjur' price={`$100`} handleDetail={() => handleDetail(4)} />
                                <Card title='Vila bogor' location='bogor' price={`$$500`} handleDetail={() => handleDetail(1)} />
                                <Card title='Vila serpong' location='jogja' price={`$200`} handleDetail={() => handleDetail(2)} />
                                <Card title='Vila mewah ' location='cianjur' price={`$100`} handleDetail={() => handleDetail(4)} />
                                <Card title='Vila bogor' location='bogor' price={`$$500`} handleDetail={() => handleDetail(1)} />

                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home



