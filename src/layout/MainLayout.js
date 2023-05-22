import React from "react";
import NavBar from "../components/NavBar/NavBar";
import BottomLayout from "./BottomLayout";

function MainLayout({ children }) {
    return (
        <div>
            <NavBar></NavBar>
            <div>{children}</div>
            <BottomLayout></BottomLayout>
        </div>
    );
}

export default MainLayout;
