require("dotenv").config();

const env = {
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASS: process.env.GMAIL_PASS,
    JWT_SECRET: process.env.JWT_SECRET,
}

module.exports = env;