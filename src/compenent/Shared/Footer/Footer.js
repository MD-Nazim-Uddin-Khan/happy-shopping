import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div className="py-5 my-5  mt-5 mb-0 bkg5" >
            <div className="container">
                <div className="row ">
                    <div className="col-md-3 ">
                        <h5 style={{ color: 'white' }}> About US </h5>
                        <p style={{ color: 'white' }}> Story</p>
                        <p style={{ color: 'white' }}>Testimonials</p>
                    </div>
                    <div className="col-md-3">
                        <h5 style={{ color: 'white' }}>Services</h5>
                        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}> <p>Home</p> </Link>
                        <Link to="/myActivity" style={{ textDecoration: 'none', color: 'white' }}><p>My Activity</p></Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }}><p>Pricing</p></Link>
                    </div>
                    <div className="col-md-3">
                        <h5 style={{ color: 'white' }}>Contact Us</h5>
                        <p style={{ color: 'white' }}> <span> <FontAwesomeIcon className="icn" icon={faPhoneVolume}></FontAwesomeIcon> </span> 0168868868787</p>
                        <p style={{ color: 'white' }}> <span> <FontAwesomeIcon className="icn" icon={faMapMarkerAlt}></FontAwesomeIcon> </span> Dhaka Mirpur10</p>
                    </div>
                    <div className="col-md-3">
                        <h5 style={{ color: 'white' }}>Social</h5>
                        <Link style={{ textDecoration: 'none', color: 'white' }}> <p> Facebook </p> </Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }}> <p> YouTube </p> </Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }}> <p> Twitter </p> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;