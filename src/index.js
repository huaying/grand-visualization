import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import HireUs from './components/HireUs';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/hire_us" component={HireUs} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
