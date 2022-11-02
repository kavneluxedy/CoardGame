import { useState, useEffect } from "react";

export default function useDb(dbName: string, collName: string, query: object, uri: string) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<any>(null);
	const [data, setData] = useState<object>({});

	useEffect(() => { console.log("loading : ", loading) }, [loading]);
	useEffect(() => { console.log("data : ", data) }, [data]);
	useEffect(() => { console.log("error : ", error) }, [error]);
	useEffect(() => { console.log("-----------------") }, [loading, data, error]);

	const dbComm = (dbName: string, collName: string, query: object, uri: string) => {
		var Params = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				dbName: dbName,
				collName: collName,
				query: query,
			}),
		};
		if (uri !== "/init") {
			let Url = uri;
			setLoading(true);
			fetch(Url, Params)
				.then((res) => res.json())
				.then((res: object) => setData(res))
				.catch((error) => { console.log(error); setError(error) })
				.finally(() => { setLoading(false) })
		}
	}

	useEffect(() => {
		dbComm(dbName, collName, query, uri)
	}, [dbName, collName, query, uri])

	return { loading, data, error, dbComm };
};