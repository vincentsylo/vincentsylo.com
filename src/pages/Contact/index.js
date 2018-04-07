import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import api from '../../utils/api';
import scrollTo from '../../utils/scrollTo';
import CallToAction from '../../components/CallToAction';
import styles from './Contact.module.css';

export default class Contact extends Component {
  state = {
    name: '',
    contact: '',
    description: '',
    submitting: false,
    submitted: false,
  };

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);

    if (document.readyState === 'complete') {
      this.handleLoad();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.handleLoad);
  }

  handleLoad = () => {
    scrollTo(this.component);
  };

  executeRecaptcha = (e) => {
    e.preventDefault();
    this.recaptchaInstance.execute();
  };

  onSubmit = async (response) => {
    const { name, contact, description } = this.state;
    this.setState({ submitting: true });
    await api.post('/api/contact', { name, contact, description, response });
    this.setState({ submitted: true, submitting: false });
  };

  render() {
    const { name, contact, description, submitted, submitting } = this.state;

    return (
      <div className={styles.container} ref={(ref) => { this.component = ref; }}>
        {
          submitted ? (
            <div className={styles.submitted}>
              <i className="fal fa-3x fa-envelope-open" />
              <p><strong>Thanks for reaching out!</strong></p>
              <p>I'll get back to you shortly.</p>
            </div>
          ) : (
            <form className={styles.form}>
              <h2>Let's grab a coffee</h2>

              <p className={styles.description}>Fill out the form below and I'll get back to you shortly!</p>

              <input type="text" placeholder="Name" value={name} onChange={e => this.setState({ name: e.target.value })} />
              <input type="text" placeholder="Best form of contact" value={contact} onChange={e => this.setState({ contact: e.target.value })} />
              <textarea placeholder="What's on your mind?" value={description} onChange={e => this.setState({ description: e.target.value })}></textarea>

              <CallToAction>
                <button type="submit" onClick={this.executeRecaptcha} disabled={!name || !contact || !description || submitting} className={styles.submitButton}>Get in touch</button>
              </CallToAction>

              <Recaptcha
                ref={(ref) => { this.recaptchaInstance = ref; }}
                sitekey="6LchOFEUAAAAAF8yeVbDYAkYwQgQ2P3SbvR93Jub"
                size="invisible"
                verifyCallback={this.onSubmit}
                render="explicit"
              />
            </form>
          )
        }
      </div>
    );
  }
}
