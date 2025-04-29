const defaultConfig = require("./config.default");

module.exports = {
  ...defaultConfig,
  user: "prod_user",
  app: {
    ...defaultConfig.app,
    debug: false,
  },
  // 正式環境特定覆寫設定
  cors: {
    enabled: true,
    origin: "https://your-domain.com",
  },
};
