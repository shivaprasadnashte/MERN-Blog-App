import React from 'react'
import Navbar from './Navbar'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import Footer from './Footer';

function BlogPage() {
  return (
    <>
      <Navbar />
      <div className=' flex flex-col gap-5 px-2 sm:px-10 py-5 min-h-screen'>
        <img src="/images/hero.jpg" alt="" className=' w-full h-96' />
        <div>
          <div className=' w-full flex  justify-end gap-3 sm:text-3xl'>
            <div className=' border-2 border-black sm:rounded-xl p-1'>
              <MdEdit className=' text-blue-500' />
            </div>

            <div className=' border-2 border-black sm:rounded-xl p-1'>
              <MdDelete className=' text-red-500' />
            </div>
          </div>

        </div>
        <div className=' px-5'>
          <div className=' w-full flex justify-center mb-3'>
            <h1 className=' sm:text-4xl text-2xl font-bold'>Blog on Sex</h1>
          </div>
          <div className=' w-full flex flex-col sm:flex-row mb-3 justify-between sm:py-2 '>
            <p><span className=' font-bold mr-1'>Author : </span>shivaprasad</p>
            {/* <p><span className=' font-bold mr-1'>Catigory :</span>computer science</p> */}
            <p>Sun Augest 28 2023 </p>
          </div>
          <div>
            <p>
              Hello...

              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quos laboriosam atque doloribus. Quas illo iure debitis, minima iusto enim ducimus
              quia! Optio, pariatur natus dicta reiciendis et facere excepturi. Officia?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dolores sed cum
              voluptate minima a unde, enim deleniti optio, magni ex eum! Nam magni veniam quam fuga nulla,
              aliquid numquam.
            </p>
          </div>
        </div>
        <div>
          <div className=' flex w-full'>
            <FaUserAlt className=' mr-2 text-4xl' />
            <div className=' border-2 w-full border-gray-200'>
              <textarea 
               className=' p-2  w-full focus:outline-none h-20'
               placeholder='What do you think ?....'></textarea>
            </div>
            <button className=' ml-2 bg-blue-700 px-4 h-10 text-white'>Post</button>
          </div>
        </div>


        <div className=' flex flex-col bg-gray-200 w-full py-1 gap-1 px-3'>
          <div className=' flex justify-between '>
            <div className=' flex gap-2'>
              <span className=' font-bold'>siddhi</span>
              <p className=' text-gray-400'>Tue May 27 2023</p>
            </div>
            <MdDelete className=' text-xl mt-2' />
          </div>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis maiores ratione plac</p>
          </div>
        </div>
       

        <div className=' flex flex-col bg-gray-200 w-full py-1 gap-1 px-3'>
          <div className=' flex justify-between '>
            <div className=' flex gap-2'>
              <span className=' font-bold'>siddhi</span>
              <p className=' text-gray-400'>Tue May 27 2023</p>
            </div>
            <MdDelete className=' text-xl mt-2' />
          </div>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis maiores ratione plac</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogPage