import React, { Dispatch, SetStateAction, useContext } from "react";
import { AppContext } from "../../utils/ContextProvider";
import Button from "../Button";

const Logout = () => {

    const AppCtx = useContext(AppContext);
    if (AppCtx === null) {
        return <></>;
    }
    const {
        setUser,
        translate,
    } = { ...AppCtx };

    return (
        <Button
            className="open button"
            onClick={() => {
                setUser({ isConnected: false, nickname: undefined, role: undefined });
            }}
        >
            {translate("Logout").toLocaleUpperCase()}
        </Button>
    );
};

export default Logout;
