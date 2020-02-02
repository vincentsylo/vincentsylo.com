import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './SocialLinks.module.css';

export default class SocialLinks extends Component {
  static propTypes = {
    inverse: PropTypes.bool,
  };

  static defaultProps = {
    inverse: false,
  };

  render() {
    const { inverse } = this.props;

    return (
      <div className={styles.links}>
        <a href="https://github.com/vincentsylo" className={cx(styles.link, styles.github, { [styles.inverse]: inverse })} target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-github-square" /></a>
        <a href="https://www.linkedin.com/in/vincentsylo" className={cx(styles.link, styles.linkedin, { [styles.inverse]: inverse })} target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-linkedin" /></a>
      </div>
    );
  }
}
