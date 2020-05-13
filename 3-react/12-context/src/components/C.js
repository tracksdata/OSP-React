import React, { Component } from 'react';
import ColorContext from './ColorContext';

class C extends Component {
   
    render() {

        return (
            <div className="card">
                <div className="card-header bg-warning">C Component</div>

                <hr />
                <h4> Color:
                <ColorContext.Consumer>
                        {value => value}
                    </ColorContext.Consumer>
                </h4>


            </div>
        );
    }
}

export default C;