
import React, { useState,useEffect } from 'react';
export const ThemeContext = React.createContext()


const ThemePr = ( {children}) => {

        


         return (
                <ThemeContext.Provider  value={{   }}>
                    {children}
                </ThemeContext.Provider>
            )
            }

    export default ThemePr


