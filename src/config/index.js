const path = require("path");

/**
 * 設定檔載入器
 * 當其他檔案使用 require('./config') 時
 * Node.js 會自動執行這個 index.js
 */
const loadConfig = () => {
  // 取得環境設定
  const env = process.env.NODE_ENV || "dev";

  try {
    // 載入對應環境的設定檔
    const envConfig = require(`./config.${env}.js`);
    return envConfig;
  } catch (error) {
    console.error(`無法載入 ${env} 環境設定檔：`, error);
    process.exit(1);
  }
};

// 匯出設定
module.exports = loadConfig();
