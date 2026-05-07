const env = require("../config/env.config");
const transporter = require("../config/nodemailer.config");

const mailingOptions = {
    from: env.GMAIL_USER,
    subject: "Hello World",
    text: "Hello World!"
}

const sendEmailOtp = async (to) => {
    try {
        
    } catch (err) {
        return null;
    }
}

module.exports = sendEmail;
