// this time we are gonna store in files
const express = require("express");
const app = express();
const path = require("path");
const { readFile, writeFile } = require("fs");

app.use(express.json());

const filePath = path.join(__dirname, "todos", "mytodos.txt");

/* Main Routes */
app.get("/todos", async (req, res) => {
  await readFile(filePath, "utf-8", (err, result) => {
    if (err) console.log("ERROR: ", err);
    else res.status(200).send(result);
  });
});
app.get("/todos/:id", (req, res) => {});
app.post("/todos", async (req, res) => {
  console.log("HI");
  const { title, completed, description } = req.body;
  if (!title || !completed || !description)
    return res.status(402).send("send complete data");

  const id = Math.round(Math.random() * 100000);
  const newtodo = {
    id,
    ...req.body,
  };
  await writeFile(filePath, JSON.stringify(newtodo), { flag: "a" }, (err) => {
    console.log("ERROR: ", err);
  });
});

app.put("/todos/:id", (req, res) => {});
app.delete("/todos/:id", (req, res) => {});

app.all("*", (req, res) => {
  res.status(404).send("Not Found");
});

/* Starting server */
const startServer = () => {
  app.listen(5000, () => {
    console.log("started at port 5000");
  });
};
startServer();
