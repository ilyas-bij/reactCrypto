import React,{useContext} from 'react';

import Coin from '../CoineMarket/CoineMarket';
import {Link} from 'react-router-dom'
import '../Scss/Coine.scss'



const Show =({cat,filteredCoins,fav}) => { 
          
        switch (cat) {
            case 'spot':
                 return(filteredCoins.map((coin,i) =><div key={i}><Coin coin={coin} switech={cat}/></div> ) )
             case 'Fav':
                 return(fav.map((coin,i) =><div key={i}><Coin coin={coin} switech={cat}/></div> ) )}

            }

const MarketCoins = ({switechC,filteredCoins,fav}) => {
    

     
  




    return (
        <section>
        

        <div className='coin-bar-container' >
                <div className='coin-rowone '>
                        <ul className ='coin-bar'>
                      
                                <li  className ='coin-bar-name'> name</li>
                                <li className ='coin-bar-symbol'>symbol</li>
                                <li  className ='coin-bar-price' >price</li>
                                <li className ='coin-bar-volume'>volume</li>
                                <li className ='coin-bar-Change'>Change</li>
                                <li className ='coin-bar-marketcap' >marketcap </li>
                    </ul>
          </div>
  </div>
       
      <Show cat={switechC} filteredCoins={filteredCoins} fav={fav}/>

        </section>
    );
}

export default MarketCoins;
