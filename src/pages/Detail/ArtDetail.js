import React,{useContext,useState} from 'react';

import '../Scss/ArtDetail.scss'
import {ThemeContext} from '../../context/ThemePr'
import { useHistory } from "react-router-dom";

const Artdetail = () => {
    const value = useContext(ThemeContext);
    const [Ditem, setDitem] = useState(value.Item);
    let history = useHistory();

    
if (Ditem ) {
        return (
        <div>
              <div style={{height:"70PX",backgroundColor:'#000'}}></div>

              <div className='con'>
                    <div className='blogeD'>
                        <h1>{Ditem.title}</h1>
                            
                    </div>
                    <div className='Ads'>
                        <h2>test</h2>

                    </div>
              </div>
           
            
            
        </div>
    );
    
}else{
     history.push('/');
     window.location.reload(false);
    
}
  
    
}

export default Artdetail;
