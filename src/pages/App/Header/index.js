import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { ReactComponent as Logo } from './logo.svg';
import styles from './Header.module.css';
import SocialLinks from '../../../components/SocialLinks';
import './logo.css';

export default class Header extends Component {
  state = {
    showNavModal: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onCloseNav);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onCloseNav);
  }

  onCloseNav = () => {
    this.setState({ showNavModal: false }, () => {
      document.body.classList.remove(styles.noScroll);
    });
  };

  onOpenNav = () => {
    this.setState({ showNavModal: true }, () => {
      document.body.classList.add(styles.noScroll);
    });
  };

  render() {
    const { showNavModal } = this.state;

    return (
      <header className={styles.header}>
        <Link to="/" onClick={this.onCloseNav}><Logo /></Link>

        <div className={styles.titleContainer}>
          <Link to="/" onClick={this.onCloseNav} className={styles.title}><span className={styles.v}>vincent</span><span className={styles.sy}>sy</span><span className={styles.lo}>lo</span></Link>
        </div>

        <nav className={cx(styles.links, {
          [styles.modalOpen]: showNavModal,
          [styles.modalClosed]: !showNavModal,
        })}>
          <div className={styles.smallMenuHeader}>
            <Link to="/" onClick={this.onCloseNav}><Logo /></Link>
            <div className={styles.titleContainer}>
              <Link to="/" onClick={this.onCloseNav} className={styles.title}><span className={styles.v}>vincent</span><span className={styles.sy}>sy</span><span className={styles.lo}>lo</span></Link>
            </div>
            <button onClick={this.onCloseNav} className={styles.closeButton}><i className="fal fa-3x fa-times" /></button>
          </div>
          <SocialLinks />
          <a href="https://www.dropbox.com/s/j38gs968c878sw6/Vincent-Lo-CV.pdf?dl=0" className={styles.link} target="_blank" rel="noopener noreferrer">resume</a>
          <Link to="/contact" className={cx(styles.link, styles.contact)} onClick={this.onCloseNav}>get in touch</Link>
          { showNavModal ? <div className={styles.flex} /> : null }
        </nav>

        <button className={cx(styles.link, styles.smallOnly)} onClick={this.onOpenNav}><i className="fal fa-3x fa-bars" /></button>
      </header>
    );
  }
}
