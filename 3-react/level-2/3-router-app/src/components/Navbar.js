import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <ul className="nav flex-column">
                <li className="nav-item">
                <Link className="nav-item" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item" to="/addProduct">Add Product</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-item" to="/listAll">Display</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-item" to="/findProduct">Find Product</Link>
                </li>
            </ul>

        </div>
    );
};

export default Navbar;