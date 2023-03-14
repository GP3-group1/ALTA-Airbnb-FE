import React, { FC } from 'react'
import seririt from '../assets/seririt.jpg'

import { AiTwotoneStar } from 'react-icons/ai'

interface myProps {
    title: string
    location: string
    rating: any
    price: any
    handleDetail: React.MouseEventHandler
}


const Card: FC<myProps> = ({ title, location, rating, price,handleDetail}) => {
    return (
        <div className='md:w-full w-full h-fit rounded-md' onClick={handleDetail}>
            <img src={seririt} alt="" className='rounded-md' />
            <div className=' mt-2'>
                <h1 className='text-sm font-bold'>{title}</h1>
                <p className='text-sm'>{location}</p>
                <p className='flex text-sm gap-1 items-center'>
                    <AiTwotoneStar />{rating}
                </p>
                <p >
                    <span className='text-orange-600 text-sm'>{price}</span> night
                </p>
            </div>
        </div>
    )
}

export default Card
