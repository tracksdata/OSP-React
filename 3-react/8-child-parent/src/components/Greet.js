import React, { Component } from 'react';

class Greet extends Component {


    greetBackFunction(msg){
        console.log("Greet:: "+msg)
        // child should know which parent function (name) called. 

        this.props.onAction(msg);

    }

    render() {
        return (
            <div>

                <div className="alert alert-warning text-center">
                    <h1>Greet::Child Component</h1>
                    <hr/>
                    <h2>Messaage: {this.props.greetings} </h2>
                    <hr/>
                    <button className="btn btn-success" onClick={e=>this.greetBackFunction('Good Morning tooo')}>Greet Back</button>
                </div>
                
            </div>
        );
    }
}

export default Greet;