const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'dd7a064dd2fa4f12465d44320f286911-9949a98f-f6ecd332',
        domain: 'sandboxb56cad72ce8f45628a55a7915de34b1e.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
    from: 'im.still.using@hotmail.com',
    to: 'kevinwbiurns@gmail.com',
    subject: 'Testing...',
    text: 'i would like ot get in touch with you'
};

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log('Error Occurs');
    } else {
        console.log('Message sent!!')
    }
});