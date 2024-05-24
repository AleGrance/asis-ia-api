// src/config/configuration.ts
export default () => ({
    firebird: {
      host: process.env.FIREBIRD_HOST,
      port: parseInt(process.env.FIREBIRD_PORT, 10) || 3050,
      database: process.env.FIREBIRD_DATABASE,
      user: process.env.FIREBIRD_USER,
      password: process.env.FIREBIRD_PASSWORD,
    },
  });
  