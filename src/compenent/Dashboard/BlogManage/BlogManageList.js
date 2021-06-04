import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const BlogManageList = ({info}) => {

    const deleteBtn = id => {
        fetch(`https://limitless-cliffs-30591.herokuapp.com/delete4/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('delete successfully')
            })
        toast.success('User blog list deleted successfully', {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000
        })
    }

    return (
        <div className="col-md-4" >
            <div style="width: 18rem;" className="rounded shadow card  text-center" style={{ marginTop: '18px', overflowY: 'scroll' }}>
                <div className="card-body" style={{ height: '250px'}}>
                    <h4 className="card-title">{info.name}</h4>
                    <h6 className="card-subtitle mb-2 " style={{ color: 'dimgrey' }}>{info.address}</h6>
                    <p className="card-text" style={{ color: 'rgba(74, 80, 85, 0.774)' }}>{info.information}</p>
                    <div>
                        <button onClick={() => deleteBtn(`${info._id}`)} type="button" className="btn btn-danger mb-2"> Delete </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogManageList;