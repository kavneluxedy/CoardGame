import express from "express";
import bodyParser from "body-parser";
import endpoints from "./endpoint/endpoints";

const { addUser, auth, create, createDeck, find, update, remove, tokenAuth } = { ...endpoints };
const app = express();
const port = process.env.PORT || 5000;

type TReq = {
	body: any,
}

type TRes = {
	send: any;
}

app.use("/", express.static("public"));

app.use(bodyParser.json({ limit: "16mb" }));
app.use(bodyParser.urlencoded({ limit: "16mb", extended: true, parameterLimit: 100000 }));


app.post("/api/addUser", async (req: TReq, res: TRes) => {
	let param = req.body;
	let result = await addUser(param.dbName, param.collName, param.query.user);
	res.send(result);
});

app.post("/api/auth", async (req: TReq, res: TRes) => {
	let param = req.body;
	let result = await auth(param.dbName, param.collName, param.query.user);
	res.send(result);
});

app.post("/api/tokenAuth", async (req: TReq, res: TRes) => {
	let param = req.body;
	let result = await tokenAuth(param.dbName, param.collName, param.query.user);
	res.send(result);
});

app.post("/api/cards/create", async (req: TReq, res: TRes) => {
	let param = req.body;
	console.log(param.query.card, "routeur 43");
	let result = await create(param.dbName, param.collName, param.query.card);
	res.send(result);
});

app.post("/api/cards/find", async (req: TReq, res: TRes) => {
	let param = req.body;
	let result = await find(param.dbName, param.collName, param.query);
	res.send(result);
});

app.post("/api/cards/update", async (req: TReq, res: TRes) => {
	let param = req.body;
	let result = await update(param.dbName, param.collName, param.query.card);
	res.send(result);
});

app.post("/api/cards/delete", async (req: TReq, res: TRes) => {
	let param = req.body;
	let result = await remove(param.dbName, param.collName, param.query);
	res.send(result);
});

app.post("/api/deck/create", async (req: TReq, res: TRes) => {
	let param = req.body;
	let result = await createDeck(param.dbName, param.collName, param.query);
	res.send(result);
});

app.listen(port, () =>
	console.log(
		` ↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n|                      |\n|Listening on port ${port}|\n|                      |\n ↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n`
	)
);