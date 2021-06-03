import React from 'react';

const AdminList = ({ info }) => {
    return (
        <div className="card">
            <div className="card-body">
                Admin Email :- {info.email}
            </div>
        </div>
    );
};

export default AdminList;