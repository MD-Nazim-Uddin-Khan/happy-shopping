import React, { useContext, useState } from 'react';
import './ContactUs.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../../App';
toast.configure();

const ContactUs = () => {

    const [item, setItem] = useState({})

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handleBlur = e => {
        const newItem = { ...item }
        newItem[e.target.name] = e.target.value;
        setItem(newItem);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       
        const formData = new FormData()
        // console.log(item);
        formData.append('email', item.email);
        formData.append('subject', item.subject);
        formData.append('description', item.description);

        // console.log('hello', formData)

        // console.log( 'formData')
        // for (var p of formData) {
        //     console.log(p);
        //   }

        fetch('http://localhost:7000/addContact', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data, 'ok-6')
                
            })
            .catch(error => {
                console.error(error)
            })
        // console.log('just')
    }

    const notify = () => {
        toast.success(`Your attribution has successfully. We Will call or email you, you can rest assured` , {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 8000
        })
    }

    return (

        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h1> connect with us</h1>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="col-md-9 mx-auto">

                        <div className="mb-3">
                            <div className="form-group">
                                <label className="form-label">Email address</label>
                                <input onBlur={handleBlur} type="email" className="form-control" name='email' placeholder="Enter your email" value={loggedInUser.email} required />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Subject</label>
                                <input onBlur={handleBlur} type="text" className="mt-3" name='subject' className="form-control" placeholder="Subject" required />
                            </div>
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea onBlur={handleBlur} type="text" className="form-control" name='description' rows="3" placeholder="Description" required></textarea>
                        </div>

                    </div>

                    <div className="form-group text-center">
                        <button onClick={notify} type="submit" className="btn btn-info"> Submit </button>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default ContactUs;