const express = require("express");
const router = express.Router();

/**
 * 路由統整點
 * 當其他檔案使用 require('./routes') 時
 * Node.js 會自動執行這個 index.js
 */

// 首頁路由
router.get("/", (req, res) => {
  res.send(`Hello, World! ${req.app.locals.config.user}`);
});

// 之後如果有其他路由模組，可以在這裡載入
// 例如：
// const userRoutes = require('./user');
// router.use('/users', userRoutes);

module.exports = router;
