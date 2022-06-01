import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import HomeImg from '../../assets/images/home.png'
import './home.css'
function Home() {
    const navigate = useNavigate()
    return (
        <div className='home'
            style={{
                background: `url(${HomeImg})`,
                backgroundSize: 'cover'
            }}
        >
            <Navbar />
            <div className='sec_1' >
                <div>
                    <h1>
                        Use it with ease
                    </h1>
                    <div className='line' />
                    <p>;lakdjflk; ldjf l;jdf  ldsjkf la;jd a;l j</p>
                    <div
                        className='btn'
                        onClick={() => navigate('/work-space')}
                    >
                        Explore
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home