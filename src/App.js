import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home';
import Kitties from './kitties';
import Meanies from './meanies';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar className="navbar navbar-dark bg-primary">
            <Navbar.Brand href="/">Save The Kitties</Navbar.Brand>
            <Nav>
                <Nav.Item className="nav-item active">
                    <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item active">
                    <Nav.Link href="/kitties/" className="nav-link">Meet the Kitties</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item active">
                    <Nav.Link href="/meanies/" className="nav-link">Meet the Monsters</Nav.Link>
                </Nav.Item>
            </Nav>
          </Navbar>
        </div>
        <div className="App-body">
            <Route exact path="/" component={Home} />
            <Route exact path="/kitties" component={Kitties} />
            <Route exact path="/meanies" component={Meanies} />
        </div>
      </Router>
    );
  }
}

export default App;
