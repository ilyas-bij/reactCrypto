import React,{useEffect,useState,useContext} from 'react'
import {Link,Switch,useParams} from 'react-router-dom'
import axios from 'axios';

import {ThemeContext} from '../../context/ThemePr'

import '../Scss/Market.scss'
import Coine from '../../component/MarketCoin/MarketCoins';

import Swiper from '../../component/CardItems/SwiperItem';



function Index() {
    var switechCat = useParams()
    const [search, setSearch] = useState('');
   
    const value = useContext(ThemeContext);


    const handleChange = e => {
        setSearch(e.target.value);
      };
      const filteredCoins = value.COINE.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );
   

      console.log("value.FAV",value.Fav);
      

    
    return (
        <div>
             <div style={{height:"70PX",backgroundColor:'#000'}}></div>

             <section className='swip' id='swip'>
                <Swiper/>
            </section>
            
            
                <div className='bar'>
                      <form>
                           <input className='coin-input' type='text'   onChange={handleChange} placeholder='Search' />
                     </form>
                     <div className="btns">
                            <Link to={`/Market/spot`}>
                                    <span  className='btnSP'>spot</span>
                            </Link>
                            <Link to={`/Market/Fav`}>
                                <span  className='btnSP'>fav 
                                <i style={{marginLeft:'10PX'}}>{value.Fav.length}</i>
                                </span>
                            </Link>
                     </div>
                   
                </div>
                 <Coine switechC={switechCat.cat} filteredCoins={filteredCoins} fav={value.Fav}/>
                
                
        </div>
    )
}

export default Index
