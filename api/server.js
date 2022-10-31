const express = require("express");
const bodyParser = require("body-parser");
const db = require("./endpoints");

const app = express();
const port = process.env.PORT || 5000;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/find", async (req, res) => {
  let param = req.body;
  let result = await db.find(param.dbName, param.collName, param.query.user);
  res.send(result);
});

app.post("/api/findOne", async (req, res) => {
  let param = req.body;
  let result = await db.findOne(param.dbName, param.collName, param.query);
  res.send(result);
});

app.post("/api/insertOne", async (req, res) => {
  let param = req.body;
  let result = await db.insertOne(param.dbName, param.collName, param.query);
  res.send(result);
});

app.post("/api/addUser", async (req, res) => {
  let param = req.body;
  await sleep(300);
  let result = await db.addUser(param.dbName, param.collName, param.query.user);
  res.send(result);
});

app.post("/api/auth", async (req, res) => {
  let param = req.body;
  console.log('p')
  let result = await db.auth(param.dbName, param.collName, param.query.user);
  res.send(result);
});

app.post("/api/tokenAuth", async (req, res) => {
  let param = req.body;
  console.log("t")
  let result = await db.tokenAuth(param.dbName, param.collName, param.query.user);
  res.send(result);
});

app.post("/api/createCard", async (req, res) => {
  let param = req.body;
  let result = await db.createCard(param.dbName, param.collName, param.query.card);
  res.send(result);
});

app.listen(port, () =>
  console.log(
    ` ↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n|                      |\n|Listening on port ${port}|\n|                      |\n ↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n`
  )
);
