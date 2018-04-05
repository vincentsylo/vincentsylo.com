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
      response: req.body['g-recaptcha-response']
    },
    json: true,
  }).then(result => {
    if (result.success) {
      sendEmail(req.body)
        .then(() => res.status(200).send(true))
        .catch(reason => res.status(500).send(reason));
    }

    return res.status(500).send('Recaptcha failed.');
  }).catch(reason => {
    return res.status(500).send(reason);
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
