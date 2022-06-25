import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import HomeImg from '../../assets/images/home.jpg'
import './home.css'
function Home() {
    const navigate = useNavigate()
    return (
        <div className='home'
            style={{
                background: `url(${HomeImg})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%'
            }}
        >
            <Navbar />
            <div className='sec_1' >
                <div>
                    <h1>
                        Use it with ease
                    </h1>
                    <div className='line' />
                    <p>A cryptocurrency forecasting system that predicts the next day
                        <br /> value of the world's 12 popular cryptocurrencies. It makes use of
                        <br /> machine learning algorithms that are quite accurate.
                        <br /> Take a look and invest your money safely ...</p>
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