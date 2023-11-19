import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

function CreatBlog() {
    return (
        <>
            <Navbar />
            <Hero />
            <div className=' flex justify-center mb-10 flex-col' >

                <div className=' flex flex-col p-2 sm:p-10 gap-5'>
                    <div className=' flex flex-col  sm:flex-row gap-10 items-center'>
                        <div className=' w-full border-b-2 border-gray-400'>
                            <input type="text" placeholder='Title' className=' w-full focus:outline-none p-1  font-bold  text-xl' />
                        </div>
                        <div className=' w-full border-b-2 border-gray-400'>
                            <input type="text" placeholder='Category' className=' w-full focus:outline-none p-1  font-bold  text-xl' />

                        </div>
                    </div>
                    <div className=' border-2 border-gray-400'>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Tell your story...' className=' focus:outline-none p-2 w-full'></textarea>
                    </div>
                </div>
                <div className=' w-full text-center'>
                    <button className=' bg-blue-600 text-white  w-24 py-1 px-2'>PUBLISH</button>
                </div>
            </div>



        </>
    )
}

export default CreatBlog