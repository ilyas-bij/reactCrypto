import React,{useContext} from 'react';
import {ThemeContext} from '../../context/ThemePr'
import {Link} from 'react-router-dom'

const Coin = ({coin,switech}) => {
  
  const value = useContext(ThemeContext);
  return (
    
    
    <div className='coin-container' >
    <div className='coin-row'   >
    

            <ul className='coin'  >
              
              {  switech === 'spot' ? 
              <li  className='star sticky' id='star'   onClick={()=>value.AddToFav(coin)}> </li>:
              <li  className='star sticky' id='star'  onClick={()=>value.Remove(coin)}></li> 
              }
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