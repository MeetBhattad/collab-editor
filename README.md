# Real-Time Collaborative Document Editor

A real-time collaborative text editor built with **React**, **Node.js**, **Socket.io**, and **MongoDB**. Multiple users can edit the same document simultaneously.

---

## Features

- Real-time collaborative editing
- Stores documents in MongoDB
- Easy-to-use React interface

---

## Tech Stack

- Frontend: React
- Backend: Node.js + Express
- Realtime: Socket.io
- Database: MongoDB

---

## Setup

1. Clone the repo
2.Install Dependencies
cd server
npm install
cd ../client
npm install
3.Start MongoDB locally or use a cloud URI.
4.Start the server:
cd ../server
node server.js
5.Start the React app
cd ../client
npm start
6.Open browser at http://localhost:3002

MongoDB

In server.js:
mongoose.connect("mongodb://localhost:27017/collab-editor", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
