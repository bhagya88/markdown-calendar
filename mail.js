var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://milaniatrust%40gmail.com:hellomilania@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Milania Trust 👥" <milaniatrust@gmail.com>', // sender address
    to: 'bhagya_lk@yahoo.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html bnoody
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});