import React, { FC } from 'react'
import seririt from '../assets/seririt.jpg'

import { AiTwotoneStar } from 'react-icons/ai'

interface myProps {
    title: string
    location: string
    price: any
    rating?: number
    overview?: string
    description?: string
    facilities?: string
    image?: string

    handleDetail?: React.MouseEventHandler
}


const Card: FC<myProps> = ({ title, location, price, handleDetail, image ,rating }) => {
    const imgUrl = 'https://storage.googleapis.com/alta-airbnb/'
    return (
        <div className=" overflow-hidden shadow-lg md:w-fit w-fit h-fit rounded-md cursor-pointer" onClick={handleDetail}>
            <div className='h-44 relative  overflow-hidden'>
                <img className="w-auto h-full" src={imgUrl + image} alt="Sunset in the mountains" />
            </div>
            <div className="px-2 py-4">
                <div className="font-semibold text-sm md:text-md  mb-2">{title}</div>
                <p className="text-gray-700 text-base">{location}</p>
                <p className='flex items-center'><AiTwotoneStar /> {rating}</p>
                <p className="text-gray-700 text-base">${price}</p>
            </div>
        </div>
    )
}

export default Card
