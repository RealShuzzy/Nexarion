import React from "react"
import { Outlet, Link } from "react-router-dom"


export const Main: React.FC = () => {
    return <div id="main">
        <p>Main</p>
        <ul>
            <li><Link to="/">1</Link></li>
            <li><Link to="work">2</Link></li>
        </ul>
        <Outlet />
    </div>
}