import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Routes from '../Routes';
import Services from '../Services';
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

        <Switch>
          <Route path="/services" component={Services} />
          <Route component={Routes} />
        </Switch>

        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(App);
