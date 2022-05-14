import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "../../../components/Sidebar/Sidebar";
import Content from "../../Content/Content";
import "../../../assets/css/home/Home.css";



export const Home = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);


    return (
        <Router>
            <div className="Home wrapper">
                <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
               
            </div>
        </Router>
    )
}
