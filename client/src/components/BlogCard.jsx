import React from 'react'
import { useNavigate } from 'react-router-dom'
function BlogCard() {
    const navigate = useNavigate()
    return (
        <>
            <div className="card w-80 xl:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="/images/dd.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">TITLE</h2>
                    <h3> category</h3>
                    <h4>Auther</h4>
                   <div className=' container1 h-16  overflow-y-auto'>
                   <p>If lo a dog chews shoes whose shoes lo does he choose? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem architecto velit, odio molestiae nulla repudiandae voluptatibus distinctio ex nobis rem laboriosam in consectetur repellat, iste corporis, eveniet enim reiciendis. Saepe.</p>
                    </div>  
                    <div className="card-actions">
                        <button className="btn btn-primary bg-orange-600 hover:bg-orange-700" onClick={()=>{
                            navigate('/blogpage')
                        }}>Read More</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlogCard