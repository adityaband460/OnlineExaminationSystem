const express = require('express');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', () => {
    resizeBy.send('Welcome to my forma')
})

app.post('/api/forma', (req, res) => {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'kapsexamsystem@gmail.com',
            pass: 'KAPSExamSystem'
        }
    })

    let mailOptions = {
        from: data.email,
        to: 'kapsexamsystem@gmail.com',
        subject: `Complaints/Issues from ${data.name}`,
        html: 
        ` <h2><b><u>* Mail Content *</b></u></h2> <br/>
        <ul>
        <li><h3><u>Name:</u><i> ${data.name}</i></h3></li> <br/>
        <li><h3><u>Email:</u><i> ${data.email}</i></h3></li> <br/>
        <li><h3><u>PhoneNumber:</u><i> ${data.number}</i></h3></li> <br/>
        <li><h3><u>Inquiry:</u><i> ${data.inquiry}</i></h3></li> <br/>
        </ul>
       `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            response.send(error)
        } else {
            response.send('Success')
        }
    })

    smtpTransport.close();
})

const PORT = process.env.PORT||3001;
app.listen(PORT,() =>{
    console.log("Server starting at port",PORT);
})