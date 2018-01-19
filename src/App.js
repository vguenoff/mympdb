import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    value: '',
    show: false
  }
  
  submit = () => this.setState({ value: this.text.value });
  
  showValue = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <input type="text" ref={node => this.text = node} /> */}
        <input type="text" value={this.state.value} onChange={e => this.setState({ value: e.target.value.trim() })} />
        {/* <button onClick={this.submit}>Show Value</button> */}
        <button onClick={this.showValue}>Toggle value</button>
        <p>{this.state.show && this.state.value.toLocaleUpperCase()}</p>
      </div>
    );
  }
}

export default App;
