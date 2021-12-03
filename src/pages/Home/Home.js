import React from 'react'
import {Link} from 'react-router-dom'
import Coine from '../../component/HomeCoine/HomeCoine';
import Swiper from '../../component/CardItems/SwiperItem';

import '../Scss/Home.scss';



function Index() {


   
    return (
        
        <div>
            <section className='banner' id='banner'>
                <div className='content'>
                    <h1>CryptoNet</h1>
                    <p>Trade with confidence on the world’s fastest and most secure crypto exchange </p>
                    <Link to='/' className='btn1'>Learn More</Link>
                </div>
            </section>
            <section className='swip' id='swip'>
                <Swiper/>
            </section>
             <Coine/>
        </div>

   
    )
}

export default Index