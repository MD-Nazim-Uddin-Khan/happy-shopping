import React from 'react';
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const ManageItem = ({info}) => {

    // const { name, price, email, data, img, _id, } = props.info;

    const deleteBtn = id => {
        fetch(`https://limitless-cliffs-30591.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('delete successfully')
            })
        toast.success('Deleted successfully', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        })
    }

    return (
        <div className="col-md-4">
            <div className="rounded shadow   text-center" style={{ marginTop: '18px' }}>
                <img style={{ height: '200px' }} className="img-fluid" src={`data:image/png;base64,${info.image.img}`} alt="" />
                <h5>{info.name}</h5>
                <div>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStarHalfAlt}></FontAwesomeIcon> </span>
                </div>

                <div className="d-flex justify-content-evenly">
                    <div>
                        <h4>${info.price}</h4>
                    </div>
                    <div>
                        <button onClick={() => deleteBtn(`${info._id}`)} type="button" className="btn btn-danger mb-2">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;