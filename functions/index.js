const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const rp = require('request-promise');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const recaptchaSecret = functions.config().recaptcha.secret;

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.submitContactForm = functions.https.onRequest((req, res) => {
  rp({
    uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
    method: 'POST',
    formData: {
      secret: recaptchaSecret,
      response: req.body.response,
    },
    json: true,
  }).then((result) => {
    if (result.success) {
      console.log('*** Successfully validated recaptcha ***');
      sendEmail(req.body)
        .then(() => {
          console.log('*** Successfully sent email ***');
          return res.status(200).send(true);
        })
        .catch((reason) => {
          console.error('*** Error sending email ***');
          return res.status(500).send({
            body: req.body,
            reason,
          });
        });
    } else {
      console.error('*** Recaptcha validation failed ***');
      return res.status(500).send(false);
    }
  }).catch((reason) => {
    console.error('*** Error validating recaptcha ***');
    return res.status(500).send({
      body: req.body,
      reason,
    });
  })

});

function sendEmail(body) {
  const mailOptions = {
    from: `vincentsylo.com <${gmailEmail}>`,
    to: 'vincentsylo@gmail.com',
  };

  mailOptions.subject = 'vincentsylo.com - Contact Form';
  mailOptions.html = `<p><b>Name: </b>${body.name}</p>
                      <p><b>Contact: </b>${body.contact}</p>
                      <p><b>Description: </b>${body.description}</p>`;

  return mailTransport.sendMail(mailOptions);
}
