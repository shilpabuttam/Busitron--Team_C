require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  EMAIL: {
    HOST: process.env.EMAIL_HOST,
    PORT: process.env.EMAIL_PORT,
    USER: process.env.EMAIL_USER,
    PASS: process.env.EMAIL_PASS
  },
  GOOGLE: {
    CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
  },
  FACEBOOK: {
    APP_ID: process.env.FACEBOOK_APP_ID,
    APP_SECRET: process.env.FACEBOOK_APP_SECRET
  }
};
