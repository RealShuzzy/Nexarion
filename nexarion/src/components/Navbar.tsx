import React from "react"
import { Outlet, Link } from "react-router-dom"


export const Navbar: React.FC = () => {
    return <div id="navbar">
        <p>Navbar</p>
        <button className="btn btn-primary">Primary</button>
    </div>
}