import React ,{useEffect,useState} from 'react'

import {useParams} from 'react-router-dom'

import axios from 'axios';
import '../Scss/Detail.scss'

function CoineDetail() {
  
    const [Coin, setcoin] = useState([])
    const [coinD, setcoinD] = useState([]);
    const [Desc, setDesc] = useState('');
    const [Mcap, setMcap] = useState('');
 
    var coinName = useParams()
    
    useEffect(() => {
        axios
          .get(
            `https://api.coingecko.com/api/v3/coins/${coinName.id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false`
          )
          .then(res => {
            setcoin(res.data);
            setcoinD(res.data);
            setMcap(res.data.market_data)

            console.log('new',res.data);

           setDesc(res.data.description.en.replace(/<[^>]+>/g, ''))

          })
          .catch(error => console.log(error));
         
          
      }, []);
     
      const Show =({coin,Desc,Mcap})=>{
        console.log(coin.length);
      
        if (coin.length !== 0) {
            return(
             <div>
               <h1 >{coin.id}</h1>
            <section className='TopAria'>
              <div style={{display:'flex'}}> 
                <div className='cards'>
                  <h2>Market Cap</h2>
                  <p>$ {Mcap &&Mcap.market_cap.usd.toLocaleString()}</p>
                  <p>2.12%</p>
                 </div>
                <div className='cards'> 
                <p>{coin.id} Price ({coin &&coin.symbol.toUpperCase()})</p>
                <h2>{}</h2>
                </div>
              </div>
              <div style={{display:'flex'}}> 
                <div className='cards'> </div>
                <div className='cards'> </div>
              </div>
           
            </section>

            <section>
              <h2>{coin && coin.symbol.toUpperCase()} Price Live Data</h2>
              <p>{Desc}</p>
              
            </section>
             </div>
            )
        }else{
          return(
            <div>
          <h2>loading ...</h2>
        </div>
          )
        }
        
        
      }
      
    return (
        
        <div>
        <div style={{height:"70PX",backgroundColor:'#000'}}></div>
        <Show coin={Coin} Desc={Desc} Mcap={Mcap}/>
       
        </div>
    )
}

export default CoineDetail

/*
<h1 >{coin.id}</h1>
            <section className='TopAria'>
              <div style={{display:'flex'}}> 
                <div className='cards'>
                  <h2>Market Cap</h2>
                  <p>$ {Mcap &&Mcap.market_cap.usd.toLocaleString()}</p>
                  <p>2.12%</p>
                 </div>
                <div className='cards'> 
                <p>{coin.id} Price ({coin &&coin.symbol})</p>
                <h2>{}</h2>
                </div>
              </div>
              <div style={{display:'flex'}}> 
                <div className='cards'> </div>
                <div className='cards'> </div>
              </div>
           
            </section>

            <section>
              <h2>{coin && coin.symbol.toUpperCase()} Price Live Data</h2>
              <p>{Desc}</p>
              
            </section>

      */