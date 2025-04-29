/**
 * 主程式進入點
 * 載入必要的相依套件與設定
 */

// 載入環境變數
require("dotenv").config();

const express = require("express");
const path = require("path");
const config = require("./config");
const routes = require("./routes");

// 建立 Express 應用程式實例
const app = express();

// 將設定註冊到應用程式區域變數中
app.locals.config = config;

// 設定靜態檔案目錄
app.use(express.static(path.join(__dirname, "../public")));

// 註冊路由
app.use("/", routes);

// 錯誤處理中間件
app.use((err, req, res, next) => {
  console.error("應用程式錯誤：", err);
  res.status(500).send("伺服器發生錯誤");
});

// 啟動伺服器
const port = config.app.port;
app.listen(port, () => {
  console.log(`伺服器已啟動，監聽埠號：${port}`);
  console.log(`網址：http://localhost:${port}`);
});

// 處理未捕獲的異常
process.on("unhandledRejection", (reason, promise) => {
  console.error("未處理的 Promise 拒絕：", reason);
});

process.on("uncaughtException", (error) => {
  console.error("未捕獲的異常：", error);
  process.exit(1);
});
