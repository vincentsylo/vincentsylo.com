import React, { Component } from 'react';
import styles from './NotFound.module.css';

export default class NotFound extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h3>Sorry!</h3>
        <h4>What you're looking for is unavailable.</h4>
      </div>
    );
  }
}
