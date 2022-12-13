import React, { useContext } from "react";
import AppContext from "../ContextProvider";

const NeedAdmin = ({ children }) => {

	const appCtx = useContext(AppContext);
	if (appCtx === null) { return; }
	let user = appCtx.user;

	if (user.role === "admin") {
		return children
	} else {
		return <></>
	}
}

export default NeedAdmin