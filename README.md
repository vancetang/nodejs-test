# 🧪 Node.js 測試專案

這是一個用來測試 Node.js 各種功能的專案。

## 📋 描述

此專案使用 Express 框架建立一個簡單的網頁伺服器，作為測試 Node.js 功能的基礎環境。

## 🚀 安裝

1.  確保你已經安裝了 [Node.js](https://nodejs.org/) 和 npm（或 yarn）。
2.  複製這個儲存庫：
    ```bash
    git clone <your-repository-url>
    cd nodejs-test
    ```
3.  安裝專案依賴：
    ```bash
    yarn install
    ```

## ▶️ 使用方式

執行以下指令來啟動伺服器：

```bash
node index.js
```

伺服器將會在 `http://localhost:3000` 上運行。打開你的瀏覽器並訪問該網址，你應該會看到 "Hello, World!" 的訊息。

## 📂 專案結構

```
nodejs-test/
├── src/                # 主要原始程式碼資料夾
│   ├── controllers/    # 控制器邏輯
│   ├── models/        # 資料模型定義
│   ├── routes/        # API 路由定義
│   ├── services/      # 商業邏輯服務
│   └── utils/         # 工具函式
├── tests/             # 測試檔案資料夾
├── config/            # 設定檔案
├── logs/             # 記錄檔案
└── dist/             # 編譯後的程式碼
```

每個資料夾的用途：
- `src/`: 存放所有的原始程式碼
  - `controllers/`: 處理 HTTP 請求和回應的控制器
  - `models/`: 定義資料結構和資料庫模型
  - `routes/`: 定義 API 端點和路由邏輯
  - `services/`: 實作核心業務邏輯
  - `utils/`: 通用工具函式和輔助方法
- `tests/`: 包含所有的單元測試和整合測試
- `config/`: 儲存不同環境的設定檔
- `logs/`: 應用程式執行時的記錄檔
- `dist/`: TypeScript 編譯後的 JavaScript 檔案

## 📦 依賴

這個專案使用了以下主要的依賴套件：

*   [Express](https://expressjs.com/): Node.js 的網頁應用程式框架。

你可以在 [package.json](c:\workspace\nodejs-test\package.json) 檔案中查看完整的依賴列表。
