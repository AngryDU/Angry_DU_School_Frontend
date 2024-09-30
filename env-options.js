// ../config.js accepts options via environment variables
const dotenv = require('dotenv');

// Загрузка переменных среды из файла .env
dotenv.config();


const options = {}

if (process.env.DOTENV_CONFIG_ENCODING != null) {
  options.encoding = process.env.DOTENV_CONFIG_ENCODING
}

if (process.env.DOTENV_CONFIG_PATH != null) {
  options.path = process.env.DOTENV_CONFIG_PATH
}

if (process.env.DOTENV_CONFIG_DEBUG != null) {
  options.debug = process.env.DOTENV_CONFIG_DEBUG
}

if (process.env.DOTENV_CONFIG_OVERRIDE != null) {
  options.override = process.env.DOTENV_CONFIG_OVERRIDE
}

if (process.env.DOTENV_CONFIG_DOTENV_KEY != null) {
  options.DOTENV_KEY = process.env.DOTENV_CONFIG_DOTENV_KEY
}
module.exports = options;





const envOptions = {
  http:process.env.REACT_APP_HTTP,
  host: process.env.REACT_APP_HOST,
  port: process.env.REACT_APP_PORT,
  dbUrlApi: process.env.REACT_APP_URL_API,
  // dbPassword: process.env.DB_PASSWORD
};
module.exports = envOptions;
