import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <ul className="nav flex-column">
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addProduct">Add Product</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/listAll">Display</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/findProductByForm">Find Product</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/filterProducts">Find By Name</Link>
                </li>
            </ul>

        </div>
    );
};

export default Navbar;