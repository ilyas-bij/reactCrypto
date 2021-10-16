import React,{useContext,useState} from 'react';
import {useParams} from 'react-router-dom'

import {ThemeContext} from '../../context/ThemePr'
const Artdetail = () => {

    
    

    const value = useContext(ThemeContext);
    const [Ditem, setDitem] = useState(value.Item);

   
  
    return (
        <div>
              <div style={{height:"70PX",backgroundColor:'#000'}}></div>
           
            <h1>{Ditem.title}</h1>
            
        </div>
    );
}

export default Artdetail;
