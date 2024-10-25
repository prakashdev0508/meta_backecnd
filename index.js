const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const authRoute = require("./routes/auth");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: process.env.ALLOWED_ORIGIN,
    methods: ["GET", "POST"],
  },
});
const cors = require("cors");

app.use(cors());
app.use(express.json());

const socketHandler = require("./socket");
socketHandler(io);

module.exports.getIO = () => io;

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "Bharat mata ki jay" });
});

app.use("/api/v1/auth", authRoute);

server.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
