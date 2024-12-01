require("dotenv").config();
const express = require("express");
const AppDataSource = require("./config/database");
const routes = require("./routes/index");
const errorHandler = require("./middleware/errorMiddleware");
const app = express();
app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((error) => console.error("Database connection failed", error));
