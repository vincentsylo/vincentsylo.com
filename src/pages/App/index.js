import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Routes from '../Routes';
import scrollTo from '../../utils/scrollTo';

class App extends Component {
  static propTypes = {
    history: PropTypes.shape({
      listen: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    this.unlisten = this.props.history.listen(() => scrollTo(0));
  }

  componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  }

  render() {
    return (
      <Fragment>
        <Header />

        <Routes />

        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(App);
