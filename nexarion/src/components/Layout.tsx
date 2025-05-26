import React from "react"
import { Outlet, Link } from "react-router-dom"
import { Navbar } from "./Navbar";
import { Main } from "./Main";

export const Layout: React.FC = () => {
    return <div id="layout">
        <Navbar/>
        <Main/>

        <Outlet />
    </div>
}