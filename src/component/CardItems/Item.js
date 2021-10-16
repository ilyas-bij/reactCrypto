import React,{useContext,} from 'react';
import {useHistory} from 'react-router-dom'

import '../Scss/Carditem.scss'
import {Link} from 'react-router-dom'

import {ThemeContext} from '../../context/ThemePr'
const Item = ({item}) => {

    const value = useContext(ThemeContext);
    //console.log(item);
   
    var x = parseInt(item.title, 10)

    return (
        <div class="wrapper">
            <div class="card"><img src={item.urlToImage} />
                <div class="info">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    
                    <Link to={`/ArDetail/${'item'}`} onClick={()=>{value.AddItem(item)}} style={{textDecoration:'none',color:'#000'}}  >
                    <button> Read More</button>
                    </Link>
                    
                </div>
            </div>
            
            
        </div>
    );
}

export default Item;
