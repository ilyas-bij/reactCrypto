import React ,{useEffect,useState} from 'react'

import {useParams} from 'react-router-dom'

import axios from 'axios';
import '../Scss/Detail.scss'

function CoineDetail() {
  
    const [Coin, setcoin] = useState([])
    const [coinD, setcoinD] = useState([]);
    const [Desc, setDesc] = useState('');
    const [Mcap, setMcap] = useState('');
    const [CoinP, setCoinP] = useState([]);
 
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
            setCoinP(res.data.tickers.find(i=> i.target === 'USD'?i:null))
         //  console.log('new',res.data);

           setDesc(res.data.description.en.replace(/<[^>]+>/g, ''))

          })
          .catch(error => console.log(error));
         
          
      }, []);

      //var CVP = CoinP.find(i=> i.target === 'USD'?i:null)
     
     
      const Show =({coin,Desc,Mcap,CVP})=>{
       
        const [per, setper] = useState(Mcap.market_cap_change_percentage_24h);
     
        if (coin.length !== 0) {
            return(
             <div>
               
            <section className='TopAria'>
              <div className='TopCard'> 
              <div className='cards'>
                <h2>Volume 24h</h2>
                  <p>$ {Mcap &&Mcap.total_volume.usd.toLocaleString()}</p>
                  <ul>
                  {per && per < 0 ? (
                            <li className='coin-percent red'>{per && per.toFixed(2)}%</li>
                        ) : (
                            <li className='coin-percent green'>{per && per.toFixed(2)}%</li>
                        )} 
                  </ul>
                 </div>
                <div className='cards'>
                  <h2>Market Cap</h2>
                  <p>$ {Mcap &&Mcap.market_cap.usd.toLocaleString()}</p>
                  <ul>
                  {per && per < 0 ? (
                            <li className='coin-percent red'>{per && per.toFixed(2)}%</li>
                        ) : (
                            <li className='coin-percent green'>{per && per.toFixed(2)}%</li>
                        )} 
                  </ul>
                 </div>

             
              </div>
              <div className='botumCard'> 

              <div className='cards'> 
                <p style={{fontSize:'19px'}}>{coin.id} Price ({coin &&coin.symbol.toUpperCase()}) </p>
                <h2 >${Mcap.current_price && Mcap.current_price.usd.toLocaleString()}</h2>
                <div>
                   <p style={{fontSize:'19px'}}>Low:$ <span>{Mcap.low_24h&& Mcap.low_24h.usd.toLocaleString()}</span></p>
                   
                    <p style={{fontSize:'19px'}}>High:$ <span>{Mcap.high_24h && Mcap.high_24h.usd.toLocaleString()}</span></p>
                    
                </div>
                </div>
               
                <div className='cards' style={{display:'none'}}> </div>
              </div>
           
            </section>




                <section className='chart'>

                </section>








            <section className='coinDesc'>
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
        <Show coin={Coin} Desc={Desc} Mcap={Mcap} CVP={CoinP}/>
       
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