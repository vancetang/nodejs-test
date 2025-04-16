const defaultConfig = require("./config.default");

module.exports = {
  ...defaultConfig,
  user: "test_user",
  app: {
    ...defaultConfig.app,
    debug: false,
  },
  // 測試環境特定覆寫設定
  cors: {
    enabled: true,
    origin: "https://your-domain.com",
  },
};
