import React, { Component } from 'react';

class Action extends Component {
    state = {
        count: 0
    }
    incrementCount() {
        let { count } = this.state;
        this.setState({ count: count + 1 })

        let {onAction}=this.props;

        console.log("Action:: "+onAction);
        onAction(count);


    }
    render() {
        return (
            <div className="mystyles">
                <div className="card card-body">
                    <button className="btn btn-primary" onClick={e => this.incrementCount()}>{this.props.btnLbl}</button>
                    <hr />
                    <span className="badge badge-warning">{this.state.count}</span>
                </div>

            </div>
        );
    }
}

export default Action;