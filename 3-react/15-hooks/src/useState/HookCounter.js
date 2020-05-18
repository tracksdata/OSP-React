import React, { useState } from 'react';

const HookCounter = () => {
    let [count, setCount] = useState(0); // initial value / default value
    function increment() {
        for (var i = 1; i <= 5; i++) {
            //setCount(count + 1);  // this.setState(prevState=>newState)
            setCount(prevState => prevState + 1);
        }
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <div>
                <button onClick={e => increment()}>Increse by +5</button>
            </div>
        </div>
    );
};

export default HookCounter;