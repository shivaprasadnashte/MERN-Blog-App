import React from 'react'
import { useNavigate } from 'react-router-dom'
import { removeToken } from '../session'

function Navbar() {
    const navigate = useNavigate()
    return (
        <>
            <div className=' shadow-xl w-full flex justify-center'>

                <div className=' flex gap-3 sm:gap-20 p-3 '>
                    <p onClick={() => {
                        navigate('/home')
                    }} className=' hover:text-orange-400' >HOME</p>
                    <p onClick={() => {
                        navigate('/about')
                    }}
                    className=' hover:text-orange-400'>
                        ABOUT
                    </p>
                    <p onClick={() => {
                        navigate('/contact')
                    }}
                    className=' hover:text-orange-400'>
                        CONTACT
                    </p>
                    <p onClick={() => {
                        removeToken()
                        navigate('/')
                    }}
                    className=' hover:text-orange-400'>
                        LOGOUT
                    </p>
                </div>
            </div>

        </>
    )
}

export default Navbar