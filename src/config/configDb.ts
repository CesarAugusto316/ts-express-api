export const configDb = {
  development: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'larnu_dev',
    ip: process.env.DB_IP,
    port: process.env.DB_PORT
  },
  test: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'larnu_test',
    ip: process.env.DB_IP,
    port: process.env.DB_PORT
  },
  production: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ip: process.env.DB_IP,
    port: process.env.DB_PORT
  }
};
