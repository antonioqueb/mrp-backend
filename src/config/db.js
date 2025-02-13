const { Sequelize } = require("sequelize");

// Conexión a PostgreSQL con Sequelize
// Cambia 'process.env.PG_URI' a 'process.env.DATABASE_URL'
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
