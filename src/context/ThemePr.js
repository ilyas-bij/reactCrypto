
import React, { useState,useEffect } from 'react';
import axios from 'axios';




const ThemePr = ( {children}) => {

    const [coins, setCoins] = useState([]);
    const [Fav, setFav] = useState([]);
    const [articles, setarticles] = useState([]);
    
    const AddToFav = params => {
      
        let filteredPerson = Fav.filter(item => item.id !== params.id);
          setFav([...filteredPerson, params])
        
      }
      const Remove = params => {
        setFav(Fav.filter(item => item.id !== params.id))
    }



         useEffect(() => {
                axios
                    .get(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
                    )
                    .then(res => {
                    setCoins(res.data);
                     //console.log(res.data);
                    })
                    .catch(error => console.log(error));

                    axios
                    .get(
                    'https://newsapi.org/v2/everything?q=crypto&from=2021-09-15&sortBy=publishedAt&apiKey=f59984ac386345af9070eff868983df9&page=5'
                    )
                    .then(res => {
                    var data = res.data.articles;

                    setarticles( data.filter(i=>{  if (i.urlToImage) {
                       return i;
                    } }))
                    
                    })
                    .catch(error => console.log(error));
                            
    }, []);
   
   

         return (
                <ThemeContext.Provider  value={{ 
                    COINE:coins ,Fav,Articles:articles,
                    AddToFav,Remove
                     }}>
                    {children}
                </ThemeContext.Provider>
            )
            }

    export default ThemePr


    export const ThemeContext = React.createContext();
