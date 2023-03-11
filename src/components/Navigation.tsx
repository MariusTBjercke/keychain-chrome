import React from "react";
import { NavLink } from "react-router-dom";

interface CustomProps {
    myProp?: string;
}

export default class Navigation extends React.Component<CustomProps, any> {
    constructor(props: any) {
        super(props);
        const { myProp } = this.props;
    }

    render() {
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
}
