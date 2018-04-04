import React, { Component } from 'react';
import styles from './Footer.module.css';
import SocialLinks from '../../../components/SocialLinks';

export default class Footer extends Component {
  render() {
    const date = new Date();

    return (
      <footer className={styles.footer}>
        <span>&copy; { date.getFullYear() } Vincent Lo</span>
        <SocialLinks inverse />
      </footer>
    )
  }
}
