import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

let Story = (props) => {
    return (
        <li className="list-group-item">
            {props.myStory.author} -  {props.myStory.author}
        </li>
    )
}

export default Story