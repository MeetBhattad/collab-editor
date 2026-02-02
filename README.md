# Real-Time Collaborative Document Editor

A **real-time collaborative text editor** built with **React**, **Node.js**, **Socket.io**, and **MongoDB**. Multiple users can edit the same document simultaneously.

---

## Features

- Real-time collaborative editing
- Stores documents in MongoDB
- Easy-to-use React interface

---

## Tech Stack

- **Frontend:** React  
- **Backend:** Node.js + Express  
- **Realtime:** Socket.io  
- **Database:** MongoDB  

---

## Setup

1. Clone the repository: `git clone https://github.com/<your-username>/collab-editor.git` and `cd collab-editor`
2. Install dependencies: `cd server && npm install` then `cd ../client && npm install`
3. Start MongoDB locally (`mongodb://localhost:27017`) or use a cloud URI
4. Start the server: `cd ../server && node server.js`
5. Start the React app: `cd ../client && npm start`
6. Open browser at `http://localhost:3002`

---

## MongoDB Connection

In `server.js`:

`mongoose.connect("mongodb://localhost:27017/collab-editor", { useNewUrlParser: true, useUnifiedTopology: true });`

> Replace the URI if you are using MongoDB Atlas or any cloud MongoDB service.

---

## Usage

- Open multiple browser tabs or devices
- Type in the editor
- Changes sync in real-time across all clients
