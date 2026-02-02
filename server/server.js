// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const Document = require("./document"); // your lowercase file

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3002", // React app URL
    methods: ["GET", "POST"],
  },
});

// Replace with your MongoDB URI
const mongoURI = "mongodb://127.0.0.1:27017/collab-editor";

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

io.on("connection", (socket) => {
  console.log("⚡ User connected:", socket.id);

  socket.on("get-document", async (docId) => {
    if (!docId) return;
    let document = await Document.findById(docId);
    if (!document) {
      document = await Document.create({ _id: docId, content: "" });
    }
    socket.join(docId);
    socket.emit("load-document", document.content);

    socket.on("send-changes", async (data) => {
      document.content = data;
      await document.save();
      socket.to(docId).emit("receive-changes", data);
    });
  });

  socket.on("disconnect", () => {
    console.log("⚡ User disconnected:", socket.id);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
