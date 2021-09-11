import React from 'react';


const Coin = ({coin}) => {
  
  
  return (
    
    
    <div className='coin-container' >
    <div className='coin-row'   >
    

            <ul className='coin'  >
              <li  className='star sticky' id='star'  > </li>
                   <li className='coine-item'>
                      <img src={coin.image} alt='crypto' />
                        <h1 className='coine-name'>{coin.name}</h1>
                    
                   </li>
                   

                      <li className='coin-symbol'>{coin.symbol}</li>
              
                        <li className='coin-price'>${coin.current_price.toLocaleString()}</li>
                        <li className='coin-volume'>${coin.total_volume.toLocaleString()}</li>

                        {coin.price_change_percentage_24h < 0 ? (
                            <li className='coin-percent red'>{coin.price_change_percentage_24h.toFixed(2)}%</li>
                        ) : (
                            <li className='coin-percent green'>{coin.price_change_percentage_24h.toFixed(2)}%</li>
                        )}

                        <li className='coin-marketcap'>
                            Mkt Cap: ${coin.market_cap.toLocaleString()}
                        </li>
                </ul>
    </div>
</div>
    
  );
};

export default Coin;