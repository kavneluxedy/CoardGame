import express from "express";
import bodyParser from "body-parser";
import endpoints from "./endpoint/endpoints";

const { addUser, auth, create, find, update, remove, tokenAuth } = { ...endpoints };
const app = express();
const port = process.env.PORT || 5000;

type TReq = {
	body: any,
}

type TRes = {
	send: any;
}

app.use("/", express.static("public"));

app.use(bodyParser.json({ limit: "4mb" }));
app.use(bodyParser.urlencoded({ limit: "4mb", extended: true, parameterLimit: 2000 }));

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
	// console.table(param.query.card);
	// console.trace(typeof param.query, "server.ts: L-41");
	
	let result = await create(param.dbName, param.collName, param.query.card);
	// console.log("is ok undefined ==>");
	// console.trace(result);
	res.send(result);
});

app.post("/api/cards/find", async (req: TReq, res: TRes) => {
	let param = req.body;
	let result = await find(param.dbName, param.collName, param.query);
	res.send(result);
});

app.post("/api/cards/update", async (req: TReq, res: TRes) => {
	let param = req.body;
	console.log(param.query.card);
	let result = await update(param.dbName, param.collName, param.query.card);
	res.send(result);
});

app.post("/api/cards/delete", async (req: TReq, res: TRes) => {
	let param = req.body;
	let result = await remove(param.dbName, param.collName, param.query);
	res.send(result);
});

app.listen(port, () =>
	console.log(
		` ↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n|                      |\n|Listening on port ${port}|\n|                      |\n ↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔↔\n`
	)
);