import React, { Component } from 'react';
import Veg from './Veg';
import Nonveg from './Nonveg';

class FoodBox extends Component {

    renderChildren(){
        let { children}=this.props;
        return children.map((child,idx)=>{
            return(
                <li key={idx} className="list-group-item">{child}</li>
            )
        })
    }
    render() {
        return (
            <div className="card">

                <div className="card-header">{this.props.title}</div>

                <div className="card-body">
                    {this.renderChildren()}
                </div>



            </div>
        );
    }
}

export default FoodBox;