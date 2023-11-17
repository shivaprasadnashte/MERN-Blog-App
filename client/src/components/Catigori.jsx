import React from 'react'

function Catigori() {
    return (
        <>
            <div className='w-1/4 flex flex-col gap-5'>
                <button className=' bg-blue-500 text-sm text-white py-2 px-3 w-full'>
                    CREATE BLOG
                </button>
                <div>
                    <p className=' border-2 border-gray-200 p-3'>All catigories</p>
                    <p className=' border-2 border-gray-200 p-3'>Technical</p>
                    <p className=' border-2 border-gray-200 p-3'>Music</p>
                    <p className=' border-2 border-gray-200 p-3'>History</p>
                    <p className=' border-2 border-gray-200 p-3'>Coding</p>
                    <p className=' border-2 border-gray-200 p-3'>Web Devlopment</p>
                    <p className=' border-2 border-gray-200 p-3'>Electrical Engineering</p>
                    <p className=' border-2 border-gray-200 p-3'>Space Scienc</p>
                    <p className=' border-2 border-gray-200 p-3'>Treding</p>
                </div>
            </div>

        </>
    )
}

export default Catigori