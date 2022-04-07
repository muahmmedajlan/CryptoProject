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

function WorkSpace() {

    const [selectedCoin, setSelectedCoin] = useState({ name: 'Bitcoin', price: 445, key: 'BTC' })
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const foreCastLabelCreator = () => {
        let date = new Date();
        let timeArray = [];
        for (let i = 0; i < 15; i++) {
            timeArray.push(formatAMPM(date))
            date.setMinutes(date.getMinutes() + 1)
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
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    useEffect(() => {
        foreCastLabelCreator()
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
                data:  [...new Array(15)]
                .map(() => Math.round(Math.random() * 200)).map((i, index) => i),
                borderColor: 'yellow',
                backgroundColor: 'yellow',

            },
        ],
    };

    const data2 = {
        labels: previousPredictionLabelCreator(),

        datasets: [
            {
                label: 'Current Value',
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
                backgroundColor: '#0d9078',
                color: 'white'

            } : {}}
            onClick={() => setSelectedCoin(coin)}

        >
            <h3>{coin.name}</h3>
            <p>{coin.price}</p>
        </div>)
    }

    return (
        <div
            className='workSpace'
        >
            <Navbar />
            <div className='sec_1' >
                <div className='sideBar'

                >
                    <div>
                        {[{ name: 'Bitcoin', price: 445, key: 'BTC' },
                        { name: 'Etherium', price: 445, key: 'ETC' },
                        { name: 'LiteCoin', price: 445, key: 'LTC' },
                        { name: 'Bitcoin1', price: 445, key: 'B1TC' },]
                            .map(coin => <CoinComponent coin={coin} />)}
                    </div>
                </div>

                <div className='graph_container'>
                    <div className='heading_wrpr' >
                        <h2>{selectedCoin.key}</h2>
                        <p>${selectedCoin.price}</p>
                    </div>

                    <div
                        style={{ marginTop: 50 }}
                    >
                        <p>Forcaste 15 minutes</p>
                        <Line
                            options={options}
                            data={data1}
                            style={{ width: 500, height: '50vh', color: 'yellow', }}
                        />
                    </div>

                    <div
                        style={{ marginTop: 50 }}
                    >

                        <p>Previous Prediction</p>
                        <Line
                            options={options}
                            data={data2}
                            style={{ width: 500, height: '50vh', color: 'yellow', }}
                        />

                    </div>
                </div>
                <div style={{ flex: 3 }} ></div>
            </div>
        </div>
    )
}

export default WorkSpace