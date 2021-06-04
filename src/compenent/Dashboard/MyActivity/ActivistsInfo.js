import React from 'react';
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const ActivistsInfo = (props) => {
    
    // const { name, price, email, data, img, _id } = props.info;
    const { name, price, img, _id } = props.info;

    const deleteBtn = id => {
        fetch(`https://limitless-cliffs-30591.herokuapp.com/delete2/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('delete successfully')
            })
        toast.success('Your order deleted successfully', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000
        })
    }

    return (
        <div className="col-md-4">
            <div className="rounded shadow   text-center" style={{ marginTop: '18px' }}>
                <img style={{ height: '200px' }} className="img-fluid" src={`data:image/png;base64,${img}`} alt="" />
                <h5>{name}</h5>
                <div>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStarHalfAlt}></FontAwesomeIcon> </span>
                </div>

                <div className="d-flex justify-content-evenly">
                    <div className="">
                        <h4>${price}</h4>
                    </div>
                    <div className="">
                        {/* <button className="btn btn-primary mb-2"> buy now</button> */}
                        <h4 style={{ color: 'rgb(228, 30, 30)' }}> Pending </h4>
                    </div>
                </div>
                <button onClick={() => deleteBtn(`${_id}`)} type="button" className="btn btn-danger mb-2">Delete</button>
            </div>
        </div>
    );
};

export default ActivistsInfo;