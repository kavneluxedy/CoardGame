import React, { MouseEvent, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import logoSource from "../../assets/images/svg/logo.min.svg";
// import o_logo from "../../assets/images/svg/o_logo.min.svg";
import Button from '../../components/Button';
import ColorTheme from '../../components/ColorTheme';
import { AppContext } from '../../utils/ContextProvider';

const Menu = () => {
    const navigate = useNavigate();

    const AppCtx = useContext(AppContext);
    if (AppCtx === null) { return <></>; }
    const { user, setUser, modalName, setModalName, setModalVisibility, translate, menuToggler } = { ...AppCtx }

    const handleLogout = () => {
        (window.confirm("SE DÉCONNECTER ?"))
            ? setUser({ isConnected: false })
            : console.log("Vous êtes rester connecté !")
    }

    const nav = (e: MouseEvent, into: string) => {
        e.preventDefault();
        navigate(into);
    }

    return (
        <nav id="nav-menu" data-nav-menu={menuToggler}>

            <div>
                <a onClick={e => { nav(e, "/") }}>
                    <img id="nav-menu-logo" src={logoSource} width="175" />
                </a>
            </div>

            <menu>

                <div id="menu-wrapper">

                    <div id="play">
                        <Button
                            onClick={() => {
                                setModalVisibility(true);
                                setModalName("lobby");
                            }}
                        >
                            {translate("Play")}
                        </Button>
                    </div>

                    <div id="auth">

                        {
                            !user.isConnected &&
                            <Button
                                onClick={() => {
                                    setModalVisibility(true);
                                    setModalName("login");
                                }}
                            >
                                {translate("LogIn")}
                            </Button>
                        }
                        {
                            !user.isConnected &&
                            <Button
                                onClick={() => {
                                    setModalVisibility(true);
                                    setModalName("register");
                                }}
                            >
                                {translate("SignUp")}
                            </Button>
                        }
                        {
                            user.isConnected &&
                            <Button
                                onClick={() => handleLogout()}>
                                SE DÉCONNECTER
                            </Button>
                        }
                        {
                            user.isConnected && user.role === "admin" &&
                            <Button
                                onClick={() => {
                                    setModalVisibility(true);
                                    setModalName("admin");
                                }}
                            >
                                {translate("Administrator")}
                            </Button>
                        }

                        <ColorTheme />

                        {/* <a href="lore">
                    <span>H</span>
                    <span>I</span>
                    <span>S</span>
                    <span>T</span>
                    <span><img src={o_logo} width="15" /></span>
                    <span>I</span>
                    <span>R</span>
                    <span>E</span>
                </a> */}
                    </div>





                </div>
            </menu>
        </nav >
    )
}

export default Menu