const nodemailer = require("nodemailer");

const { GMAIL_PASS, GMAIL_EMAIL } = require("./server-config");

const mailsender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_EMAIL,
    pass: GMAIL_PASS,
  },
});

module.exports = mailsender;
