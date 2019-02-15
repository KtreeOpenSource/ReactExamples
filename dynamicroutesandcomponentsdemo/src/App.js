import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import DynamicComponentsData from './DynamicComponentsData';
import DynamicComponent from './DynamicComponent';

class App extends Component {
  render() {
    let dynamicComponents = DynamicComponentsData;

    return (
      <div className="App">
        <h1>Create Dynamic Routes And Components Demo</h1>
        <Router>
          <div>
            <div>
              {
                dynamicComponents.map((item, index) => {
                  return <div key={index}><NavLink exact activeClassName="selected" to={item.route}>{item.title}</NavLink></div>
                })
              }
            </div>
            <div>
              {
                dynamicComponents.map((item, index) => {
                  return <Route exact key={index} path={item.route} component={() => <DynamicComponent title={item.title} content={item.content} />} />
                })
              }
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
