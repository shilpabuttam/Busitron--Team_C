const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text, html) => {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error sending email:", error);
  }
};

module.exports = sendEmail;
