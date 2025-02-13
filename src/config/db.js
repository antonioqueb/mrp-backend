const { Sequelize } = require("sequelize");

// Ajuste para usar la variable DATABASE_URL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false, // Evita logs innecesarios en consola
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado a PostgreSQL");
  } catch (error) {
    console.error("❌ Error conectando a PostgreSQL:", error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
