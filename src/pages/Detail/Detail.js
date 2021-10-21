import React ,{useEffect,useState} from 'react'

import {useParams} from 'react-router-dom'

import axios from 'axios';
import '../Scss/Detail.scss'

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
            <section className='TopAria'>
              <div style={{display:'flex'}}> 
                <div className='cards'>
                  <h2>marcet cap</h2>
                  <p>123.1203$</p>
                  <p>2.12%</p>
                 </div>
                <div className='cards'> </div>
              </div>
              <div style={{display:'flex'}}> 
                <div className='cards'> </div>
                <div className='cards'> </div>
              </div>
           
            </section>

            <section>
              <h2>{coin.symbol} Price Live Data</h2>
              
              
            </section>
        </div>
    )
}

export default CoineDetail
