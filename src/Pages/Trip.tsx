import React from 'react'
import Navbar from '../components/Navbar'

const Trip = () => {
    return (
        <>
            <Navbar />
            <div className='px-10 py-5 mb-10  ' >
                <h1 className='font-bold text-2xl mb-10'>Trip</h1>
                {/* history payment */}
                <div className='flex flex-col gap-2 border-t-2 mb-5 py-5 '>
                    <h1 className='textmd font-semibold'>Vila Premium A3</h1>
                    <div className='w-full md:w-96  grid grid-cols-2 gap-5'>
                        <div className='border-2 rounded-md text-center'>12/3/2023</div>
                        <div className='border-2 rounded-md text-center'>12/3/2023</div>
                    </div>
                    <p><span className='text-orange-600'>$20</span> x 2</p>
                    <p className='font-semibold'>Total price : <span className='text-orange-600'>$40</span></p>
                </div>
                <div className='flex flex-col gap-2 border-t-2 mb-5 py-5 '>
                    <h1 className='textmd font-semibold'>Vila Premium A3</h1>
                    <div className='w-full md:w-96  grid grid-cols-2 gap-5'>
                        <div className='border-2 rounded-md text-center'>12/3/2023</div>
                        <div className='border-2 rounded-md text-center'>12/3/2023</div>
                    </div>
                    <p><span className='text-orange-600'>$20</span> x 2</p>
                    <p className='font-semibold'>Total price : <span className='text-orange-600'>$40</span></p>
                </div>
                <div className='flex flex-col gap-2 border-t-2 mb-5 py-5 '>
                    <h1 className='textmd font-semibold'>Vila Premium A3</h1>
                    <div className='w-full md:w-96  grid grid-cols-2 gap-5'>
                        <div className='border-2 rounded-md text-center'>12/3/2023</div>
                        <div className='border-2 rounded-md text-center'>12/3/2023</div>
                    </div>
                    <p><span className='text-orange-600'>$20</span> x 2</p>
                    <p className='font-semibold'>Total price : <span className='text-orange-600'>$40</span></p>
                </div>
                <div className='flex flex-col gap-2 border-t-2 mb-5 py-5 '>
                    <h1 className='textmd font-semibold'>Vila Premium A3</h1>
                    <div className='w-full md:w-96  grid grid-cols-2 gap-5'>
                        <div className='border-2 rounded-md text-center'>12/3/2023</div>
                        <div className='border-2 rounded-md text-center'>12/3/2023</div>
                    </div>
                    <p><span className='text-orange-600'>$20</span> x 2</p>
                    <p className='font-semibold'>Total price : <span className='text-orange-600'>$40</span></p>
                </div>
                
            </div>
        </>
    )
}

export default Trip
