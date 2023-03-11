import React from "react";
import Navigation from "../components/Navigation";

interface IPassword {
    password: string;
}

export default class Keychain extends React.Component<IPassword, any> {
    constructor(props: any) {
        super(props);
        this.state = { password: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    private handleChange(event: any) {
        this.setState({ password: event.target.value });
    }

    private handleSubmit(event: any) {
        event.preventDefault();
        localStorage.setItem("keychain", this.state.password);
        this.setState({ password: "" });
    }

    render() {
        return (
            <div>
                <header>
                    <Navigation />
                    <h1>Keychain</h1>

                    <form onSubmit={this.handleSubmit}>
                        <input
                            type={"password"}
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <br />
                        <input type="submit" value={"Submit"} />
                    </form>
                </header>
            </div>
        );
    }
}
