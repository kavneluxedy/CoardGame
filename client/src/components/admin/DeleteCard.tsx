import React, { useContext, useEffect } from 'react'
import useDb from '../../utils/hooks/useDb'
import AppContext from "../../utils/ContextProvider";
import Loading from '../layout/Loading';
import ICard from '../../utils/interfaces/ICard';

const DeleteCard = ({ _id, refresh }: { _id: ICard["_id"], refresh: () => void }) => {
	const AppCtx = useContext(AppContext);
	const { loading, error, data, dbComm } = useDb("", "", {}, "/init");

	useEffect(() => {
		if (!loading) {
			handleDBResponse(data);

		}
	}, [data, loading])

	if (AppCtx === null) { return <></>; }

	const { formError, setFormError } = { ...AppCtx }

	if (loading) { return <Loading /> }

	const handleDBResponse = (data) => {
		if (data.error) {
			setFormError({ ...data });
			console.error(error);
		} else {
			setFormError(undefined);
			if (data.result) {
				refresh();
			}
		}
	}

	const handleDelete = () => {
		if (window.confirm("Effacer cette carte ?")) {
			dbComm("COARD", "cards", { _id: _id }, "api/cards/delete");
		}
	}

	return (
		<button onClick={handleDelete} className="panel-btn del-card-btn">🗑️</button>
	)
}

export default DeleteCard