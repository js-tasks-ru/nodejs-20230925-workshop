const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

const config = require("./config");
const yandex = require("./yandex");

const bot = new Telegraf(config.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));

bot.on(message("text"), async (ctx) => {
  if (ctx.message.text.length > config.MAX_SYNTHESIZE_TEXT_LENGTH) {
    return ctx.reply(
      `Переданный текст слишком большой, максимально допустимое количество символов: ${config.MAX_SYNTHESIZE_TEXT_LENGTH}`,
    );
  }

  try {
    const audio = await yandex.synthesize(ctx.message.text);
    ctx.sendVoice({ source: audio.data });
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    ctx.reply(
      "произошла неизвестная ошибка, попробуйте повторить запрос позже",
    );
  }
});

module.exports = bot;
