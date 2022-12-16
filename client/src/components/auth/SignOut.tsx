import React, { useContext } from "react";
import AppContext from "../../utils/ContextProvider";
import Button from "../layout/misc/Button";

const SignOut = () => {

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

export default SignOut;
