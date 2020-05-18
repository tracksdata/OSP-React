import React, { useState } from "react";

export const  Greet = (props) => {

    let [count, sum] = useState(0)

    function sayHi() {
        return "Hello!";
    }
    return (
        <div>
            <h1>Greet</h1>
            <hr />
            {count}

            <p></p>

            <button onClick={() => {
               
                sum(count + 1)

            }}>Count</button>

        </div>
    )
};

export const UseAll=()=>{
    return (
        <div>
            <h1>Use All</h1>
        </div>
    )
}
