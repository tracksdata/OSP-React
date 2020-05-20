import React, { useState, useEffect } from 'react';

const HookTitleChange = () => {


    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log(' useEffect');
    }, [count]);

    return (
        <div>
            <h1>
                <button onClick={e => { increment() }}>Count</button> <br />
                HookTitkeChange:  {count}

            </h1>

        </div>
    );
};

export default HookTitleChange;