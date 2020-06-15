import React, { Component } from 'react';
import Count from './Count';

class InitialCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    updateCount(e) {
        this.setState({ count: e })
    }

    increseCount() {
        let { count } = this.state;
        this.setState({ count: count + 1 })
    }

    decreseCount() {

    }
    render() {
        let { count } = this.state;
        return (
            <div>

                <h1>Initial Count Component</h1>
                <h2>Count: {count}</h2>
                <button onClick={e => this.increseCount()}>Increse</button>
                <button>Decrese</button>

                <hr />

                <Count onAction={e => this.updateCount(e)} count={this.state.count} />


            </div>
        );
    }
}

export default InitialCount;