require("dotenv").config();

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN || "",
  YANDEX_FOLDER_ID: process.env.YANDEX_FOLDER_ID || "",
  YANDEX_TOKEN: process.env.YANDEX_TOKEN || "",
  MAX_SYNTHESIZE_TEXT_LENGTH: 1000,
};
