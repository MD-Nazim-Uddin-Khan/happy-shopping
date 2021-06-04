import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import BlogManageList from './BlogManageList';

const BlogManage = () => {

    const [comment, setComment] = useState([])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('https://limitless-cliffs-30591.herokuapp.com/blogItem')
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    return (
        <section>
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

                <div className="section-header text-center m-4">
                    <h3> Well Come Back <span style={{ color: 'green'}}> {loggedInUser.name} </span> </h3>
                    <h4> (( Display blog items manage here )) </h4>
                </div>

                <div className="row justify-content-center ">
                    {
                        comment.length === 0 &&
                        <div className="spinner-border text-success mt-3" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }

                    {
                        comment.map(item =>  <BlogManageList key={item._id} info={item} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogManage;