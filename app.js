const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(cors());

app.use("/video", routes);
app.use("/audio", routes);

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});