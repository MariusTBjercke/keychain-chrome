import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className={"navigation"}>
            <div className={"navigation__tabs"}>
                <div className={"navigation__tab"} role={"button"}>
                    <NavLink to={"/"}>Home</NavLink>
                </div>
                <div className={"navigation__tab"} role={"button"}>
                    <NavLink to={"/keychain"}>Keychain</NavLink>
                </div>
            </div>
        </nav>
    );
}
