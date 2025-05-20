const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const mailsender = require('./config/email-config');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    try{
        const response= await mailsender.sendMail({
        from: ServerConfig.GMAIL_EMAIL,
        to: "ke.i.r.an.iangl.yt@gmail.com",
        subject: "Service Working Fine 2",
        text: "The service is up and running 2",
    });
    console.log("Email sent successfully", response);
    } catch (error) {
        console.error("Error sending email", error);
    }
});
