import React, { Component } from 'react';
import C from './C';
import ColorContext from './ColorContext';

class B extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header bg-success">B Component</div>

                <hr />
                <h4> Color:
                <ColorContext.Consumer>
                        {value => value} 
                    </ColorContext.Consumer>
                </h4>

                <C />

            </div>
        );
    }
}

export default B;