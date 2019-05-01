import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink to="/" > Home____</NavLink>
                <NavLink to="/cart" > Shopping_Cart </NavLink>
            </div>
    )
    }
}

export default withRouter(Navbar);