import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Odalar from "./pages/Odalar";
import Kurumsal from "./pages/Kurumsal";
import Iletisim from "./pages/Iletisim";
import SpaFitness from "./pages/SpaFitness";
import GirisYap from "./pages/GirisYap";
import KayıtOl from "./pages/KayıtOl";
import KullanıcıEkle from "./pages/KullanıcıEkle";
import OdaEkle from "./pages/OdaEkle";
import RezervasyonEkle from "./pages/RezervasyonEkle";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "Odalar",
        element: <Odalar />,
    },
    {
        path: "Kurumsal",
        element: <Kurumsal />,
    },
    {
        path: "Iletisim",
        element: <Iletisim />,
    },
    {
        path: "SpaFitness",
        element: <SpaFitness />,
    },
    {
        path: "GirisYap",
        element: <GirisYap />,
    },
    {
        path: "KayıtOl",
        element: <KayıtOl />,
    },
    {
        path: "RezervasyonEkle",
        element: <RezervasyonEkle />,
    },
    {
        path: "OdaEkle",
        element: <OdaEkle />,
    },
    {
        path: "KullanıcıEkle",
        element: <KullanıcıEkle />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <RouterProvider router={router} />
        </MantineProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
