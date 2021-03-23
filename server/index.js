// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

/* Create APIs */
// You can visit http://localhost:3001/api to see {"message":"Hello from server!"}
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

/* Listen on port */
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});