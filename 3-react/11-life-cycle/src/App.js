import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import Greet from './components/Greet';

class App extends Component {
  state = { // mutable
    messaage: 'Default Message'
  }
  constructor(props) {
    super();
    console.log("App:: constructor()");

  }

  changeMessage(msg) {
    this.setState({ messaage: msg })
  }

  componentDidMount() {
    console.log("App:: componentDidMount()");
    setTimeout(() => {
      let response = "hello react!"
      this.setState({ messaage: response })
    }, 5000)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("App:: componentDidUpdate()");
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log("App:: shouldComponentUpdate()");
    return true;
  }

  render() {

    let { title, trainer } = this.props;
    let { messaage } = this.state;

    console.log("App:: render()");
    return (
      <div className="container">
        <hr />
        <h1>{title} - by <span className="badge badge-info">{trainer}</span></h1>
        <hr />

        <button onClick={e => this.changeMessage('Good Morning')} className="btn btn-primary" style={{ margin: "5px" }}>GM</button>
        <button onClick={e => this.changeMessage('Good Noon')} className="btn btn-primary" style={{ margin: "5px" }}>GF</button>
        <button onClick={e => this.changeMessage('Good Evening')} className="btn btn-primary" style={{ margin: "5px" }}>GE</button>
        <button onClick={e => this.changeMessage('')} className="btn btn-primary" style={{ margin: "5px" }}>Remove</button>


        {messaage ? <Greet messaage={messaage} /> : null}


      </div>
    );
  }
}

App.defaultProps = {
  // title: 'react',
  trainer: 'Bucky Wall'
}


App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}
export default App;