module.exports = {
  HOST: "ep-wandering-queen-00550607.eu-central-1.aws.neon.tech",
  USER: "jamelmrad",
  PASSWORD: "CJ7Xb8WKlAuN",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
