import React ,{useEffect,useState} from 'react'

import {useParams} from 'react-router-dom'

import axios from 'axios';

function CoineDetail() {
  
    const [coin, setcoin] = useState([])

    var coinName = useParams()
    
    useEffect(() => {
        axios
          .get(
            `https://api.coingecko.com/api/v3/coins/${coinName.id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false`
          )
          .then(res => {
            setcoin(res.data);
            console.log(res.data);
          })
          .catch(error => console.log(error));
      }, []);


    return (
        
        <div>
        <div style={{height:"70PX",backgroundColor:'#000'}}></div>
            <h1 >{coin.id}</h1>
        </div>
    )
}

export default CoineDetail
