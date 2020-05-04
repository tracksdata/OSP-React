import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Story from './Story';

function renderStories(mystories) {
    return mystories.map((story, index) => {
        return (
           <Story myStory={story} key={index}/>
        )
    })

}


let StoryBox = (props) => {
    return (
        <div className="alert alert-info">

            <div className="card">
                <div className="card-header"> <h3>Story Box -  {props.title}</h3></div>
                <div className="card-body">

                    {renderStories(props.mystories)}
                    
                    

                </div>

            </div>

        </div>
    )
}

export default StoryBox;