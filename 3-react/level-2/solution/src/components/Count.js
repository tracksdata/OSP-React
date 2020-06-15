import React, { Component } from 'react';
import '../styles/input.css'
class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    changeCount(e) {
        let { count } = this.props; 
        this.setState({ count: e.target.value })
        let { onAction } = this.props;
        onAction(e.target.value)

    }
    render() {
        let { count } = this.props;
        return (

            <div>
                <h1>Count COmponent</h1>
                <hr />
                <h2>Count: {count}</h2>

                <form>
                    <input style={{color:"red"}} className="s1" type="text" onChange={e => this.changeCount(e)} />
                </form>
            </div>
        );
    }
}

export default Count;