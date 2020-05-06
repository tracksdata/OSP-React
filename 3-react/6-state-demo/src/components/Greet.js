import React, { Component } from 'react';


class Greet extends Component {
   
    render() {
        return (
            <div>
                <div className="alert alert-warning text-center">
                    <h1>Greet Component</h1>
                    <hr/>
                    <div><h3>{this.props.greeting}</h3></div>
                    <hr />

                </div>

            </div>
        );
    }
}

export default Greet;