import React, { Component } from 'react';

class ClassCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        let { count } = this.state
        this.setState({ count: count + 1 })
    }
    render() {
        return (
            <div>

                <div className="card-body" >
                    {this.state.count}
                    <button onClick={() => this.increment()}>Hit</button>
                </div>

            </div>
        );
    }
}

export default ClassCounter;