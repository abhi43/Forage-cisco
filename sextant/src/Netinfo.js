// Component for displaying network information


import React from 'react';
import Card1 from './Card1';
import './Netinfo.css'


function Netinfo(props) {
    return (
        <div classname="netinfo ">
            <h2> Dashboard for displaying IP address and latency metrics</h2>
            <div className="card">
                <h2> {props.name} : {props.value} </h2>
            </div>
        </div>
    );
}


export default Netinfo;