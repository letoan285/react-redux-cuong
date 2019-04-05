import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import routes from './routes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="container">
          { routes.map((route, index) => {
            
          })}
        </div>
      </div>
    );
  }
}

export default App;
