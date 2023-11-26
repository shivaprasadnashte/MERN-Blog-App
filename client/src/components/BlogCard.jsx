import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
function BlogCard() {
    const [blog, setBlog] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:5000/blog')
            .then((res) => {
                setBlog(res.data)
                console.log(res.data.length)
            })
            .catch
            ((err) => {
                console.log(err)
            })
    },[])

    const navigate = useNavigate()
    return (
        <>
            {blog[0] ? blog.map((item) => (
                <div className="card w-80 xl:w-96 bg-base-100 shadow-xl" key={item._id}>
                    <figure className="px-10 pt-10">
                        <img src="/images/dd.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">
                            {item.title}
                        </h2>
                        <h3> {item.category}</h3>
                        <h4>{item.author || "shivaprasad"}</h4>
                        <div className=' container1 h-16  overflow-y-auto'>
                            <p>{item.body}</p>
                        </div>
                        <div className="card-actions">
                            <Link to={`/blogpage`} state={item} ><button className="btn btn-primary bg-orange-600 hover:bg-orange-700">Read More</button>
                            </Link>
                        </div>
                    </div>
                </div >)) : <h1>loading</h1>
            }

        </>
    )
}

export default BlogCard