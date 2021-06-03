import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Payment = () => {
    return (
        <section>
            <Sidebar/>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <p> Payment</p>
            </div>
        </section>
    );
};

export default Payment;