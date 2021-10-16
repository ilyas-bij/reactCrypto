import React from 'react';
import '../Scss/Carditem.scss'
const Item = ({item}) => {
    console.log(item);
    return (
        <div class="wrapper">
            <div class="card"><img src={item.urlToImage} />
                <div class="info">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <button>Read More</button>
                </div>
            </div>
            
            
        </div>
    );
}

export default Item;
