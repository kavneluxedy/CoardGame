import express from "express";
import bodyParser from "body-parser";
import endpoints from "./endpoint/endpoints";

const { addUser, auth, createCard, tokenAuth } = {...endpoints};
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/addUser", async (req, res) => {
  let param = req.body;
  let result = await addUser(param.dbName, param.collName, param.query.user);
  res.send(result);
});

app.post("/api/auth", async (req, res) => {
  let param = req.body;
  let result = await auth(param.dbName, param.collName, param.query.user);
  res.send(result);
});

app.post("/api/tokenAuth", async (req, res) => {
  let param = req.body;
  let result = await tokenAuth(param.dbName, param.collName, param.query.user);
  res.send(result);
});

app.post("/api/createCard", async (req, res) => {
  let param = req.body;
  let result = await createCard(param.dbName, param.collName, param.query.card);
  res.send(result);
});

app.listen(port, () =>
  console.log(
    ` ↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n|                      |\n|Listening on port ${port}|\n|                      |\n ↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n`
  )
);
