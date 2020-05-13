import React, { Component } from 'react';
import B from './B';
import ColorContext from './ColorContext';

class A extends Component {


    render() {
        let product = {
            id: '10',
            name: 'Pen',
            price: 877
        }
        return (
            <div className="card">
                <div className="card-header bg-primary">A Component</div>

                <hr />
                <h4>Color: {this.props.color}</h4>



                <ColorContext.Provider value={JSON.stringify(product)} name={"Praveen"}>
                    <B />
                </ColorContext.Provider>




            </div>
        );
    }
}

export default A;