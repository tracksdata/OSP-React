import React, { Component } from 'react';
import '../App.css';
import Action from './Action';
import Summary from './Summary';

class ActionBox extends Component {

    state={
        totalCount: 0
    }
    fun(e){
        let {totalCount} = this.state;
        this.setState({totalCount: totalCount+1})
        console.log("=====> fun function:: ActionBox <======" +e);   
    }
    render() {
        return (

            <div className="card text-center">
                <div className="card-body">
                    <Action btnLbl="Run" onAction={e=>this.fun(e)} />
                    <Action btnLbl="Walk"  onAction={e=>this.fun(e)}/>
                    <hr />
                    <div style={{ clear: 'both' }}>
                        <Summary totalCount={this.state.totalCount} />
                    </div>

                </div>


            </div>



        );
    }
}

export default ActionBox;