/**
  You need to create a HTTP server in Node.js which will handle the logic of an authentication server.
  - Don't need to use any database to store the data.

  - Save the users and their signup/login data in an array in a variable
  - You can store the passwords in plain text (as is) in the variable for now

  Testing the server - run `npm run test-authenticationServer` command in terminal
 */

const express = require("express");
const PORT = 3000;
const app = express();

// write your logic here, DONT WRITE app.listen(3000) when you're running tests, the tests will automatically start the server
app.use(express.json());
const users = [];

// 1. POST /signup - User Signup
// Description: Allows users to create an account. This should be stored in an array on the server, and a unique id should be generated for every new user that is added.
// Request Body: JSON object with username, password, firstName and lastName fields.
// Response: 201 Created if successful, or 400 Bad Request if the username already exists.
// Example: POST http://localhost:3000/signup
app.post("/signup ", (req, res) => {
  const { username } = req.body;
  const usernameExist = users.find((item) => item.username == username);
  if (usernameExist) return res.status(400).send("ALREADY EXISTS");
  users.push({
    id: Math.round(Math.random() * 10000),
    ...req.body,
  });
  res.status(201).send("CREATED");
});

// 2. POST /login - User Login
// Description: Gets user back their details like firstname, lastname and id
// Request Body: JSON object with username and password fields.
// Response: 200 OK with an authentication token in JSON format if successful, or 401 Unauthorized if the credentials are invalid.
// Example: POST http://localhost:3000/login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      if (users[i].password != password)
        return res.status(402).send("WRONG PASSWORD");
      user = users[i];
      break;
    }
  }
  user
    ? res.status(201).send({
        firstname: user.firstname,
        lastname: user.lastname,
        id: user.id,
      })
    : res.status(401);
});

// 3. GET /data - Fetch all user's names and ids from the server (Protected route)
// Description: Gets details of all users like firstname, lastname and id in an array format. Returned object should have a key called users which contains the list of all users with their email/firstname/lastname.
// The users username and password should be fetched from the headers and checked before the array is returned
// Response: 200 OK with the protected data in JSON format if the username and password in headers are valid, or 401 Unauthorized if the username and password are missing or invalid.
// Example: GET http://localhost:3000/data
app.get("/data", (req, res) => {
  //first checking if we are authenticated or not
  const user = req.body;
  const isAuth = false;
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username == user.username &&
      users[i].password == user.password
    ) {
      isAuth = true;
      break;
    }
  }
  if (!isAuth) return res.status(401);
  res.send(users);
});

// - For any other route not defined in the server return 404
app.all("*", (req, res) => {
  res.status(404).send("ROUTE NOT FOUND");
});
module.exports = app;
