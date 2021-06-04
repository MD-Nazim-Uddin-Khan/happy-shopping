import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import ContactList from './ContactList';

const ClientContact = () => {

    const [content, setContent] = useState([])
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('https://limitless-cliffs-30591.herokuapp.com/contactItem')
            .then(res => res.json())
            .then(data => setContent(data))
    }, [])

    return (
        <section>
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

                <div className="section-header text-center m-4">
                    <h3> Well Come Back <span style={{ color: 'green'}}> {loggedInUser.name} </span> </h3>
                    <h4> (( Buyer's comments are here )) </h4>
                </div>

                <div className=" justify-content-center">
                    {
                        content.length === 0 &&
                        <button className="btn btn-success" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    }

                    {
                        content.map(item => <ContactList key={item._id} list={item} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientContact;