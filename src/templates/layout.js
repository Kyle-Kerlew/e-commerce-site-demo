import React from "react";
import NavigationBar from "../components/navigation/navigationBar";
import Footer from "../components/shared/footer";

function Layout({ children }) {
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="container is-fluid">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Layout;