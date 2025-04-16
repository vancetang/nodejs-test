module.exports = {
  app: {
    port: process.env.APP_PORT || 3000,
    env: process.env.NODE_ENV || "dev",
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  api: {
    key: process.env.API_KEY,
  },
};
