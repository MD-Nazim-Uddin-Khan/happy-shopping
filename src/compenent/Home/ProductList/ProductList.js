import React from 'react';
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProductList.css';
import { useHistory } from 'react-router-dom';

const ProductList = ({ pd }) => {
    const history= useHistory();
    const handleClick = () => {
        history.push(`/booking/${pd._id}`)
    }
    return (
        <div className="col-md-3 ">
            <div className="rounded shadow   text-center" style={{ marginTop: '18px'}}>
                <img style={{height: '200px'} }className="img-fluid" src={`data:image/png;base64,${pd.image.img}`} alt="" />
                <h5>{pd.name}</h5>
                <div>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                    <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStarHalfAlt}></FontAwesomeIcon> </span>
                </div>

                <div className="d-flex justify-content-evenly">
                    <div>
                        <h4>${pd.price}</h4>
                    </div>
                    <div>
                        <button onClick={handleClick} className="btn btn-primary mb-2"> buy now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductList;