import Navigation from "../components/Navigation";
import React from "react";

export default class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return (
            <div>
                <header>
                    <Navigation />
                    <h2>Use the tabs above to explore.</h2>
                </header>
            </div>
        );
    }
}
