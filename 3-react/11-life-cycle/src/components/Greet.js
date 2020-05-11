import React, { Component } from 'react';

class Greet extends Component {
    constructor(props) {
        super()
        console.log("Greet:: constructor()");
    }

    componentDidMount() {
        console.log("Greet:: componentDidMount()");
        this.interval = setInterval(() => {
            this.forceUpdate(); // render 
        }, 1000)
    }

    componentWillUnmount() {
        console.log("Greet:: componentWillUnmount()");
        clearInterval(this.interval);

    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Greet:: componentDidUpdate()");
        console.log(this.props);
        console.log(prevProps);

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Greet:: shouldComponentUpdate()");
        return this.props.messaage != nextProps.messaage;
        // return true;
    }

    render() {
        console.log("Greet:: render()");
        const { messaage } = this.props;
        return (
            <div>
                <div className="alert alert-info">
                    <div>{messaage}</div>
                    <hr />
                    <div>{new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}</div>
                </div>

            </div>
        );
    }
}

export default Greet;