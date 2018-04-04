import React, { Component } from 'react';
import styles from './Services.module.css';

export default class NodeJs extends Component {
  render() {
    return (
      <div className={styles.details}>
        <div className={styles.platforms}>
          <span className={styles.platform}><i className="fal fa-3x fa-database" />Backend</span>
        </div>
      </div>
    );
  }
}
