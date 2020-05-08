import React, { Component } from 'react';
import Action from './Action';
import Summary from './Summary';

class ActionBox extends Component {
    state = {
        totalCount: 0
    }

    renderActions() {
        let buttons = [1, 2, 3, 4, -5, 6, 7, -8, 9, -10,50,-80,100];
        return buttons.map((btn, index) => {
            return (
                <Action btnLable={btn} key={index} onAction={e => this.calculateButtonTotal(e)} />
            )
        })
    }

    calculateButtonTotal(btnLable) {

        let { totalCount } = this.state;
        this.setState({
            totalCount: totalCount + btnLable
        })
    }

    render() {
        return (
            <div className="card mt-3">
                <div className="card-header">Action Box - <span className="badge badge-primary">{this.state.totalCount}</span></div>
                <div className="card-body">
                    {this.renderActions()}
                </div>

                <div className="card-footer text-center">
                  <Summary totalCount={this.state.totalCount}/>
                </div>


            </div>
        );
    }
}

export default ActionBox;