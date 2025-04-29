# 🧪 Node.js Test Project

This is a project for testing various features of Node.js.

## 🌐 Available Languages

[![English](https://img.shields.io/badge/English-Click-yellow)](README_en.md)
[![繁體中文](https://img.shields.io/badge/繁體中文-Click-orange)](README.md)
[![简体中文](https://img.shields.io/badge/简体中文-Click-green)](README_zh-CN.md)

## 📋 Description

This project uses the Express framework to create a simple web server, serving as a base environment for testing Node.js functionalities.

## 🚀 Installation

1.  Make sure you have [Node.js](https://nodejs.org/) and pnpm installed.

    > **📝 NOTE**: My personal [installation steps](https://share.evernote.com/note/f80870ec-e2d3-2357-1bfa-2a8d224f1be3).

2.  Clone this repository:
    ```bash
    git clone <your-repository-url>
    cd nodejs-test
    ```
3.  Install project dependencies:
    ```bash
    pnpm install
    ```
4.  Configure environment variables:
    ```bash
    cp .env.tpl .env
    ```
    Edit the `.env` file and set the relevant parameters.

## ▶️ Usage

Run the following command to start the server:

```bash
pnpm start # Or use pnpm dev to start in development mode
```

The server will be running on `http://localhost:3000`. Open your browser and visit that address; you should see the "Hello, World!" message.

## 📂 Project Structure

```
nodejs-test/
├─📁 src/-------------- # Main source code folder
│ ├─📁 config/--------- # Configuration files
│ ├─📁 controllers/---- # Controller logic
│ ├─📁 models/--------- # Data model definitions
│ ├─📁 routes/--------- # API route definitions
│ ├─📁 services/------- # Business logic services
│ └─📁 utils/---------- # Utility functions
└─📁 public/----------- # Static assets folder
```

## 📦 Dependencies

This project uses the following main dependencies:

*   [Express](https://expressjs.com/): Web application framework for Node.js.

You can view the complete list of dependencies in the [package.json](c:\workspace\nodejs-test\package.json) file.
