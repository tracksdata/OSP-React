// import all react libraries
import React from 'react';
import './App.css';


function Clock(props) { // make a component?

    let zone=props.zone;
   
    return ( // JSX code
       
            <div className="space col-4 col-md-4 col-sm-4">
            <div className="card">
                <div className="card-header">
                    <h6>{props.country} Clock</h6>
                </div>

                <div className="card-body">
                    <span> {new Date().toLocaleTimeString('en-US',{timeZone:zone})}</span>
                  
                </div>
            </div>

            </div>
           


    
    );

}

export default Clock;