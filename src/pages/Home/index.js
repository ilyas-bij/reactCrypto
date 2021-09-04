import React ,{useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

import '../Scss/Home.scss';






function index() {
   
    return (
        
        
        <section className='banner' id='banner'>

            <div className='content'>
                <h1>CryptoNet</h1>
                <p>Trade with confidence on the world’s fastest and most secure crypto exchange </p>
                <Link to='/' className='btn1'>sing up</Link>
            </div>

            </section>


   
    )
}

export default index