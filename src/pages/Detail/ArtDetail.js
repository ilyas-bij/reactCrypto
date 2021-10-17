import React,{useContext,useState} from 'react';
import {useParams} from 'react-router-dom'
import '../Scss/ArtDetail.scss'
import {ThemeContext} from '../../context/ThemePr'
const Artdetail = () => {

    
    

    const value = useContext(ThemeContext);
    const [Ditem, setDitem] = useState(value.Item);

   
  
    return (
        <div>
              <div style={{height:"70PX",backgroundColor:'#000'}}></div>

              <div className='con'>
                    <div className='blogeD'>
                        <h1>{value.Item.title}</h1>
                            
                    </div>
                    <div className='Ads'>
                        <h2>test</h2>

                    </div>
              </div>
           
            
            
        </div>
    );
}

export default Artdetail;
