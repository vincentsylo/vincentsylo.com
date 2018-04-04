import React, { Component } from 'react';
import styles from './Services.module.css';

export default class ReactNative extends Component {
  render() {
    return (
      <div className={styles.details}>
        <div className={styles.platforms}>
          <span className={styles.platform}><i className="fab fa-3x fa-apple" />iOS</span>
          <span className={styles.platform}><i className="fab fa-3x fa-android" />Android</span>
        </div>
      </div>
    );
  }
}
