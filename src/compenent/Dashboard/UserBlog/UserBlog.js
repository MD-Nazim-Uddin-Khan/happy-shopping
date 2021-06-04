import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLaughSquint } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../../App';
toast.configure();

const UserBlog = () => {

    const [item, setItem] = useState({});

    const [ loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleBlur = e => {
        const newItem = { ...item }
        newItem[e.target.name] = e.target.value;
        setItem(newItem);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       
        const formData = new FormData()
        // console.log(item);
        formData.append('name', item.name);
        formData.append('address', item.address);
        formData.append('information', item.information);

        // console.log('hello', formData)

        // console.log( 'formData')
        // for (var p of formData) {
        //     console.log(p);
        //   }

        fetch('https://limitless-cliffs-30591.herokuapp.com/addBlog', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data, 'ok-8')
            })
            .catch(error => {
                console.error(error)
            })
        // console.log('just')
    }

    const notify = () => {
        toast.success('Thank you for your feedback' , {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 4000
        })
    }

    return (
        <section>
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="section-header text-center m-4">
                    <h3> <FontAwesomeIcon  className="happy" icon={faLaughSquint} /><FontAwesomeIcon className="happy" icon={faLaughSquint} />If you happy with our service, Please let us know what you think of us.<FontAwesomeIcon className="happy" icon={faLaughSquint} /><FontAwesomeIcon className="happy" icon={faLaughSquint} /></h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Enter your name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name='name' placeholder="" value={loggedInUser.name} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Enter your address</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name='address' placeholder="address" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Your comment ment</label>
                        <textarea onBlur={handleBlur} className="form-control" name='information' rows="3" placeholder="comment ment" required></textarea>
                    </div>
                    <div className="text-center">
                        <button onClick={notify} type="submit" className="btn btn-success"> Submit </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UserBlog;