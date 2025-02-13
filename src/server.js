require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { connectDB, sequelize } = require("./config/db");
const productionRoutes = require("./routes/production.routes");
const ordersRoutes = require("./routes/orders.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/production", productionRoutes);
app.use("/api/orders", ordersRoutes);

const PORT = process.env.PORT || 4000;

sequelize.sync({ alter: true })
  .then(() => console.log("✅ Base de datos sincronizada"))
  .catch(err => console.error("❌ Error en la sincronización:", err));

connectDB();

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
