import React, { useContext } from "react";
import { AppContext } from "../../utils/ContextProvider";

const NeedAuth = ({ children }) => {

	const appCtx = useContext(AppContext);
	if (appCtx === null) { return; }
	let user = appCtx.user;

	if (user.role === "admin") { // ! user.role ne doit jamais s'assigner sur la valeur de session.role
		return children
	} else {
		return <></>
	}
}

export default NeedAuth