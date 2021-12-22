const dotenv = require("dotenv");

dotenv.config();

const ENV = process.env.NODE_ENV || "development";

const CONFIG = {
  development: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    db: {
      url: process.env.DB_PATH,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    //firebase
  },
  production: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    db: {
      url: process.env.DB_PATH,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    //firebase
  },
  test: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    db: {
      url: process.env.DB_PATH,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    //firebase
  },
};

module.exports = CONFIG[ENV];
