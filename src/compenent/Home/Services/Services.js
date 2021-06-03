import React from 'react';
import { faShoppingCart, faLock, faExchangeAlt, faHeadset } from '@fortawesome/free-solid-svg-icons';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Free Shipping',
        description: 'Capped at $39 per order',
        icon: faShoppingCart
    },
    {
        name: 'Security Payments',
        description: 'Up to 12 months installment',
        icon: faLock
    },
    {
        name: '14-Day Returns',
        description: 'Shop with confidence',
        icon: faExchangeAlt
    },
    {
        name: '24/7 Support',
        description: 'Delivered to your door',
        icon: faHeadset
    }
]


const Services = () => {
    return (
        <section className=" mt-5 container">
            <div className="  text-center">
                <h5 className="text-primary" >OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center ">
                <div className="row mt-5 ">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;