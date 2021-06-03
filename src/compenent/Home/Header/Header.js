import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div className="bkg">
            <Navbar/>
            <HeaderMain/>
        </div>
    );
};

export default Header;