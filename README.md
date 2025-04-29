# 🧪 Node.js 測試專案

這是一個用來測試 Node.js 各種功能的專案。

## 🌐 可用語言

[![English](https://img.shields.io/badge/English-Click-yellow)](README_en.md)
[![繁體中文](https://img.shields.io/badge/繁體中文-Click-orange)](README.md)
[![简体中文](https://img.shields.io/badge/简体中文-Click-green)](README_zh-CN.md)

## 📋 描述

此專案使用 Express 框架建立一個簡單的網頁伺服器，作為測試 Node.js 功能的基礎環境。

## 🚀 安裝

1.  確保你已經安裝了 [Node.js](https://nodejs.org/) 和 pnpm。

    > **📝 NOTE**：我個人的 [安裝步驟](https://share.evernote.com/note/f80870ec-e2d3-2357-1bfa-2a8d224f1be3)。

2.  複製這個儲存庫：
    ```bash
    git clone <your-repository-url>
    cd nodejs-test
    ```
3.  安裝專案依賴：
    ```bash
    pnpm install
    ```
4.  設定環境變數：
    ```bash
    cp .env.tpl .env
    ```
    編輯 `.env` 檔案並設定相關參數

## ▶️ 使用方式

執行以下指令來啟動伺服器：

```bash
pnpm start # 或者使用 pnpm dev 來啟動開發模式
```

伺服器將會在 `http://localhost:3000` 上運行。打開你的瀏覽器並訪問該網址，你應該會看到 "Hello, World!" 的訊息。

## 📂 專案結構

```
nodejs-test/
├─📁 src/-------------- # 主要原始程式碼資料夾
│ ├─📁 config/--------- # 設定檔資料夾
│ ├─📁 controllers/---- # 控制器邏輯
│ ├─📁 models/--------- # 資料模型定義
│ ├─📁 routes/--------- # API 路由定義
│ ├─📁 services/------- # 商業邏輯服務
│ └─📁 utils/---------- # 工具函式
└─📁 public/----------- # 靜態資源資料夾
```

## 📦 依賴

這個專案使用了以下主要的依賴套件：

*   [Express](https://expressjs.com/): Node.js 的網頁應用程式框架。

你可以在 [package.json](c:\workspace\nodejs-test\package.json) 檔案中查看完整的依賴列表。
