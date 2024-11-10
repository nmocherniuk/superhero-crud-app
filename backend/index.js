const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = require("./models");

const superheroRoutes = require("./routes/Superheroes");
app.use("/", superheroRoutes);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
