import React, { useContext, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../App';
toast.configure()

const AdminPanel = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [item, setItem] = useState({})

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

        // console.log('hello', formData)

        // console.log( 'formData')
        // for (var p of formData) {
        //     console.log(p);
        //   }

        fetch('http://localhost:7000/addEmail', {
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
        toast.success('Admin add is successful' , {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 4000
        })
    }

    return (
        <section>
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

                <div className="section-header text-center m-4">
                    <h3> Well Come Back <span style={{ color: 'green'}}> {loggedInUser.name} </span> </h3>
                    <h4> (( Add your another admin & manage your website )) </h4>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com" required/>
                    </div>
                    <div className="text-center">
                        <button onClick={notify} type="submit" className="btn btn-primary">Add Admin</button>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default AdminPanel;