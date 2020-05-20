import React, { Component } from 'react';

class ClassTitleChange extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            title: 'praveen'
        }
    }

    componentWillMount() {
        let { count } = this.state;
        document.title = `count - ${count}`
        console.log(document.title);

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            let { count } = this.state;
            document.title = `count - ${count}`
        }


    }
    increment() {
        let { count } = this.state;
        this.setState({ count: count + 1 })
    }
    render() {
        let { count } = this.state;

        return (
            <div className="card">
                <button onClick={e => this.increment()}>
                    do-count - {count}
                </button>

            </div>
        );
    }
}

export default ClassTitleChange;