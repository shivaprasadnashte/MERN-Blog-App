import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Catigori from './Catigori'
import BlogCard from './BlogCard'
function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <div className=' flex lg:flex-row flex-col justify-between  mt-2 sm:p-10'>
                <Catigori /> 
                <div className=' gap-10  3xl:grid-cols-4 mt-4 lg:mt-0 grid place-items-center sm:grid-cols-2 lg:gap- xl:gap-20'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                </div>
            </div>
        </>
    )
}

export default Home