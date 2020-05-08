import React, { Component } from 'react';
import Action from './Action';

class ActionBox extends Component {
    state = {
        totalCount: 0
    }

    renderActions() {
        let buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return buttons.map((btn, index) => {
            return (
                <Action btnLable={btn} key={index} onAction={e => this.calculateButtonTotal(e)} />
            )
        })
    }

    calculateButtonTotal(e) {

        let { totalCount } = this.state;
        this.setState({
            totalCount: totalCount + 1
        })
    }

    render() {
        return (
            <div className="card mt-3">
                <div className="card-header">Action Box</div>
                <div className="card-body">
                    {this.renderActions()}
                </div>

                <div className="card-footer text-center">
                    Total Button Hit Count: <span className="badge badge-warning">{this.state.totalCount}</span>
                </div>


            </div>
        );
    }
}

export default ActionBox;