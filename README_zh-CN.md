# 🧪 Node.js 测试项目

这是一个用来测试 Node.js 各项功能的项目。

## 🌐 可用语言

[![English](https://img.shields.io/badge/English-Click-yellow)](README_en.md)
[![繁體中文](https://img.shields.io/badge/繁體中文-Click-orange)](README.md)
[![简体中文](https://img.shields.io/badge/简体中文-Click-green)](README_zh-CN.md)

## 📋 描述

此项目使用 Express 框架创建一个简单的网页服务器，作为测试 Node.js 功能的基础环境。

## 🚀 安装

1.  确保你已经安装了 [Node.js](https://nodejs.org/) 和 pnpm。

    > **📝 NOTE**：我个人的 [安装步骤](https://share.evernote.com/note/f80870ec-e2d3-2357-1bfa-2a8d224f1be3)。

2.  克隆这个仓库：
    ```bash
    git clone <your-repository-url>
    cd nodejs-test
    ```
3.  安装项目依赖：
    ```bash
    pnpm install
    ```
4.  配置环境变量：
    ```bash
    cp .env.tpl .env
    ```
    编辑 `.env` 文件并设置相关参数

## ▶️ 使用方式

执行以下命令来启动服务器：

```bash
pnpm start # 或者使用 pnpm dev 来启动开发模式
```

服务器将会在 `http://localhost:3000` 上运行。打开你的浏览器并访问该网址，你应该会看到 "Hello, World!" 的信息。

## 📂 项目结构

```
nodejs-test/
├─📁 src/-------------- # 主要源代码文件夹
│ ├─📁 config/--------- # 配置文件文件夹
│ ├─📁 controllers/---- # 控制器逻辑
│ ├─📁 models/--------- # 数据模型定义
│ ├─📁 routes/--------- # API 路由定义
│ ├─📁 services/------- # 业务逻辑服务
│ └─📁 utils/---------- # 工具函数
└─📁 public/----------- # 静态资源文件夹
```

## 📦 依赖

这个项目使用了以下主要的依赖包：

*   [Express](https://expressjs.com/): Node.js 的 Web 应用程序框架。

你可以在 [package.json](c:\workspace\nodejs-test\package.json) 文件中查看完整的依赖列表。
