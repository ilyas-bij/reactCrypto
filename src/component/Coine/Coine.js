import React from 'react';
import {Link} from 'react-router-dom'

const Coin = ({coin}) => {
  
  
  return (
    
    
    <div className='coin-container' >
    <div className='coin-row'   >
  
            <ul className='coin'  >
            <Link to={`/Detail/${coin.id}`} style={{textDecoration:'none',color:'#000'}}  >
                          <li className='coine-item'>
                              <img src={coin.image} alt='crypto' />
                              <h1 className='coine-name'>{coin.name}</h1> 
                           </li>
                    </Link>
                   
                    <Link to={`/Detail/${coin.id}`} style={{textDecoration:'none',color:'#000'}}  >
                       <li className='coin-symbol'>{coin.symbol}</li>
                    </Link>
              
                    <Link to={`/Detail/${coin.id}`} style={{textDecoration:'none',color:'#000'}}  >
                    <li className='coin-price'>${coin.current_price.toLocaleString()}</li>
                    </Link>
              
                    <Link to={`/Detail/${coin.id}`} style={{textDecoration:'none',color:'#000'}}  >
                    <li className='coin-volume'>${coin.total_volume.toLocaleString()}</li>
                    </Link>
              
                    <Link to={`/Detail/${coin.id}`} style={{textDecoration:'none',color:'#000'}}  >
                        {coin.price_change_percentage_24h < 0 ? (
                            <li className='coin-percent red'>{coin.price_change_percentage_24h.toFixed(2)}%</li>
                        ) : (
                            <li className='coin-percent green'>{coin.price_change_percentage_24h.toFixed(2)}%</li>
                        )} 
                   </Link>
                   <Link to={`/Detail/${coin.id}`} style={{textDecoration:'none',color:'#000'}}  >
                        <li className='coin-marketcap'>
                            Mkt Cap: ${coin.market_cap.toLocaleString()}
                        </li>
                  </Link>
                </ul>
    </div>
</div>
    
  );
};

export default Coin;