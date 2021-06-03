import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser,  faGripHorizontal, faCalendarPlus, faTasks, faBlog} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {

    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);

    const [ isAdmin, setIsAdmin ] = useState(false);
    // console.log(loggedInUser)

    useEffect(() => {
        fetch(`http://localhost:7000/isAdmin?email=${loggedInUser.email}`)
        .then(res =>res.json(res))
        .then(data=> setIsAdmin(data))
        
        // .then(data => setIsAdmin(data))
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/myActivity" className="text-white" style={{ textDecoration: 'none' }}>
                        <FontAwesomeIcon icon={faGripHorizontal}/> <span>My Activity</span>
                    </Link>
                </li>
                <li>
                    <Link to="/userBlog" className="text-white" style={{ textDecoration: 'none' }}>
                        <FontAwesomeIcon icon={faBlog} /> <span>User Blog</span>
                    </Link>
                </li>
                <li>
                    <Link to="/home" className="text-white" style={{ textDecoration: 'none' }}>
                        <FontAwesomeIcon icon={faHouseUser} /> <span>Back to Home</span>
                    </Link>
                </li>
                { isAdmin && <div>

                    <li>
                        <Link to="/addProduct" className="text-white" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faCalendarPlus} /> <span>Add Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/productManage" className="text-white" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faTasks} /> <span>Product Manage</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/blogManage" className="text-white" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faTasks} /> <span>Blog Manage</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/clientContactList" className="text-white" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faTasks} /> <span>Client Contact List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/AdminPanel" className="text-white" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faTasks} /> <span>Admin Panel</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/AdminManage" className="text-white" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faTasks} /> <span>Admin Manage</span>
                        </Link>
                    </li>
                </div>}
            </ul>
        </div>
    );
};

export default Sidebar;