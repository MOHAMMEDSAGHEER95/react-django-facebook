import React, { Component } from 'react';
import './App.css';
import './assets/css/main.css'
import './assets/css/util.css'
import PostForm from './components/PostForm';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './components/Login';



class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="limiter">
          <div>
            <div>
              <NavBar />
              <Router>
                <Route path="/update-fb-page" exact component={PostForm} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/login" exact component={Login} />
              </Router>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default App;