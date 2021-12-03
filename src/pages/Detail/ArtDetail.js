import React,{useContext,useState,useEffect} from 'react';

import '../Scss/ArtDetail.scss'
import {ThemeContext} from '../../context/ThemePr'
import { useHistory,Link,useParams } from "react-router-dom";

const Artdetail = () => {
    let { TT } = useParams();
    const value = useContext(ThemeContext);
    const [Ditem, setDitem] = useState(value.Item);
    let history = useHistory();
    

if (Ditem ) {
        return (
        <div>
              <div style={{height:"70PX",backgroundColor:'#000'}}></div>

              <div className='con'>
                    <div className='blogeD'>
                        
                        <img src={Ditem.urlToImage} />
                        <h1>{Ditem.title}</h1>
                        <p>{Ditem.description }
                        Crypto art is limited-edition digital art, cryptographically registered with a non-fungible token on a blockchain. One of the major crypto art galleries is SuperRare. Born in April 2018, at the writing time the online gallery features over 7,000 artworks created by more than 200 artists and has visitors from 169 different countries. In this paper, we propose a text mining analysis on the textual metadata of artworks present on SuperRare gallery since its opening. In particular, we use a lexicon-based approach to mine the sentiment expressed by artworks and we run a topic modeling algorithm to cluster the whole gallery portfolio into artistic trends.
                        “Crypto art is one of the few artistic movements of this millennium that speaks the language of its time; it allows new digital expression languages to have a fast, pulsing, tailor-made market on the new generation of collectors. If until some time ago an artist who created digital artworks had very little chance to put them on the market, for the obvious reason of their infinite reproducibility, today thanks to blockchain technology these digital artworks are created in a certified small number of editions and hence acquire an exchangeable value. Crypto artworks remain infinitely reproducible and visible to all, but only the purchasing collector owns what the artist will call the original, the unique token of the work. Obviously, the collector must accept the perspective of owning a digital work and not a physical object to hang on the wall. A concept much more understandable to the Millenials than to the generation of Boomers still linked to the material, weighty palpability of a work of art”.

                        </p>
                        
                            
                    </div>
                    <div className='Ads'>
                        
                            {value.Articles.slice(0, 12).map((i,index) => (
                            <div className='NavCard' key={index} onClick={()=>{setDitem(i)}}>
                            
                            <h3>{i.title}</h3>
                                <p>{i.description }</p>
                            </div>
                        ))}
                       
                    </div>

                    
              </div>
           
            
            
        </div>
    );
    
}else{
    history.push('/') ; 
    window.location.reload(false);
     
    
}
  
    
}

export default Artdetail;
