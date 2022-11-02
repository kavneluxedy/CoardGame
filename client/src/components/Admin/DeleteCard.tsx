import React, { useContext, useEffect } from 'react'
import useDb from '../../utils/Hooks/useDb'
import { AppContext } from "../../utils/ContextProvider";
import Loading from '../Loading';
import ICard from '../../utils/Interfaces/ICard'

const DeleteCard = (_id: ICard["_id"]) => {

	const AppCtx = useContext(AppContext);
	const { loading, error, data, dbComm } = useDb("", "", {}, "/init");

	useEffect(() => {
		if (!loading) {
			handleDBResponse(data);
			console.log(data);
		}
	}, [data, loading])

	if (AppCtx === null) { return <></>; }

	const { formError, setFormError } = { ...AppCtx }

	if (loading) { return <Loading /> }

	const handleDBResponse = (data) => {
		console.log(data);
		if (data.error) {
			setFormError({ ...data });
			console.error(error);
		} else {
			setFormError(undefined);
			if (data.result) {
				console.log('res')
			}
		}
	}

	const handleDelete = () => {
		console.log(_id);
		dbComm("COARD", "cards", _id!, "api/cards/delete");
	}

	return (
		<button onClick={handleDelete} className="panel-btn del-card-btn">🗑️</button>
	)
}

export default DeleteCard