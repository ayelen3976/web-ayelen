import React from 'react';
import './TechCard.scss';


function TechCard({img, name}){
    return(
        <div className='techcard'>
            
            <img src ={img}/>
            <p>{name}</p>
            
        </div>
        
    )
}
export default TechCard;