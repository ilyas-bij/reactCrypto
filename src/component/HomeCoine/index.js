import React,{useContext} from 'react';
import {ThemeContext} from '../../context/ThemePr';
import Coin from '../Coine';
import {Link} from 'react-router-dom'
import '../Scss/Coine.scss'


const Index = () => {
    const value = useContext(ThemeContext);

    console.log('home coine',value.COINE);
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
       
  {value.COINE.map(coin => {
    return (
      
        
     
        <div  key={coin.id} onClick={()=>document.querySelector('header').className="header"} > 
              <Link to={`/Detail/${coin.id}`}  className='link'>
                 <Coin  coin={coin}/>
              </Link>
          </div>
      
    );
  })}

        </section>
    );
}

export default Index;
