import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import Navbar from '../../components/navbar/Navbar'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import './workspace.css'
import HomeImg from '../../assets/images/home.png'
import DownArrow from '../../assets/images/down_arrow.png'
import axios from 'axios';

function WorkSpace() {


    const [selectedCoin, setSelectedCoin] = useState({ name: 'Bitcoin', price: 445, key: 'BTC' })

    const [forecastData, setForecastData] = useState([])
    const [loading, setLoading] = useState(true)

    const [coins, setCoins] = useState([
        { name: 'Ethereum', price: 445, key: 'ETH' },
        { name: 'Ethereum classic', price: 445, key: 'ETC' },
        { name: 'EOS', price: 445, key: 'EOS' },
        { name: 'Cardano', price: 445, key: 'ADA' },
        { name: 'Dogecoin', price: 445, key: 'DOGE' },
        { name: 'IOTA', price: 445, key: 'MIOTA' },
        { name: 'LiteCoin', price: 445, key: 'LTC' },
        { name: 'Maker', price: 445, key: 'MKR' },
        { name: 'Monero', price: 445, key: 'XMR' },
        { name: 'Stellar', price: 445, key: 'XLM' },
        { name: 'Tron', price: 445, key: 'TRX' },
        { name: 'ZCash', price: 445, key: 'ZEC' },])
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    fontColor: "blue",
                    fontSize: 18
                }
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const getForecastData = async (coinName) => {
        setLoading(true)
        console.log(coinName)
        try {
            let response = await axios.get('http://127.0.0.1:5000/', {
                params: {
                    coin: coinName
                }
            }, {
                'content-type': 'application/json',
                'access-control-allow-origin': '*'
            });

            if (response) {
                // success
                let data = response.data;
                // data = JSON.Parse(data)
                // data.map((d, id) => data[id] = -1 * parseInt(d))
                console.log(data)

                setForecastData(data.split(','))
                // forecastData[0] = forecastData[0].slice(0, 1)
                // forecastData[29] = forecastData[29].slice(0, -1)
            }
            setLoading(false)

        } catch (error) {
            console.error(error)
        }
    }


    const getCoinData = async () => {
        try {
            let response = await axios.get('https://api.coingecko.com/api/v3/coins/zcash', {

            });

            if (response) {
                // success
                const json = response.data;
                // json.forEach(coin => {
                //     coins.forEach(coin2 => {
                //         if (coin.symbol == coin2.key.toLowerCase()) {
                //             console.log(coin)
                //         }
                //     })

                // })
            }
        } catch (ex) {
            // response = null;

        }

    }

    const foreCastLabelCreator = () => {
        let now = new Date();
        var date = new Date(now.setDate(now.getDate() - 28));
        let timeArray = [];
        for (let i = 0; i < 30; i++) {
            timeArray.push(formatAMPM(date))
            date.setDate(date.getDate() + 1)
        }

        // console.log(timeArray)
        return timeArray
    }

    const previousPredictionLabelCreator = () => {
        let date = new Date();
        let timeArray = [];
        for (let i = 0; i < 15; i++) {
            timeArray.push(formatAMPM(date))
            date.setMinutes(date.getMinutes() - 1)
        }

        // console.log(timeArray)
        return timeArray.reverse();
    }


    function formatAMPM(date) {

        return date.toLocaleDateString();
    }
    useEffect(() => {
        foreCastLabelCreator()
        getForecastData('ethereum')
    }, [])



    const data1 = {
        labels: foreCastLabelCreator(),

        datasets: [
            // {
            //     label: 'Dataset 1',
            //     data: labels.map((i, index) => index),
            //     borderColor: 'rgb(255, 99, 132)',
            //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
            // },
            {
                label: 'Predicted Value',
                data: forecastData,
                borderColor: 'yellow',
                backgroundColor: 'yellow',


            },
        ],
    };

    const data2 = {
        labels: previousPredictionLabelCreator(),

        datasets: [
            {
                label: 'Actual Value',
                data: [...new Array(15)]
                    .map(() => Math.round(Math.random() * 200)).map((i, index) => i),
                borderColor: 'aqua',
                backgroundColor: 'aqua',
            },
            {
                label: 'Predicted Value',
                data: [...new Array(15)]
                    .map(() => Math.round(Math.random() * 200)).map((i, index) => i),
                borderColor: 'ghostwhite',
                backgroundColor: 'ghostwhite',

            },
        ],
    };
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const CoinComponent = ({ coin }) => {
        return (<div className='coinComp'
            style={selectedCoin.name == coin.name ? {
                // backgroundColor: '#0d9078',
                color: 'white',
                border: `1px solid #0d9078`,
                transform: `scale(1.1)`,

            } : {}}
            onClick={() => { setSelectedCoin(coin); getForecastData(coin.name.toLowerCase()) }}

        >
            <h3>{coin.name}</h3>
            <p>{coin.price}</p>
        </div>)
    }
    useEffect(() => {
        getCoinData()
    }, [])

    if (loading) return <div><h1>Loading</h1></div>

    return (
        <div
            className='workSpace'
            style={{
                background: `url(${HomeImg})`,
                backgroundSize: 'cover'
            }}
        >
            <Navbar />
            <div className='sec_1'

            >
                <div className='sideBar'

                >
                    <div className='coinWrpr' >
                        {coins.map(coin => <CoinComponent coin={coin} />)}


                    </div>
                    <div className='overlay' >
                        <img src={DownArrow} style={{ width: 25, height: 25, marginTop: 10 }} />

                    </div>
                </div>

                <div className='graph_container'>
                    <div
                        className='graph_wrpr'
                        style={{ backdropFilter: `blur(100px)` }}
                    >
                        <div className='heading_wrpr' >
                            <h2>{selectedCoin.key}</h2>
                            <p>${selectedCoin.price}</p>
                        </div>

                        <div
                            style={{ paddingTop: 50, backdropFilter: `blur(100px)` }}
                        >
                            <p>Tomorrow's price will be {forecastData[29]}</p>
                            <Line
                                options={options}
                                data={data1}
                                style={{ width: 500, height: '50vh', color: 'yellow', }}

                            />
                        </div>
                    </div>

                    {/* <div
                        style={{ marginTop: 50 }}
                    >

                        <p>Previous Prediction</p>
                        <Line
                            options={options}
                            data={data2}
                            style={{ width: 500, height: '70vh', color: 'yellow', }}
                        />

                    </div> */}
                </div>
                <div style={{ flex: 3 }} ></div>
            </div>
        </div>
    )
}

export default WorkSpace