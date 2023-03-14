import React, { useState } from "react";
import Navigation from "../components/Navigation";

export default function Keychain() {
    const [password, setPassword] = useState("");

    function handleSubmit(event: any) {
        event.preventDefault();
        localStorage.setItem("keychain", password);
        setPassword("");
    }

    return (
        <div className="keychain">
            <header>
                <Navigation />
                <h1>Keychain</h1>
            </header>

            <section className="keychain__results">
                <div>Results:</div>
                <div>0</div>
            </section>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value={"Search"} />
                </div>
            </form>
        </div>
    );
}
