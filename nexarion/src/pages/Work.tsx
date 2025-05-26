import React from "react"
import { ToDoForm } from "../components/forms/ToDoForm";
const winObj = (window as any).electron;

export const Work: React.FC = () => {
    const electron = (window as any).electron;
    return <div>

        <p>This is our work</p> <br />
        <p>The home directory is @ {electron.homeDir()}</p>
        <p>The version of the os is {electron.osVersion()}</p>
        <p>The architecture is {electron.arch()}</p>
        <button className="btn btn-primary">One</button>
        <ToDoForm />
    </div>
}