import React, { Component } from 'react';
class ClassAutoCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    tick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    componentDidMount() {
      
        this.interval = setInterval(this.tick, 1000)
     
    }
    render() {
        return (
            <div className="card">

                <h1>
                   class: count: {this.state.count}

                </h1>

            </div>
        );
    }
}

export default ClassAutoCount;