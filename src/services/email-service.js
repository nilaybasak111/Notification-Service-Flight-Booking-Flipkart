const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

const { TicketRepository } = require("../repositories");
const { Mailer } = require("../config");

const ticketRepo = new TicketRepository();

// This Function Send Basic Emails
async function sendEmail(mailFrom, mailTo, subject, text) {
  try {
    const response = await Mailer.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: subject,
      text: text,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Something Went Wrong While Sending An Email",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// This Function Create A Ticket
async function createTicket(data) {
  try {
    const response = await ticketRepo.create(data);
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Something Went Wrong While Creating A Ticket",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// This Function Fetch All Pending Emails
async function getPendingEmails() {
  try {
    const response = await ticketRepo.getPendingTickets();
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Something Went Wrong While Fetching Pending Emails",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { sendEmail, createTicket, getPendingEmails };
