import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import AdminList from './AdminList';

const AdminManage = () => {

    const [admin, setAdmin] = useState([])

    useEffect(() => {
        fetch('http://localhost:7000/getEmail')
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])

    return (
        <section>
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

                <div className="section-header text-center m-4">
                    <h3 style={{ color: 'green'}}>  ADMIN  DETAILS</h3>
                </div>

                <div className="row justify-content-center ">

                    {
                        admin.length === 0 &&
                        <div className="spinner-border text-success mt-3" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }

                    {
                        admin.map(item =>  <AdminList key={item._id} info={item} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default AdminManage;