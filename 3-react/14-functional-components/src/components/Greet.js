import React, { useState } from "react";

const Greet = (props) => {

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


export default Greet;
