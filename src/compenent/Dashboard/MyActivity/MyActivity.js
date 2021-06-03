import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import ActivistsInfo from './ActivistsInfo';

const MyActivity = () => {

    const [activity, seyActivity] = useState([])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:7000/orderItem')
            .then(res => res.json())
            .then(data => seyActivity(data))
    }, [])

    return (
        <section>
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

                <div className="section-header text-center m-4">
                    <h3> <span style={{ color: 'green'}}> {loggedInUser.name} </span> Activity</h3>
                </div>

                <div className="row justify-content-center ">
                    {
                        activity.length === 0 &&
                        <div className="spinner-border text-success mt-3" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }

                    {
                        activity.map(item =>  <ActivistsInfo key={item} info={item} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyActivity;