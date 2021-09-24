import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IdeModel from './data/model/model';
import LoginPresenter from './app/login/LoginPresenter';
import Home from './app/home/Home';

function App(): JSX.Element {
  const ideModel = new IdeModel();
  return (
    <Router>
      <div className="container">
        <Route
          path="/login"
          exact
          component={() => <LoginPresenter model={ideModel} />}
        />
        <Route path="/" exact component={() => <Home model={ideModel} />} />
      </div>
    </Router>
  );
}

export default App;
