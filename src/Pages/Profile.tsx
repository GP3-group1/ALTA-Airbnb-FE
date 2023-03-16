import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import Swal from 'sweetalert2'


const Profile = () => {
    const Navigate = useNavigate()
    const [cookies, setCookie] = useCookies(['userToken'])
    const [dataUser, setDataUser] = useState<any>([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [sex, setSex] = useState('')
    const [address, setAddress] = useState('')

    const goTrip = () => {
        Navigate('/trip')
    }
    const hosting = () => {
        Navigate('/hosting')
    }

    const getUser = async () => {
        await axios.get('https://airbnb.my-extravaganza.site/users', {
            headers: {
                Authorization: `Bearer ${cookies.userToken}`
            }
        })
            .then((res) => {
                console.log(res.data.data)
                const response = [res.data.data]
                setDataUser(response)
                setName(res.data.data.name)
                setEmail(res.data.data.email)
                setPhone(res.data.data.phone_number)
                setSex(res.data.data.sex)
                setAddress(res.data.data.address)
            })
    }


    const updateProfile = async (e: any) => {
        console.log(name)
        console.log(email)
        console.log(phone)
        console.log(address)
        console.log(sex)
        e.preventDefault()
        await axios.put('https://airbnb.my-extravaganza.site/users', {
            "name": name,
            "email": email,
            "phone": phone,
            "sex": sex,
            "address": address
        }, {
            headers: {
                Authorization: `Bearer ${cookies.userToken}`
            }
        })
            .then((res) => {
                console.log(res.data)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    text: "succesfully update user data",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
    }

    useEffect(() => {
        getUser()
    }, [])


    return (
        <>
            <Navbar />
            <div className='px-10 py-10'>
                <h1 className='mb-10 text-2xl font-bold'>Profile</h1>
                <form action="" className='flex flex-col mb-20 '>
                    <label htmlFor="">Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} className='border-b-2  h-8  mb-5 outline-none' />
                    <label htmlFor="">Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className='border-b-2  h-8 mb-5 outline-none' />
                    <label htmlFor="">Password</label>
                    <input type="text" className='border-b-2 h-8 mb-5 outline-none' />
                    <label htmlFor="">Home address</label>
                    <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} className='border-b-2 h-8 mb-5 outline-none' />
                    <label htmlFor="">Phone</label>
                    <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} className='border-b-2 h-8 mb-5 outline-none' />
                    <label htmlFor="">Gender</label>
                    <input type="text" onChange={(e) => setSex(e.target.value)} value={sex} className='border-b-2 h-8 mb-5 outline-none' />
                    <div className='flex flex-row justify-end gap-5 mt-5'>
                        <button onClick={() => Navigate('/account')} className='bg-red-500 text-white px-3 rounded-md text-center text-bold'>Close</button>
                        <button onClick={(e) => updateProfile(e)} className='bg-blue-500 text-white px-3 py-2 rounded-md text-center text-bold' >Save change</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Profile
