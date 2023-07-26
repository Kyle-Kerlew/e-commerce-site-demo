import React from "react";
import NavigationBar from "../components/navigation/navigationBar";
import Footer from "../components/shared/footer";

import "./css/layout.css";
function Layout({ children }) {
    return (
        <div>
            <NavigationBar />
            <div className="layout-container">
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout;