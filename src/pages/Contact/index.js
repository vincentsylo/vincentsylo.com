import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import styles from './Contact.module.css';

export default class Contact extends Component {
  state = {
    name: '',
    contact: '',
    description: '',
    submitted: false,
  };

  executeRecaptcha = (e) => {
    e.preventDefault();
    this.recaptchaInstance.execute();
    console.log('exe')
  };

  onSubmit = () => {
    console.log('submit')
    this.setState({ submitted: true });
  };

  render() {
    const { name, contact, description, submitted } = this.state;

    return (
      <div className={styles.container}>
        {
          submitted ? (
            <div className={styles.submitted}>
              <i className="fal fa-3x fa-envelope-open" />
              <p><strong>Thanks for reaching out!</strong></p>
              <p>I'll get back to you shortly.</p>
            </div>
          ) : (
            <form className={styles.form}>
              <Recaptcha
                ref={(ref) => { this.recaptchaInstance = ref; }}
                sitekey="6LchOFEUAAAAAF8yeVbDYAkYwQgQ2P3SbvR93Jub"
                size="invisible"
                verifyCallback={this.onSubmit}
              />

              <h2>Let's grab a coffee</h2>

              <input type="text" placeholder="Name" value={name} onChange={e => this.setState({ name: e.target.value })} />
              <input type="text" placeholder="Best form of contact" value={contact} onChange={e => this.setState({ contact: e.target.value })} />
              <textarea placeholder="What's on your mind?" value={description} onChange={e => this.setState({ description: e.target.value })}></textarea>

              <button onClick={this.executeRecaptcha} disabled={!name || !contact || !description}>Get in touch</button>
            </form>
          )
        }
      </div>
    );
  }
}
