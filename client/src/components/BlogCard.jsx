import React from 'react'

function BlogCard() {
    return (
   <>
            <div>
                <div className=' bg-yellow-500  w-full'>
                    <img src="/public/images/dd.jpg" alt="" className=' w-64' />
                    <div className=' p-3 w-64 flex flex-col items-center justify-center'>
                        <p>catigories</p>
                        <p className=' text-xl font-bold'>Blog Title</p>
                      
                        <div className=' flex justify-between'>
                            <p className=' text-xs'>Author</p>
                        </div>
                        <div >
                        <p className=' text-sm text-left overflow-auto'>Lorem lo ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatem.</p>
                        </div>

                    </div>
                </div>
                </div >

            </>
            )
}

            export default BlogCard