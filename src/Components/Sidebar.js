import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div style={{ width: "20%", backgroundColor: "pink", height: "100%" }}>
            <h4>Sidebar</h4>
            <Link to="/one"> One</Link> <br />
            <Link to="/two"> two</Link> <br />
            <Link to="/three"> thee</Link> <br />
            <Link to="/four"> four</Link> <br />
        </div>
    );
};
export default Sidebar;
