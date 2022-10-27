import { Dispatch, SetStateAction } from "react"
import { IUser } from "../../App";

const Logout = (setUser: Dispatch<SetStateAction<IUser>>) => {
    setUser({ isConnected: false, nickname: undefined, role: undefined })
}

// (window.confirm("SE DÉCONNECTER ?")) ? // COMMENT TO DEV

export { Logout }