import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Comment from '../Comment/Comment';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';
import ProductItem from '../ProductItem/ProductItem';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <ProductItem/>
            <Comment/>
            <ContactUs/>
            <Footer/>        
        </div>
    );
};

export default Home;