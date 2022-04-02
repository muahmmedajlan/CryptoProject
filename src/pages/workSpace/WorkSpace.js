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
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        
        datasets: [
            // {
            //     label: 'Dataset 1',
            //     data: labels.map((i, index) => index),
            //     borderColor: 'rgb(255, 99, 132)',
            //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
            // },
            {
                label: 'Predicted Value',
                data: labels.map((i, index) => index + i.length),
                borderColor: 'yellow',
                backgroundColor: 'yellow',

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
    useEffect(() => {

    })
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
                    <p>Forcaste 15 minutes</p>
                    <Line
                        options={options}
                        data={data}
                        style={{ width: 500, height: '50vh',color:'yellow', }}
                    />

                </div>
                <div style={{ flex: 3 }} ></div>
            </div>
        </div>
    )
}

export default WorkSpace