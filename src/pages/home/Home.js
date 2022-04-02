import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import './home.css'
function Home() {
    const navigate = useNavigate()
    return (
        <div className='home' >
            <Navbar />
            <div className='sec_1' >
                <h1>
                    Be Sure,
                    <br />
                    Invest Safely
                </h1>
            </div>
            <div className='sec_2'>
                <div
                    onClick={() => navigate('/work-space')}
                >
                    Explore
                </div>
            </div>
        </div>
    )
}

export default Home