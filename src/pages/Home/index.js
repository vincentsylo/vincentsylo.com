import React, { Component } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default class Home extends Component {
  render() {
    return (
      <div className={cx(styles.container, styles.sections)}>
        <div className={cx(styles.section, styles.row, styles.leftToRight)}>
          <h2 className={styles.heading}>What I do</h2>
          <div>
            <p>I build <strong>custom web &amp; mobile applications</strong> catered to your business.</p>
            <p>I truly care about your business and strive to find the most <strong>cost effective</strong> solution, along with providing the expertise to <strong>improve your productivity</strong>.</p>
          </div>
        </div>

        <div className={cx(styles.section, styles.row, styles.rightToLeft)}>
          <h2 className={styles.heading}>How I work</h2>
          <div>
            <p>My philosophy is to <strong>deliver efficiently</strong> and put your <strong>users experience</strong> first.</p>
            <p>I'll work with you through every stage, from scoping through to production, <strong>future enhancements</strong> as well as provide <strong>training</strong> and <strong>ongoing support</strong>.</p>
          </div>
        </div>

        <div className={cx(styles.section, styles.column)}>
          <h2>Let's grab a coffee</h2>
          <p>I'm an <strong>advocate for transparency</strong> and believe it builds connections. I love having open discussions from <strong>all things tech</strong>, <strong>startups</strong>, <strong>career growth</strong> to <strong>travelling</strong> and <strong>investment</strong>.</p>
          <p>If you're interested in any of the above, or even working together - let's grab a coffee!</p>
          <Link to="/contact" className={styles.link}>Get in touch</Link>
        </div>
      </div>
    );
  }
}
