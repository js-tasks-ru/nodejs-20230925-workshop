const axios = require("axios");

const config = require("./config");

module.exports.synthesize = function synthesize(text) {
  const params = new URLSearchParams();
  params.append("text", text);
  params.append("lang", "ru-RU");
  params.append("voice", "jane");
  params.append("emotion", "neutral");
  params.append("speed", "1.0");
  params.append("format", "oggopus");
  params.append("folderId", config.YANDEX_FOLDER_ID);

  return axios.post(
    "https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize",
    params,
    {
      headers: {
        Authorization: `Bearer ${config.YANDEX_TOKEN}`,
      },
      responseType: "arraybuffer",
    },
  );
};
