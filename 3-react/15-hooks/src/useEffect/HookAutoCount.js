import React, { useState, useEffect } from 'react';

const HookAutoCount = () => {
    const [count, setCount] = useState(0)

    const tick = () => {
      //  console.log("HookAutoCount::tick");
        setCount(preCount => preCount + 1)
    }

    useEffect(() => {
       // console.log("HookAutoCount::useEffect : count " + count);
        const interval = setInterval(tick, 1000);
        return()=>{
            clearInterval(interval);
        }
    })

    return (
        <div className="card">
            <h1>
                Count: {count} <br />

            </h1>
        </div>
    );
};

export default HookAutoCount;