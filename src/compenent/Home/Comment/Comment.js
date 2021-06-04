import React, { useEffect, useState } from 'react';
import CommentShow from './CommentShow';

const Comment = () => {

    const [comment, setComment] = useState([]);
    useEffect(() => {
        fetch('https://limitless-cliffs-30591.herokuapp.com/blogItem')
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    return (
        <section className="">
            <div className="container">
                <h2 className="text-center  text-primary mt-5 mb-5">Our customers has says</h2>
                <div className="row mt-5 mb-5" style={{marginTop: '2.5rem', justifyContent: 'center'}}>

                    {
                        comment.length === 0 && 
                        <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </div>
                    }

                    {
                        comment.map(cm => <CommentShow key={cm._id} comment={cm} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default Comment;