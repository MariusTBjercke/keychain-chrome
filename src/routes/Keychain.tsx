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
        <div>
            <header>
                <Navigation />
                <h1>Keychain</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <input type="submit" value={"Search"} />
                </form>
            </header>
        </div>
    );
}
