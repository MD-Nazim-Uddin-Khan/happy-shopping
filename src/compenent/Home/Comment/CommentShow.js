import React from 'react';

const CommentShow = ({ comment }) => {
    return (
        <div className="col-md-3" >
            <div style="width: 18rem;" className="rounded shadow card  text-center" style={{ marginTop: '18px', overflowY: 'scroll' }}>

                <div className="card-body" style={{ height: '250px'}}>

                    <h4 className="card-title">{comment.name}</h4>
                    <h6 className="card-subtitle mb-2 " style={{ color: 'dimgrey' }}>{comment.address}</h6>
                    <div>
                        <p className="card-text" style={{ color: 'rgba(74, 80, 85, 0.774)' }}>{comment.information}</p>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default CommentShow;