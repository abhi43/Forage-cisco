
import React from 'react';
import './Card1.css';

function Card1(props)
{
    return (
        <div classname="Card2">
            <h2> {props.name} : {props.value} </h2>
            <h2> IP address : 127.168.51.2</h2>
            
        </div>
        
    );
}


export default Card1;