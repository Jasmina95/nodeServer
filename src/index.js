// Use http module (integral part of the node)
// Use express after installing it
import express from "express";
import router from "./router";
const PORT = 5000;

// Initialize object app
/* Difference between app and http: app has router built into it
based on requested url router decides what to do */
const app = express();
router(app);

// Server should listen on port 5000
app.listen(PORT, error => {
  if (error) return console.log(error);
  console.log(`Server is listening on port ${PORT}`);
});
