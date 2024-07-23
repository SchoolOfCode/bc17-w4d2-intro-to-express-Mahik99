// This is importing the express module in an express variable
import express from "express";

// This is creating a web application using Express and stores this application in a variable named app. You use this variable to set up and run your web server.
const app = express();

// Variable created to store port number which is what the server 'listens' to
const port = 3000;

// This is using a function to tell the app to get "/" from the URL, it has request and respond as parametres and asks to send a response of "Hello World!". It defines the route for the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// This is telling the server to listen to the port and console log a message saying `Example app listening on port 3000.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
