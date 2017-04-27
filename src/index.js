import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import HireUs from './components/HireUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import './index.css';


const App = () => (
  <Router>
    <div>
      <Route
        render={({ location }) => (
          <CSSTransitionGroup
            component="div"
            transitionName="blur"
            transitionEnter={false}
            transitionLeaveTimeout={1000}
          >
            <Switch location={location} key={location.key}>
              <Route exact path="/" component={Home} />
            </Switch>
          </CSSTransitionGroup>
        )}
      />
      <Route path="/about" component={About} />
      <Route path="/hire_us" component={HireUs} />
      <Route path="/projects" component={Projects} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
