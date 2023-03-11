import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import "@/scss/main.scss";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Keychain from "./routes/Keychain";

const router = createMemoryRouter(
    [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/keychain",
            element: <Keychain />,
        },
    ],
    {
        initialEntries: ["/"],
        initialIndex: 0,
    }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
