// server/index.js
const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

/* Have Node serve the files for our built React app */
app.use(express.static(path.resolve(__dirname, '../client/build')));

/* Create APIs */
// You can visit http://localhost:3001/api to see {"message":"Hello from server!"}
app.get("/api", (req, res) => {
    res.json({ message: "I remain confident of this: I will see the goodness of the LORD in the land of the living" });
  });

/* All other GET requests not handled before will return our React app */
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

/* Listen on port */
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});