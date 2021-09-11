
import React, { useState,useEffect } from 'react';
import axios from 'axios';

export const ThemeContext = React.createContext();



const ThemePr = ( {children}) => {

    const [coins, setCoins] = useState([]);
    const [Fav, setFav] = useState([]);
    
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
                  //  console.log(res.data);
                    })
                    .catch(error => console.log(error));
    }, []);


         return (
                <ThemeContext.Provider  value={{ 
                    COINE:coins ,Fav,
                    AddToFav,Remove
                     }}>
                    {children}
                </ThemeContext.Provider>
            )
            }

    export default ThemePr


