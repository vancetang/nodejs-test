const express = require("express");
const router = express.Router();

/**
 * 路由統整點
 * 當其他檔案使用 require('./routes') 時
 * Node.js 會自動執行這個 index.js
 */

// 首頁路由
router.get("/", (req, res) => {
  const config = req.app.locals.config;
  const responseData = {
    user: config.user,
    environment: config.app.env,
    port: config.app.port,
    message: `歡迎使用！目前使用者：${config.user}`,
  };

  // 可以選擇回傳 JSON 格式
  res.json(responseData);

  // 或是回傳 HTML 格式
  // res.send(`
  //   <h1>系統資訊</h1>
  //   <p>使用者：${config.user}</p>
  //   <p>環境：${config.app.env}</p>
  //   <p>埠號：${config.app.port}</p>
  // `);
});

// 之後如果有其他路由模組，可以在這裡載入
// 例如：
// const userRoutes = require('./user');
// router.use('/users', userRoutes);

module.exports = router;
