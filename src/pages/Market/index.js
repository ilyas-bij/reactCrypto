import React,{useEffect,useState} from 'react'
import {Link,Switch,useParams} from 'react-router-dom'
import axios from 'axios';

import '../Scss/Market.scss'
import Coine from '../../component/MarketCoin';




function index() {
   

  
      
   
    
    return (
        <div>
             <div style={{height:"70PX",backgroundColor:'#000'}}></div>
            
            
                <div className='bar'>
                      <form>
                           <input className='coin-input' type='text' placeholder='Search' />
                     </form>
                     <div className="btns">
                            <Link to={`/Market/spot`}>
                                    <span  className='btnSP'>spot</span>
                            </Link>
                            <Link to={`/Market/Fav`}>
                                <span  className='btnSP'>fav </span>
                            </Link>
                     </div>
                   
                </div>
                 <Coine/>
                
                
        </div>
    )
}

export default index
