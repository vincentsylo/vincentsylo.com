import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './Routes.module.css';
import Home from '../Home';
import NotFound from '../NotFound';
import Contact from '../Contact';

export default class Routes extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.hero}>
          <h1>Vincent Lo</h1>
          <h2>Software Engineer | Web &amp; Mobile Consultant</h2>
          <span>I care. I'm passionate. I'm efficient. I'm genuine.</span>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
