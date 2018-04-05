import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './CallToAction.module.css';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    const { children } = this.props;

    return React.cloneElement(children, { className: cx(styles.button, children.props.className) });
  }
}
