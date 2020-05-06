import React, { Component } from 'react';


class Greet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="alert alert-info text-center">
                    <div>{this.props.message}</div>
                    <hr />

                </div>
s
            </div>
        );
    }
}

export default Greet;