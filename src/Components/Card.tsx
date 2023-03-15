import React, { FC } from 'react'
import seririt from '../assets/seririt.jpg'

import { AiTwotoneStar } from 'react-icons/ai'

interface myProps {
    title: string
    location: string
    price: any
    // img :any
    handleDetail: React.MouseEventHandler
}


const Card: FC<myProps> = ({ title, location, price, handleDetail,  }) => {
    return (
        // <div className='md:w-full w-full h-fit rounded-md cursor-pointer' onClick={handleDetail}>
        //     <img src={seririt} alt="" className='rounded-md' />
        //     <div className=' mt-2'>
        //         <h1 className='text-sm font-bold mb-2'>{title}</h1>
        //         <p className='text-sm'>{location}</p>
        //         <p className='flex text-sm gap-1 items-center'>
        //             <AiTwotoneStar />{rating}
        //         </p>
        //         <p >
        //             <span className='text-orange-600 text-sm'>{price}</span> night
        //         </p>
        //     </div>
        // </div>
        <div className=" overflow-hidden shadow-lg md:w-full w-full h-fit rounded-md cursor-pointer" onClick={handleDetail}>
            <img className="w-full" src={seririt} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-sm md:text-md lg:text-lg xl:text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{location}</p>
                <p className="text-gray-700 text-base">{price}</p>
            </div>
            {/* <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div> */}
        </div>
    )
}

export default Card
