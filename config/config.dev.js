const defaultConfig = require("./config.default");

module.exports = {
  ...defaultConfig,
  user: "dev_user",
  app: {
    ...defaultConfig.app,
    debug: true,
  },
  // 開發環境特定覆寫設定
  cors: {
    enabled: true,
    origin: "*",
  },
};
