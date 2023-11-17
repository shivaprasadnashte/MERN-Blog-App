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
            <div className=' flex justify-between  p-4'>
                <Catigori /> 
                <BlogCard />
            </div>
        </>
    )
}

export default Home