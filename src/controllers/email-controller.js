const { StatusCodes } = require("http-status-codes");

const { EmailService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/*
 * POST : /api/v1/ticket/
 * req.body = {
 *             subject : "nilaybasak@gmail.com",
 *             content : "12345678",
 *             recepientEmail : "",
 *             status : "PENDING"
 *            }
 */
async function create(req, res) {
  try {
    const response = await EmailService.createTicket({
      subject: req.body.subject,
      content: req.body.content,
      recepientEmail: req.body.recepientEmail,
      status: req.body.status,
    });
    SuccessResponse.data = response;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = { create };
