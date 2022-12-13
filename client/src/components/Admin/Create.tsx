import React, { useState } from "react";
import CreateUnit from "./tab/CreateUnit";
import CreateLand from "./tab/CreateLand";
import Button from "../layout/misc/Button";

type TTab =
	| "Unit"
	| "Land"
	| "Spell"
	| "Build"
	| "Consumable";

const Create = ({ refresh }: { refresh: () => void }) => {

	const [currentTab, setCurrentTab] = useState<TTab>("Land");

	const handleVisibility = (flag: TTab) => {
		setCurrentTab(flag);
	}

	return (
		<div id="create-modal">
			<Button onClick={() => handleVisibility("Unit")} >Unit</Button>
			<Button onClick={() => handleVisibility("Land")} >Land</Button >
			{currentTab === "Unit" && <CreateUnit refresh={refresh} />}
			{currentTab === "Land" && <CreateLand refresh={refresh} />}
		</div >
	)
}

export default Create
