import React, { FC } from 'react'
import seririt from '../assets/seririt.jpg'

import { AiTwotoneStar } from 'react-icons/ai'

interface myProps {
    title: string
    location: string
    rating: any
    price: any
}


const Card: FC<myProps> = ({ title, location, rating, price }) => {
    return (
        <div className='md:w-full w-full h-fit rounded-md'>
            <img src={seririt} alt="" className='rounded-md' />
            <div className=' mt-2'>
                <h1 className='font-bold'>{title}</h1>
                <p>{location}</p>
                <p className='flex gap-1 items-center'>
                    <AiTwotoneStar />{rating}
                </p>
                <p >
                    <span className='text-orange-600'>{price}</span> night
                </p>
            </div>
        </div>
    )
}

export default Card
