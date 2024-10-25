const userDetails = require("./userData.json");

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("A new user connected", socket.id);

    socket.on("join-user", (email) => {
      console.log(`${email} joined`);

      const user = userDetails.find((user) => user.email === email);
      if (user) {
        user.connected = true;
        user.socketId = socket.id;

        io.emit("user_status_change", {message : `${user.name} joined ` , userDetails});
      } else {
        console.log("User not found");
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);

      const user = userDetails.find((user) => user.socketId === socket.id);
      if (user) {
        user.connected = false;
        delete user.socketId;
        console.log(userDetails);

        io.emit("user_status_change", {message : `${user.name} leaved ` , userDetails});
      }
    });
  });
};

module.exports = socketHandler;
