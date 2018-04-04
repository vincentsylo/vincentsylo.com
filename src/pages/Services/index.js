import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import cx from 'classnames';
import JavaScript from './JavaScript';
import ReactNative from './ReactNative';
import ReactJs from './ReactJs';
import NodeJs from './NodeJs';
import styles from './Services.module.css';

export default class Services extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.hero}>
          <h1>Bring your idea to life</h1>
          <h2>Web &amp; Mobile Development</h2>
        </div>

        <div className={cx(styles.section, styles.stack)}>
          <h2>Technology Stack</h2>
          <p>As a <strong>cross platform</strong> and <strong>full stack</strong> developer, this list is not exhaustive but contains my current preferred stack.</p>
          <div className={styles.list}>
            <Link to="/services/javascript" className={styles.technology}><i className="fab fa-3x fa-js" />JavaScript</Link>
            <Link to="/services/react-native" className={styles.technology}><i className="fab fa-3x fa-react" />React Native</Link>
            <Link to="/services/react-js" className={styles.technology}><i className="fab fa-3x fa-react" />React.js</Link>
            <Link to="/services/node-js" className={styles.technology}><i className="fab fa-3x fa-node-js" />Node.js</Link>
          </div>

          <div className={styles.container}>
            <Switch>
              <Route exact path="/services/javascript" component={JavaScript} />
              <Route exact path="/services/react-native" component={ReactNative} />
              <Route exact path="/services/react-js" component={ReactJs} />
              <Route exact path="/services/node-js" component={NodeJs} />
              <Route component={JavaScript} />
            </Switch>
          </div>

          <div className={cx(styles.section, styles.interested)}>
            <h2>Interested?</h2>
          </div>
        </div>
      </div>
    );
  }
}
