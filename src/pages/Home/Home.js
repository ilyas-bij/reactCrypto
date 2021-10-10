import React ,{useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import Coine from '../../component/HomeCoine/HomeCoine';
import Swiper from '../../component/CardItems/Item';

import '../Scss/Home.scss';






function index() {
   
    return (
        
        <div>
            <section className='banner' id='banner'>
                <div className='content'>
                    <h1>CryptoNet</h1>
                    <p>Trade with confidence on the world’s fastest and most secure crypto exchange </p>
                    <Link to='/' className='btn1'>sing up</Link>
                </div>
            </section>
            <section className='swip' id='swip'>
                <Swiper/>
            </section>
             <Coine/>
        </div>

   
    )
}

export default index