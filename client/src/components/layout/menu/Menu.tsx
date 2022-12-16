import React, { useRef, useState, MouseEvent, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CoardsLogo from "../../../assets/images/svg/logo-blanc.svg";
import ProfileLogo from "../../../assets/images/svg/profil.lumineux.min.svg";
import LogoutLogo from "../../../assets/images/svg/deconnexion.lumineux.min.svg";
import SettingsLogo from "../../../assets/images/svg/parametres.lumineux.min.svg";
import AdminLogo from "../../../assets/images/svg/admin.logo.min.svg";
import AppContext from '../../../utils/ContextProvider';
import DeckButton from "./DeckButton";

const Menu = () => {

    const currentLocation = useLocation();
    const [menuVisibility, setMenuVisibility] = useState<boolean>(false);
    const toggler = useRef<HTMLDivElement>(null);
    const menu = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();
    const nav = (into: string) => {
        setMenuVisibility(false);
        navigate(into);
    }

    const handleMenuToggler = (e: MouseEvent) => {
        if (e.target === toggler.current) {
            setMenuVisibility(true);
        }

        if (e.target !== toggler.current && e.target !== menu.current) {
            setMenuVisibility(false);
        }
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
        <>
            {currentLocation.pathname !== "/" && (
                <div data-menu={menuVisibility} >
                    {menuVisibility && <div id="closing-layer" onClick={e => handleMenuToggler(e)}></div>}

                    <div id="menu-toggler" ref={toggler} onClick={e => handleMenuToggler(e)}></div>


                    <nav id="nav-menu" ref={menu}>

                        <div className="logo-wrapper">

                            <DeckButton nav={nav} />

                            <img src={ProfileLogo} alt="" className="logo profile-logo" onClick={() => nav("game")} />

                            <img src={SettingsLogo} alt="" className="logo settings-logo" onClick={() => nav("settings")} />

                            {user.isConnected && user.role === "admin" && (
                                <img src={AdminLogo} className="logo admin-logo" onClick={() => nav("admin")} />
                            )}

                            {user.isConnected && (
                                <img src={LogoutLogo} className="logo logout-logo" onClick={() => logout()} />
                            )}

                            <img src={CoardsLogo} alt="Lien vers accueuil - Logo CoardsGame" className="logo coards-logo" onClick={() => nav("/")} />

                        </div>
                    </nav>

                </div>
            )}
        </>
    )
}

export default Menu