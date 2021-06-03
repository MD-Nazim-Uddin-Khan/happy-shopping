import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDollyFlatbed } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid"> 
                    <Link className="navbar-brand" to=""> <FontAwesomeIcon  className="happy5" icon={faDollyFlatbed} /> Happy Shopping</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div  className="collapse navbar-collapse d-flex flex-row-reverse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link ms-5 active" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/myActivity"  className="nav-link ms-5 active">Dashboard</Link>
                            </li>
                            <li className="nav-item primary">
                            <Link className="nav-link ms-5 active btn btn-warning" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;