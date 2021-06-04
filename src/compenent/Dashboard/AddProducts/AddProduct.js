import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddProduct = () => {

    const [ loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [item, setItem] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = e => {
        const newItem = { ...item }
        newItem[e.target.name] = e.target.value;
        setItem(newItem);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', item.name);
        formData.append('email', item.email);
        formData.append('price', item.price);

        fetch('https://limitless-cliffs-30591.herokuapp.com/addProduct', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section>
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

                <div className="section-header text-center m-4">
                    <h3> Well Come Back <span style={{ color: 'green'}}> {loggedInUser.name} </span> </h3>
                    <h4> (( Display product items add is here )) </h4>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name='email' placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name='name' placeholder="Enter Name" /> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name='price' placeholder="Enter Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a Product</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <div className="text-center mt-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddProduct;