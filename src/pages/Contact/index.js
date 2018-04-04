import React, { Component } from 'react';
import styles from './Contact.module.css';

export default class Contact extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>Let's grab a coffee</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="What's on your mind?"></textarea>
        </form>
      </div>
    );
  }
}
