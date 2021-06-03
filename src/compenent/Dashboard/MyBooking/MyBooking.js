import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext } from '../../../App';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const MyBooking = () => {

    const { order } = useParams();
    const [orderInfo, setOrderInfo] = useState([])

    const oi = orderInfo.find(pd => pd._id === order)

    useEffect(() => {
        fetch('http://localhost:7000/products')
            .then(res => res.json())
            .then(data => setOrderInfo(data))
    }, [])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const CheckoutBtn = (data) => {
        const checkoutList = {
            name: data.name,
            price: data.price,
            img: data.image.img,
            data: new Date()
        }

        const UserOrder = { ...loggedInUser, ...checkoutList }
        const url = 'http://localhost:7000/addOrder'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UserOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        toast.success(`Your order has successfully. We Will call you, you can rest assured`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 8000
        })

    }

    return (
        <section>
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>


                <div className="rounded shadow   text-center" style={{ marginTop: '18px' }}>
                    <img style={{ height: '200px' }} className="img-fluid" src={`data:image/png;base64,${oi?.image.img}`} alt="" />
                    <h5>{oi?.name}</h5>
                    <div>
                        <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                        <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                        <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                        <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStar}></FontAwesomeIcon> </span>
                        <span> <FontAwesomeIcon className="mb-1 colorM" icon={faStarHalfAlt}></FontAwesomeIcon> </span>
                    </div>
                    <h4>${oi?.price}</h4>
                    <h6> Are you sure you want to buy now </h6>
                    <div className="d-flex justify-content-evenly">
                        <div>
                            <Link to="/home"><h4 className="btn btn-danger"> NOT NOW </h4></Link>
                        </div>
                        <div>
                            <button onClick={() => CheckoutBtn(oi)} className="btn btn-primary mb-2"> YES BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyBooking;