import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import DeckButton from '../../pages/menu/buttons/DeckButton';
import { AppContext } from "../../utils/ContextProvider";
import ProfileLogo from "../../assets/images/svg/profil.lumineux.min.svg";
import LogoutLogo from "../../assets/images/svg/deconnexion.lumineux.min.svg";
import SettingsLogo from "../../assets/images/svg/parametres.lumineux.min.svg";
import AdminLogo from "../../assets/images/svg/admin.logo.min.svg";

const HomepageMenu = () => {

    const navigate = useNavigate();
    const nav = (into: string) => {
        navigate(into);
    }

    const logout = () => {
        if (window.confirm("SE DECONNECTER ?")) {
            setUser({ isConnected: false })
        }
    }

    const AppCtx = useContext(AppContext);
    if (AppCtx === null) {
        return <></>;
    }
    const { user, setUser } = { ...AppCtx };

    return (
        <nav id="home-nav-menu">
            <div className="home-logo-wrapper">
                {user.isConnected && (
                    <>
                        <DeckButton nav={nav} />
                        <img src={ProfileLogo} className="logo profile-logo" onClick={() => nav("game")} />
                        <img src={SettingsLogo} className="logo settings-logo" onClick={() => nav("settings")} />
                        {user.isConnected && user.role === "admin" && (
                            <img src={AdminLogo} className="logo admin-logo" onClick={() => nav("admin")} />
                        )}
                        <img src={LogoutLogo} className="logo logout-logo" onClick={() => logout()} />
                    </>
                )}
            </div>
        </nav>
    )
}

export default HomepageMenu