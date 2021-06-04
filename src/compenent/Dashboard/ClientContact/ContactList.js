import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const ContactList = ({ list }) => {

    const deleteBtn = id => {
        fetch(`https://limitless-cliffs-30591.herokuapp.com/delete3/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('delete successfully')
            })
        toast.success('User contact list deleted successfully', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000
        })
    }

    return (
        <div className="card mb-3">
            <div className="card-header">
                <h5> Email Address : {list.email} </h5>
            </div>
            <div className="card-header">
                <h5 className="card-title">Subject : {list.subject}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">{list.description}</p>
                <div className="d-flex align-items-end ">
                    <button onClick={() => deleteBtn(`${list._id}`)} className="btn btn-success ms-auto"> delete </button>
                </div>
            </div>
        </div>

    );
};

export default ContactList;